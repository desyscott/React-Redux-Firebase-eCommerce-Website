import {db} from "../../../../Firebase"
import {collection,setDoc,doc, addDoc} from "firebase/firestore"


//helper function 



export const handleAddProduct = product => {
    return new Promise((resolve, reject) => {
        addDoc(collection(db,"products"),{
            product:product,
           }).then(()=>{
               resolve()
           }).catch((err)=>{
               reject(err)
           })
    });
  }
  