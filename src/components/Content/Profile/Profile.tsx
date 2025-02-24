import classes from "./Profile.module.scss";
import headerIcon from "../../../assets/icons/profile.png";

import ContentHeader from "../ContentHeader";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

import { useEffect } from "react";
import { useParams } from "react-router";
import { useProfileStore } from "../../../stores/profileStore";

export default function Profile() {
  const { getProfile } = useProfileStore();
  const { friendId = 0 } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getProfile(Number(friendId));
  }, [friendId, getProfile]);

  return (
    <section className={classes.profile}>
      <ContentHeader source={headerIcon} name="Профиль" />
      <ProfileInfo />
      <ProfilePosts />
    </section>
  );
}
