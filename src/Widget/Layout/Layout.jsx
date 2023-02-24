import { Card } from "../";
import styles from "./Layout.module.scss";


const arrayGenerator = (length) => {
  let array = [];
  for (let i = 1; i <= length; i++) {
    array.push(i);
  }
  return array;
};

const Layout = () => {
  const mockData = arrayGenerator(10);

  return (
    <div className={styles.layout}>
      {mockData.map((element) => {
        return <Card data={element} />;
      })}
    </div>
  );
};

export default Layout;
