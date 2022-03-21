import styles from "./styles.module.css";
import Sidenav from "./sidenav";
import NavBar from "./navbar";

const Dashboard = () => {
  return (
    <div className={styles.main_container}>
      <div>
        <NavBar />
      </div>
      <div>
        <Sidenav />
      </div>
    </div>
  );
};

export default Dashboard;
