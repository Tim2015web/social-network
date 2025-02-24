import React, { Suspense, useEffect, useState } from "react";
import classes from "./Content.module.scss";
import { Navigate, Route, Routes } from "react-router";
import Preloader from "../Preloader/Preloader";
import { useAuthStore } from "../../stores/authStore";

const Profile = React.lazy(() => import("./Profile/Profile"));
const Messages = React.lazy(() => import("./Messages/Messages"));
const Friends = React.lazy(() => import("./Friends/Friends"));
const Photos = React.lazy(() => import("./Photos/Photos"));
const Music = React.lazy(() => import("./Music/Music"));
const Settings = React.lazy(() => import("./Settings/Settings"));
// const UndefinedPage = React.lazy(() => import("./UndefinedPage/UndefinedPage"));
const Auth = React.lazy(() => import("./Auth/Auth"));

export default function Content() {
  const { isAuthenticated } = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (isAuthenticated !== undefined) setInitialized(true);
  }, [isAuthenticated]);

  if (!initialized) return <Preloader />;

  return (
    <div className={classes.content}>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isAuthenticated ? "/profile" : "/auth"} />}
          />
          <Route
            path="/profile/:friendId?"
            element={isAuthenticated ? <Profile /> : <Navigate to="/auth" />}
          />
          <Route
            path="/messages/*"
            element={isAuthenticated ? <Messages /> : <Navigate to="/auth" />}
          />
          <Route
            path="/friends"
            element={isAuthenticated ? <Friends /> : <Navigate to="/auth" />}
          />
          <Route path="/photos" element={<Photos />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="*" element={<UndefinedPage />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}
