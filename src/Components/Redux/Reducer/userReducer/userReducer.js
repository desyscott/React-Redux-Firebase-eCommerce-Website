import {userTypes} from "./userTypes"

const  INITIAL_STATE={
    currentUser:null,
    signUpError:[],
    resetPasswordError:[],
    resetPasswordSuccess:false,
}


const userReducer=( state=INITIAL_STATE,action) =>{
      switch(action.type){
          
                    case userTypes.SIGN_IN_SUCCESS :
                    return{
                        ...state,
                        currentUser: action.payLoad,
                        singUpError:[],
                    }
                    case userTypes.SIGN_UP_ERROR:
                    return{
                        ...state,
                        signUpError:action.payLoad
                    }
                    
                    case userTypes.RESET_PASSWORD_SUCCESS:
                    return{
                        ...state,
                        resetPasswordSuccess:action.payLoad,
                        resetPasswordError:[],
                    }
                    
                case userTypes.RESET_PASSWORD_ERROR:
                        return{
                            ...state,
                            resetPasswordError:action.payLoad
                        }
                        
               case userTypes.RESET_USER_STATE:
               case userTypes.SIGN_OUT_SUCCESS:
                            return{
                                ...state,
                                ...INITIAL_STATE
                            }
                             
                   
                    
        default : return state
          
      }   
}
export default  userReducer;