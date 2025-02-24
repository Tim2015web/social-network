import classes from "./Profile.module.scss";
import userAvatar from "../../../assets/user-avatar-default.jpg";
import Preloader from "../../Preloader/Preloader";
import ProfileInfoStatus from "./ProfileInfoStatus";
import { useProfileStore } from "../../../stores/profileStore";

export default function ProfileInfo() {
  const { profile } = useProfileStore();

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={classes.info}>
      <div className={classes.info__user}>
        <div className={classes.info__avatar}>
          <img src={profile.avatar || userAvatar} alt="Аватар пользователя" />
        </div>

        <div className={classes.info__data}>
          <div className={classes.info__dataItem}>
            <strong>Имя:</strong> {profile.name || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Местоположение:</strong>{" "}
            {profile.location?.country
              ? `${profile.location.country}, ${profile.location.city}`
              : "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Дата рождения:</strong>{" "}
            {profile.dateOfBirth || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Образование:</strong> {profile.education || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Вебсайт:</strong>{" "}
            {profile.webSite ? (
              <a
                href={profile.webSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.webSite}
              </a>
            ) : (
              "Не указано"
            )}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Занятость:</strong> {profile.occupation || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Интересы:</strong> {profile.interests || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Телефон:</strong> {profile.phoneNumber || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Email:</strong> {profile.email || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Социальные сети:</strong>
            <ul>
              {profile.socialMedia?.instagram ? (
                <li>
                  <a
                    href={`https://instagram.com/${profile.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              ) : null}
              {profile.socialMedia?.twitter ? (
                <li>
                  <a
                    href={`https://twitter.com/${profile.socialMedia.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              ) : null}
              {profile.socialMedia?.linkedin ? (
                <li>
                  <a
                    href={`https://linkedin.com/in/${profile.socialMedia.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              ) : null}

              {/* Если все соцсети пустые, выводим сообщение */}
              {!profile.socialMedia?.instagram &&
                !profile.socialMedia?.twitter &&
                !profile.socialMedia?.linkedin && (
                  <li>Социальные сети не указаны</li>
                )}
            </ul>
          </div>
        </div>
      </div>

      <ProfileInfoStatus
        statusText={profile.statusText}
        profileId={profile.id}
      />
    </div>
  );
}
