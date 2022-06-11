export const checkUserIsAdmin=(currentUser)=>{
    if(!currentUser || !Array.isArray(currentUser.userRoles)) return false
    
    const {userRoles}=currentUser;
    
  //if the userRoles includes admin then return true
    if(userRoles.includes("admin")) return true;
    
  //otherwise return false
    return false;
}