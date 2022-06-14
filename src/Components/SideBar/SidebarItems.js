import {MdDashboard} from "react-icons/md"
import {HiShoppingCart} from "react-icons/hi"
import {FcSalesPerformance} from "react-icons/fc"
import {VscGlobe} from "react-icons/vsc"
import {BsFillTagsFill} from "react-icons/bs"
import {MdRateReview} from "react-icons/md"
import {AiFillShop} from "react-icons/ai"
import {VscLayers} from "react-icons/vsc"
import {FaUsers} from "react-icons/fa"

export const SideBarItems =[
    
{
   title:"Dashboard",
   path:"/dashboard",
   cName:"sidebar-Links",
   icon:<MdDashboard size={24}/>
   
},
{
    title:"Products",
    path:"/manageProducts",
    cName:"sidebar-Links ",
    icon:<AiFillShop size={24}/>

    
},
{
    title:"Orders",
    path:"/orders",
    cName:"sidebar-Links ",
    icon:<HiShoppingCart size={24}/>
},
{
    title:"Customers",
    path:"/customers",
    cName:"sidebar-Links ",
    icon:<FaUsers size={24}/>
},
{
    title:"Statistics",
    // path:"/statistics",
    cName:"sidebar-Links ",
    icon:<FcSalesPerformance size={24} />
},
{
    title:"Reviews",
    // path:"/reviews",
    cName:"sidebar-Links ",
    icon:<MdRateReview size={24}/>
},

    
]