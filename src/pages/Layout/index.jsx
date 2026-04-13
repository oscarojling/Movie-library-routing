import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
