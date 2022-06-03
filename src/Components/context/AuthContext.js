import {useAuth} from "../customHooks"
import {withRouter} from "react-router-dom"


const AuthContext =props=> useAuth(props) && props.children;

export default  withRouter(AuthContext);