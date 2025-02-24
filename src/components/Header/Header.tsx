import classes from "./Header.module.scss";
import logotypeIcon from "../../assets/icons/logotype.png";
import profileIcon from "../../assets/user-avatar-default.jpg";
import { useAuthStore } from "../../stores/authStore";
import { useNavigate, NavLink } from "react-router-dom";

export default function Header() {
  const { isAuthenticated, avatarUrl, logout } = useAuthStore();
  const navigate = useNavigate();

  function handleLogOut() {
    logout();
    navigate("/auth");
  }

  return (
    <div className={classes.header}>
      <NavLink to="/" className={classes.logotype}>
        <img src={logotypeIcon} alt="Логотип" />
        <p>Общаемся.ру</p>
      </NavLink>

      {isAuthenticated ? (
        <div className={classes.login}>
          <button className={classes.login__button} onClick={handleLogOut}>
            Выйти
          </button>
          <img src={avatarUrl || profileIcon} alt="Аватар" />
        </div>
      ) : (
        <NavLink to="/auth" className={classes.login__button}>
          Войти
        </NavLink>
      )}
    </div>
  );
}
