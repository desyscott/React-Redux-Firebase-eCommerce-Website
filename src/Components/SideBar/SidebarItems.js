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
   cName:"side-bar-Links active",
   icon:<MdDashboard size={24}/>
   
},
{
    title:"Products",
    path:"/products",
    cName:"side-bar-Links ",
    icon:<AiFillShop size={24}/>

    
},
{
    title:"Orders",
    path:"/orders",
    cName:"side-bar-Links ",
    icon:<HiShoppingCart size={24}/>
},
{
    title:"Customers",
    path:"/dashboard",
    cName:"side-bar-Links ",
    icon:<FaUsers size={24}/>
},
{
    title:"Statistics",
    path:"/dashboard",
    cName:"side-bar-Links ",
    icon:<FcSalesPerformance size={24} />
},
{
    title:"Reviews",
    path:"/reviews",
    cName:"side-bar-Links ",
    icon:<MdRateReview size={24}/>
},
{
    title:"Transactions",
    path:"/transactions",
    cName:"side-bar-Links ",
    icon:<VscLayers size={24}/>
},
{
    title:"sellers",
    path:"/sellers",
    cName:"side-bar-Links ",
    icon:<VscGlobe size={24}/>
},
{
    title:"Host Offers",
    path:"/host offers",
    cName:"side-bar-Links ",
    icon:<BsFillTagsFill size={24}/>
},

    
    
]