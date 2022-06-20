import{initializeApp} from 'firebase/app';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
import {getFirestore,collection,doc,getDoc,updateDoc,setDoc} from  'firebase/firestore';
import {getStorage} from 'firebase/storage'; 

// const firebaseConfig = { 
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//  databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };


const firebaseConfig = {
  apiKey: "AIzaSyAxdMXhRZJrGFqv-FuLlzM2zBBv4O5GagU",
  authDomain: "e-commerce-app-67b5c.firebaseapp.com",
  dataBaseUrl: "http://e-commerce-app-67b5c.firebaseaio.com",
  projectId: "e-commerce-app-67b5c",
  storageBucket: "e-commerce-app-67b5c.appspot.com",
  messagingSenderId: "243903960120",
  appId: "1:243903960120:web:4a0fc380e35d44fa4b02cd"
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