import { useEffect } from "react";
import { useFriendsStore } from "../../../stores/friendsStore";
import classes from "./Friends.module.scss";
import headerIcon from "../../../assets/icons/addfriends.png";
import ContentHeader from "../ContentHeader";
import Pagination from "./Pagination";
import FriendsList from "./FriendsList";
import Preloader from "../../Preloader/Preloader";

export default function Friends() {
  const { pageSize, currentPage, isFetching, getFriends } = useFriendsStore();

  useEffect(() => {
    getFriends(currentPage, pageSize);
  }, [getFriends, currentPage, pageSize]);

  return (
    <section className={classes.friends}>
      <ContentHeader source={headerIcon} name="Друзья" />
      {isFetching && <Preloader />}
      <Pagination pageSize={pageSize} currentPage={currentPage} />
      <FriendsList />
    </section>
  );
}
