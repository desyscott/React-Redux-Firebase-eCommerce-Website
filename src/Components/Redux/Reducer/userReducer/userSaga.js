import {takeLatest,call, all , put} from "redux-saga/effects"
import {userTypes} from "../userReducer/userTypes"

//redux actions
import {signInSuccess,signOutSuccess,resetPasswordSuccess,signUpError,resetPasswordError} from "../userReducer/userAction"
import {handleResetPasswordAPI} from "./userHelpers"

//Firebase
import {auth,handleUserProfile,getCurrentUser} from "../../../../Firebase"
import { 
    signOut,
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,  
signInWithRedirect,} from "firebase/auth";

import { getDoc } from "firebase/firestore";


export function* getSnapshotFromUserAuth(user,additionalData={}){
    try{
              const userRef =yield call( handleUserProfile,{authUser:user, additionalData});
              const snapshot =yield getDoc(userRef)
            yield put(signInSuccess({
                id:snapshot.id,
                ...snapshot.data()
              }))
           
    }catch(err){
        console.log(err)
    }
    
}

//generator function that handle the signIn action
export function* emailSignIn({payLoad:{email,password}}){
    try{
       const {user}=yield signInWithEmailAndPassword(auth,email,password);
       yield getSnapshotFromUserAuth(user)

   }catch(err){
       console.log(err)  
   } 
}

export function* onEmailSignStart(){
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START,emailSignIn)
}

export function* isUserAuthenticated(){
    try{
        const authUser=yield getCurrentUser()
        if(!authUser) return 
        yield getSnapshotFromUserAuth(authUser)
        
    }catch(err){
        console.log(err)
    }
}

export function* onCheckUserSession(){
    yield takeLatest(userTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* signOutUser(){
    try{
        yield signOut(auth);
        yield put(signOutSuccess())
    }catch(err){
        console.log(err)
    }
}

export function* onSignOutStart(){
    yield takeLatest(userTypes.SIGN_OUT_START,signOutUser)
}


export function* signUpUser({payLoad:{name,email,password,confirmPassword}}){
    if(password!==confirmPassword){
        const err=["password don't match"]
      yield put(signUpError(err))
      return;
    }
    
    try{
       const {user}=yield  createUserWithEmailAndPassword(auth,email,password)
       const additionalData={name};
       yield getSnapshotFromUserAuth(user ,additionalData)
         
    }catch(err){
        console.log(err)
    }
}


export function* onSignUpStart(){
    yield takeLatest(userTypes.SIGN_UP_USER_START,signUpUser)
}

export function* resetPassword({payLoad:{email}}){
    try{
     yield call(handleResetPasswordAPI, email)
     yield put(resetPasswordSuccess())
     
    }catch(err){
       yield put(resetPasswordError(err))
    }
    
}

export function* onResetPasswordStart(){
    yield takeLatest(userTypes.RESET_PASSWORD_START,resetPassword)
}

export function* googleSignIn(){
    try{ 
        const provider = new GoogleAuthProvider();
       provider.setCustomParameters({ prompt: 'select_account' });
    const {user}=yield signInWithPopup(auth, provider)
             yield  getSnapshotFromUserAuth(user)

        // signInWithRedirect(auth, provider)
}catch(err){
    console.log(err)
}
}

export function* onGoogleSignInStart(){
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START,googleSignIn)
}

export default function* userSagas(){
    yield all([
        call(onEmailSignStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onResetPasswordStart),
        call( onGoogleSignInStart),
    ])
}