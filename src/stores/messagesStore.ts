import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { usersData, User, messagesData, Message } from "./messagesData";

interface MessagesState {
  users: User[];
  messages: Message[];
  addMessage: (messageText: string) => void;
}

export const useMessagesStore = create<MessagesState>()(
  devtools(
    (set) => ({
      users: usersData,
      messages: messagesData,

      addMessage: (messageText: string) =>
        set((state) => ({
          messages: [
            ...state.messages,
            { id: state.messages.length + 1, messageText }, // id сдвигаем на +1
          ],
        })),
    }),
    { name: "MessagesStore" } // Добавляем имя стора для удобства в Redux DevTools
  )
);
