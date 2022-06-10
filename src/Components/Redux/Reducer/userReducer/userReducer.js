import {userTypes} from "./userTypes"

const  INITIAL_STATE={
    currentUser:null,
    signInSuccess:false,
    signUpSuccess:false,
    signUpError:[],
    resetPasswordSuccess:false,
    resetPasswordError:[],
}


const userReducer=( state=INITIAL_STATE,action) =>{
      switch(action.type){
          
                    case userTypes.USER_STATE_CHANGE :
                    return{
                        ...state,
                        currentUser: action.payLoad
                    }
                     
                    case userTypes.SIGN_IN_SUCCESS:
                    return{
                        ...state,
                        signInSuccess:action.payLoad 
                    }
                    
                    case userTypes.SIGN_UP_SUCCESS:
                    return{
                        ...state,
                        signUpSuccess:action.payLoad 
                    }
                    
                    case userTypes.SIGN_UP_ERROR:
                    return{
                        ...state,
                        signUpError:action.payLoad   
                    }
                    
                    case userTypes.RESET_PASSWORD_SUCCESS:
                    return{
                        ...state,
                        resetPasswordSuccess:action.payLoad
                    }
                    
                    case userTypes.RESET_PASSWORD_ERROR:
                    return{
                        ...state,
                        resetPasswordError:action.payLoad
                    }
                    
                    case userTypes.RESET_AUTH_FORMS:
                    return{
                        ...state,
                        signInSuccess:false,
                        signUpSuccess:false,
                        signUpError:[],
                        resetPasswordSuccess:false,
                        resetPasswordError:[],
                        
                    }
                    
        default : return state
          
      }   
}
export default  userReducer;