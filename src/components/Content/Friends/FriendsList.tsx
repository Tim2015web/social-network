import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Friends.module.scss";
import { useFriendsStore } from "../../../stores/friendsStore";

export default function FriendsList() {
  const { friends, isFollowing, handleSubscription } = useFriendsStore();
  const isFollowingSet = useMemo(() => new Set(isFollowing), [isFollowing]);

  return (
    <section className={classes.users}>
      {friends.map((friend) => (
        <div key={friend.id} className={classes.usersCard}>
          <div className={classes.usersProfile}>
            <div className={classes.usersAvatar}>
              <img src={friend.avatar} alt={friend.name} />
            </div>

            <div className={classes.usersInfo}>
              <p>
                <strong>Имя:&nbsp;</strong> {friend.name}
              </p>
              <p>
                <strong>Статус:&nbsp;</strong> {friend.statusText}
              </p>
              <p>
                <strong>Местоположение:&nbsp;</strong>
                {friend.location.country},&nbsp;{friend.location.city}
              </p>
              <p>
                <strong>Дата рождения:&nbsp;</strong> {friend.dateOfBirth}
              </p>
              <p>
                <strong>Образование:&nbsp;</strong> {friend.education}
              </p>
              <p>
                <strong>Веб-сайт:&nbsp;</strong>
                <a
                  href={friend.webSite}
                  className={classes.infoWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {friend.webSite}
                </a>
              </p>
              <p>
                <NavLink to={`/profile/${friend.id}`}>
                  ➡️ Перейти в профиль
                </NavLink>
              </p>
            </div>
          </div>

          <div className={classes.actions}>
            <p className={classes.actionsStatus}>
              {friend.status ? "Вы подписаны" : "Вы не подписаны"}
            </p>

            <button
              disabled={isFollowingSet.has(friend.id)}
              className={
                friend.status
                  ? classes.actionsUnsubscribe
                  : classes.actionsSubscribe
              }
              onClick={() => handleSubscription(friend.id, !friend.status)}
            >
              {friend.status ? "Отписаться" : "Подписаться"}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
