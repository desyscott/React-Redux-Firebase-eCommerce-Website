import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminPage from "./Pages/Admin/AdminPage"
import Home from "./Pages/Home/Home"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Products from "./Pages/Products/Products"
import "./GlobalStyle.css"



function App() {
  return (
    <>
     <Router>
    <Switch>
    <Route  path="/" exact component={Home} />
    <Route path="/dashboard" exact component={AdminPage} />
    <Route path="/products" exact component={Products} />
    <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
