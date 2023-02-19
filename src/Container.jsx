import { Header } from "./Widget";
// import { Details } from "./Pages";
// import { Home } from "./Pages";
import MainContainer from "./Widget/MainContainer/MainContainer";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <MainContainer />
      {/* <Home /> */}
      {/* <Details /> */}
    </div>
  );
};

export default Container;
