
import {USER_STATE_CHANGE} from "./userTypes"
import {auth,db} from "../../../../Firebase"


//redux action is function that return payload and type
export const setCurrentUser =(user)=>{
    return{
        type:USER_STATE_CHANGE,
        payLoad:user,
    }
}

// export function fetchUser() {
//     return (dispatch) => {
//       db.collection("users")
//         .doc(auth.currentUser.uid)
//         .get()
//         .then((snapshot) => {
//           if (snapshot.exists) {
//             const userInfo=snapshot.data()
//             dispatch(fetchUsersAction(userInfo))
//           } else {
//             console.log("does not exist");
//           }
//         });
//     };
//   }
    