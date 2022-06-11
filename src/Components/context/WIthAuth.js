import {useAuth} from "../customHooks"

//if the user has login or is authenticated then return the page(children)
const WithAuth=props=> useAuth(props) && props.children;

export default  WithAuth;