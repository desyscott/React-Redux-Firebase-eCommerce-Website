import { BrowserRouter,
  Routes,
  Route,} from "react-router-dom"
import AdminPage from "./Pages/Admin/AdminPage"
import Home from "./Pages/Home/Home"
import "./GlobalStyle.css"


function App() {
  return (
    <div>
    <BrowserRouter>
    <AdminPage/>
    <Routes>
    <Route path="/" exact component={Home}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
