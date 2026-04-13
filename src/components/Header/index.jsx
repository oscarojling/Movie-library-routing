import Logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";
import Navigation from "../Navigation";
import { ListIcon } from "@phosphor-icons/react";
import { useClickAway } from "@uidotdev/usehooks";
import { useToggle } from "@uidotdev/usehooks";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenu, toggleMobileMenu] = useToggle(false);

  const ref = useClickAway(() => {
    toggleMobileMenu(false);
  });

  return (
    <header className={styles.header} ref={ref}>
      <ListIcon onClick={toggleMobileMenu} className={styles.icon} size={32} />
      <NavLink to="/">
        <img className={styles.logo} src={Logo} alt="logo" />
      </NavLink>
      <Navigation mobileMenu={mobileMenu} />
    </header>
  );
};

export default Header;
