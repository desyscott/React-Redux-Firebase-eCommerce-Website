import {db} from "../../../../Firebase"
import {
    collection,setDoc,doc,
         getDocs,getDoc, deleteDoc,
         orderBy,query,where,
         startAfter,limit
         } from "firebase/firestore"


//helper function for handle async function
export const handleAddProduct = product => {
    return new Promise((resolve, reject) => {
       setDoc(doc(collection(db,"products")),product).then(()=>{
               resolve()
           }).catch((err)=>{
               reject(err)
           })
    });
  }


  export const handleFetchProducts=({filterType,startAfterDoc,persistProducts=[]})=>{
    return new Promise((resolve,reject)=>{
    const pageSize = 6
    
      //initial query of 6 limited  docs
       let ref= query(collection(db,"products"),orderBy("createdDate","desc"),limit(pageSize));
  
  //if the filter handler is selected run this query
        if(filterType) 
        ref=query(collection(db,"products"),orderBy("createdDate","desc"),limit(pageSize),where("productCategory","==", filterType));
        
  //if the user press loadMore handler, starting from the last  doc  of the 6 docs query another 6 docs
        if(startAfterDoc) 
         ref=query(collection(db,"products"),
                   orderBy("createdDate","desc"),
                   limit(pageSize),
                   startAfter(startAfterDoc));
        
         getDocs(ref).then((snapshot)=>{
             const totalDocSize =snapshot.size;
           
             const data = [
               ...persistProducts,
                 ...snapshot.docs.map(doc=>{
                 return{
                     ...doc.data(),
                     documentID:doc.id,
                 }
             })]
             
             resolve({
                 data,
                 queryDoc:snapshot.docs[totalDocSize-1],  //sending the last document
                 isLastPage:totalDocSize <1 ,
             });
     console.log( totalDocSize )
         }).catch((err)=>{
             reject(err);
         })
    })
}
  
  
  
  export const handleDeleteProducts=(documentID)=>{
       return new Promise((resolve, reject)=>{
              deleteDoc(doc(db,"products",documentID)).then(()=>{
                  resolve()
              }).catch((err)=>{
                  reject(err)
              })
       })
      
  }
  
  
  
  export const  handleFetchProduct =(productID)=>{
      return new Promise((resolve,reject)=>{
            const docRef= doc(db,"products",productID)
             getDoc(docRef).then((snapshot)=>{
                 if(snapshot.exists){
                     resolve(
                         snapshot.data(),
                     )
                 }
             }).catch((err)=>{
                 reject(err)
             })
      })
      
  }