
import {userTypes} from "./userTypes"


export const emailSignInStart=(userCredentials) => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payLoad:userCredentials
})


export const signInSuccess=(user) => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payLoad:user
})


export const checkUserSession=()=>({
    type: userTypes.CHECK_USER_SESSION
})


export const signOutStart=()=>({
    type:userTypes.SIGN_OUT_START
})


export const signOutSuccess=()=>({
    type:userTypes.SIGN_OUT_SUCCESS
})

export const signUpUserStart=(userCredentials) => ({
    type: userTypes.SIGN_UP_USER_START,
    payLoad:userCredentials
})

export const signUpError=(err) => ({
    type: userTypes.SIGN_UP_ERROR,
    payLoad:err
})


export const resetPasswordStart=(userCredentials)=>({
    type: userTypes.RESET_PASSWORD_START,
    payLoad:userCredentials
})


export const signInWIthGoogleStart=()=>({
    type:userTypes.GOOGLE_SIGN_IN_START
})


export const resetPasswordSuccess=()=>({
    type:userTypes.RESET_PASSWORD_SUCCESS,
    payLoad:true
})


export const resetPasswordError=(err)=>({
    type:userTypes.RESET_PASSWORD_ERROR,
    payLoad:err
})


export const resetUserState=()=>({
    type:userTypes.RESET_USER_STATE,
})




