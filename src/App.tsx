import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

import { useEffect } from "react";
import { useAuthStore } from "./stores/authStore";

export default function App() {
  const { setAuthState } = useAuthStore();

  useEffect(() => {
    const tokenIsAuth = localStorage.getItem("authToken");
    const tokenAuthAvatar = localStorage.getItem("authAvatar") || null;

    if (tokenIsAuth === "true") {
      setAuthState(true, tokenAuthAvatar);
    }
  }, [setAuthState]);

  return (
    <div className={classes.container}>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}
