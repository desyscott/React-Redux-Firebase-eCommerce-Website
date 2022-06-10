
import {userTypes} from "./userTypes"

//Firebase
import {auth,handleUserProfile} from "../../../../Firebase"
import { 
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,
signInWithRedirect,
sendPasswordResetEmail} from "firebase/auth";


//redux action is function that return payload and type
export const setCurrentUser =(user)=>{
    return{
        type:userTypes.USER_STATE_CHANGE,
        payLoad:user,
    }
}


export const resetAllAuthForms=()=>({
    type:userTypes.RESET_AUTH_FORMS
})

export const signInUser =({email,password})=>async dispatch=>{
    try{
         await signInWithEmailAndPassword(auth,email,password);
         dispatch({
            type:userTypes.SIGN_IN_SUCCESS,
            payLoad:true
         })
    }catch(err){
        console.log(err)  
    }
    
}


export const signUpUser=({name,email,password,confirmPassword})=>async dispatch=>{
    
    if(password!==confirmPassword){
        const err=["password don't match"]
        dispatch({
            type:userTypes.SIGN_UP_ERROR,
            payLoad:err
        })
        
    }
    
    try{
       const {user}= await createUserWithEmailAndPassword(auth,email,password)
         await handleUserProfile(user,{name})
         dispatch({
                   type:userTypes.SIGN_UP_SUCCESS,
                   payLoad:true
                   })
         
    }catch(err){
        console.log(err)
    }
    
}



export const  resetPassword=({email})=>async dispatch=>{
    const config={
        url: "http://localhost:3000/login"
    }
    
    try{
        await sendPasswordResetEmail(auth,email,config).then(()=>{
            dispatch({
                type:userTypes.RESET_PASSWORD_SUCCESS,
                payLoad:true
            })   
        }).catch(()=>{
            const err=["Email is not found"];
            dispatch({
                type:userTypes.RESET_PASSWORD_ERROR,
                payLoad:err
            })  
            console.log(err) 
        })
    }catch(err){
        console.log(err)
    }
    
}


export const signInWIthGoogle=()=>async dispatch=>{
   try{ 
        const provider = new GoogleAuthProvider();
       provider.setCustomParameters({ prompt: 'select_account' });
         await signInWithPopup(auth, provider).then(()=>{
        dispatch({
            type:userTypes.SIGN_IN_SUCCESS,
            payLoad:true
        })
    })
        // signInWithRedirect(auth, provider)
}catch(err){
    console.log(err)
}
    
}