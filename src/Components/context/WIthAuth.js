import {useAuth} from "../customHooks"
import {withRouter} from "react-router-dom"

//if the user has login or is authenticated then return the page(children)
const WithAuth=props=> useAuth(props) && props.children;

export default  withRouter(WithAuth);