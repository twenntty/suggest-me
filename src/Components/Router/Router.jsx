import { Route, Routes } from "react-router-dom";
import { Details, Home } from "../../Pages";
import Pixabay from "../../Pages/Pixabay/Pixabay";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={"details/:id"} element={<Details />} />
      <Route path={"pixabay"} element={<Pixabay />} />
    </Routes>
  );
};

export default Router;
