import { Header } from "./Widget";
// import { Details } from "./Pages";
import Router from "./Components/Router/Router";
// import { Home } from "./Pages";
// import MainContainer from "./Widget/MainContainer/MainContainer";

const Container = () => {
  return (
    <div className="container">
      <Header />
      {/* <MainContainer /> */}
      {/* <Home /> */}
      {/* <Details /> */}
      <Router />
    </div>
  );
};

export default Container;
