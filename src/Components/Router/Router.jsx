import { Details, Home} from "../../Pages";
import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Error from "../../Pages/Error/Error";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import SignUp from "../../Pages/Registration/Registration";

const Router = () => {
    return ( 
        <Routes>
            <Route index element={<Home />} />
            <Route path={"details/:id"} element={<Details />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"404"} element={<Error />} />
            <Route path="dashboard" element={<Dashboard />} /> 
            <Route path="signup" element={<SignUp />} /> 
        </Routes>
     );
};
 
export default Router;