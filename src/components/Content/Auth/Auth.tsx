import classes from "./Auth.module.scss";
import authIcon from "../../../assets/icons/auth.png";
import ContentHeader from "../ContentHeader";

import { useAuthStore } from "../../../stores/authStore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
  login: string;
  password: string;
  remember?: boolean;
}

export default function Auth() {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      remember: false,
    },
  });

  const AVATAR_URL = "https://i.ibb.co/1ZmNrYX/user-avatar-00.jpg";
  const LOGIN = "12345";
  const PASSWORD = "12345";

  const onSubmit = (data: FormData) => {
    if (data.login === LOGIN && data.password === PASSWORD) {
      login(AVATAR_URL, data.remember);
      navigate("/profile");
      reset();
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <section className={classes.auth}>
      <ContentHeader source={authIcon} name="Авторизация" />

      <div className={classes.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="login">Логин:</label>
            <input
              id="login"
              placeholder="12345"
              autoComplete="username"
              autoFocus
              {...register("login", { required: "Логин обязателен" })}
            />
            {errors.login && (
              <p className={classes.error}>{errors.login.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password">Пароль:</label>
            <input
              id="password"
              placeholder="12345"
              type="password"
              autoComplete="current-password"
              {...register("password", {
                required: "Пароль обязателен",
                minLength: {
                  value: 5,
                  message: "Минимум 5 символов",
                },
              })}
            />
            {errors.password && (
              <p className={classes.error}>{errors.password.message}</p>
            )}
          </div>

          <div>
            <input id="remember" type="checkbox" {...register("remember")} />
            <label htmlFor="remember">Запомнить меня</label>
          </div>

          <button type="submit">Войти</button>
        </form>
      </div>
    </section>
  );
}
