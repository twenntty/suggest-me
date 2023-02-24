import { Details, Home} from "../../Pages";
import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Error from "../../Pages/Error/Error";

const Router = () => {
    return ( 
        <Routes>
            <Route index element={<Home />} />
            <Route path={"details/:id"} element={<Details />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"404"} element={<Error />} />
        </Routes>
     );
};
 
export default Router;