import classes from "./Messages.module.scss";
import headerIcon from "../../../assets/icons/messages.png";
import ContentHeader from "../ContentHeader";
import { NavLink } from "react-router-dom";
import { useMessagesStore } from "../../../stores/messagesStore";
import { useState } from "react";

const setActive = ({ isActive }: { isActive: boolean }): string =>
  `${classes.main__user} ${isActive ? classes.main__userActive : ""}`;

export default function Messages() {
  const { users, messages, addMessage } = useMessagesStore();
  const [messageText, setMessageText] = useState<string>("");

  const newMessage = () => {
    if (messageText.trim()) {
      addMessage(messageText);
      setMessageText("");
    }
  };

  return (
    <section className={classes.messages}>
      <ContentHeader source={headerIcon} name="Сообщения" />

      <div className={classes.main}>
        <div className={classes.main__users}>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <NavLink to={`/messages/${user.id}`} className={setActive}>
                  {user.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.main__messages}>
          {messages.map((message) => (
            <div key={message.id}>{message.messageText}</div>
          ))}
        </div>
      </div>

      <div className={classes.footer}>
        <textarea id="messageInput" name="messageInput"
          className={classes.footer__textarea}
          placeholder="Введите сообщение..."
          value={messageText}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessageText(event.target.value)
          }
        />
        <button id="sendMessageButton" name="sendMessageButton" className={classes.footer__button} onClick={newMessage}>
          Отправить
        </button>
      </div>
    </section>
  );
}
