// Интерфейс для пользователя
export interface User {
  id: number;
  name: string;
}

// Интерфейс для сообщения
export interface Message {
  id: number;
  messageText: string;
}

// Типизированные массивы пользователей и сообщений
export const usersData: User[] = [
  { id: 0, name: "Иван" },
  { id: 1, name: "Анастасия" },
  { id: 2, name: "Дмитрий" },
  { id: 3, name: "Ольга" },
  { id: 4, name: "Алексей" },
];

export const messagesData: Message[] = [
  { id: 0, messageText: "Привет, как дела?" },
  { id: 1, messageText: "Привет! Что нового?" },
  { id: 2, messageText: "У меня важная новость!" },
  { id: 3, messageText: "Доброе утро!" },
  { id: 4, messageText: "Позвони, когда освободишься." },
];
