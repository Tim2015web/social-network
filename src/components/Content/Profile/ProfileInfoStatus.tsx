import { useState } from "react";
import { useProfileStore } from "../../../stores/profileStore";
import classes from "./Profile.module.scss";

interface ProfileInfoStatusProps {
  statusText: string;
  profileId: number;
}

export default function ProfileInfoStatus({
  statusText,
  profileId,
}: ProfileInfoStatusProps) {
  const { postStatus } = useProfileStore();
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(statusText || "");

  function activateEditMode() {
    if (profileId === 0) setEditMode(true);
  }

  function deactivateEditMode() {
    setEditMode(false);
    if (localStatus !== statusText) {
      postStatus(localStatus);
    }
  }

  return (
    <div className={classes.info__status}>
      Статус:
      {!editMode ? (
        <span
          title={
            profileId === 0 ? "Изменить статус" : "Нельзя менять не свой статус"
          }
          className={classes.info__statusText}
          onClick={activateEditMode}
        >
          {statusText || "Не указано"}
        </span>
      ) : (
        <div className={classes.info__statusForm}>
          <input
            className={classes.info__statusInput}
            value={localStatus}
            onChange={(event) => setLocalStatus(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") deactivateEditMode();
            }}
          />
          <button
            className={classes.info__statusButton}
            onClick={deactivateEditMode}
          >
            Сохранить
          </button>
        </div>
      )}
    </div>
  );
}
