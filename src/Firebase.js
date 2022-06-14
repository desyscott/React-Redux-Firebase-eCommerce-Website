import{initializeApp} from 'firebase/app';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
import {getFirestore,collection,doc,getDoc,updateDoc,setDoc} from  'firebase/firestore';
import {getStorage} from 'firebase/storage'; 

// const firebaseConfig = { 
//   apiKey:process.env.REACT_NATIVE_APP_API_KEY,
//  authDomain:process.env.REACT_NATIVE_APP_AUTH_DOMAIN,
// databaseURL:process.env.REACT_NATIVE_APP_DATABASE_URL,
//   projectId:process.env.REACT_NATIVE_APP_PROJECT_ID,
//   storageBucket:process.env.REACT_NATIVE_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_NATIVE_APP_MESSAGING_SENDER_ID,
//   appId:process.env.REACT_NATIVE_APP_APP_ID
// };


const firebaseConfig = {
    apiKey:"AIzaSyAhWeepiEg9mTLSXdfLl1GVLS8tnBjkJDo",
    authDomain: "gromart-307.firebaseapp.com",
    databaseUrl:"http://gromart-307.firebaseapp.com",
    projectId: "gromart-307",
    storageBucket: "gromart-307.appspot.com",
    messagingSenderId: "249719529249",
    appId: "1:249719529249:web:350251df1889a48049a860"
  };

const firebaseApp =initializeApp(firebaseConfig);
const  auth =getAuth(firebaseApp)
const  db =getFirestore(firebaseApp)
const  storage =getStorage(firebaseApp)

export {auth ,db,storage}

export const handleUserProfile=async({authUser,additionalData})=>{
  if(!authUser) return;
  
  //if the user exist
  const {uid} =authUser;
  
  const userRef= doc(db,'users',`${uid}`);
 const snapShot =  await getDoc(userRef)
 
 
 //if  user does not exists 
 if(!snapShot.exist){
   const {email,name}=authUser;
   const Timestamp=new Date()
   const userRoles=["user"];
   
   try{
     
    await setDoc(userRef, {
      email,
      name,
      userRoles,
      createdDate:Timestamp,
      ...additionalData
    });
     
   }catch(err){
     console.log(err)
   }
 } 
 
 return userRef
}


///
export  const getCurrentUser =()=>{
  return new Promise((resolve,reject)=>{
    const unsubscribe = onAuthStateChanged(auth,(authUser)=>{
      unsubscribe();
      resolve(authUser)
    },reject)
  })
}