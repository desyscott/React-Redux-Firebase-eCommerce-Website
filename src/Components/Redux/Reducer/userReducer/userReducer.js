import {USER_STATE_CHANGE} from "./userTypes"

const  INITIAL_STATE={
    currentUser:null
}


const userReducer=( state=INITIAL_STATE,action) =>{
      switch(action.type){
                    case USER_STATE_CHANGE :
                    return{
                        ...state,
                        currentUser: action.payLoad
                    }
                    
        default : return state
          
      }   
}
export default  userReducer;