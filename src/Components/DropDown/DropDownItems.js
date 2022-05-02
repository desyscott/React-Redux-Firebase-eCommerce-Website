import {AiOutlineUser} from "react-icons/ai"
import {MdSettingsPower} from "react-icons/md"
import {AiOutlineSetting} from "react-icons/ai"

export const DropDownItems = [
    {
     icon: <AiOutlineUser size={17}/>,
  title:"Edit Profile",
  path:"/profile",
  cName:"drop-link"
    
},
    {
      icon: <AiOutlineSetting size={17}/>,
  title:"Settings",
  path:"/helpCenter",
  cName:"drop-link"
    
},
    {
      icon: <MdSettingsPower size={17}/>,
  title:"Sign Out",
  path:"/signOut",
  cName:"drop-link"
    
},
 ]