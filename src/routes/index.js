
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const AppRouter = () =>{
    
    
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/login" element={<Login />}/>
                
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter