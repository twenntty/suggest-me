import Router from "./Components/Router/Router";
import { Header} from "./Widget";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <Router />
    </div>
  );
};

export default Container;
