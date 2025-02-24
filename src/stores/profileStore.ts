import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { postsData, Post } from "../stores/profileData";
import { friendsData, Friends } from "./friendsData";

// --- Определение интерфейса состояния профиля ---
interface ProfileState {
  profile: Friends | null;
  posts: Post[];
  addPost: (message: string, image: string) => void;
  setUserProfile: (profile: Friends) => void;
  updateStatus: (status: string) => void;
  getProfile: (friendId: number) => void;
  postStatus: (newStatus: string) => void;
}

// --- Создание Zustand-стора с devtools ---
export const useProfileStore = create<ProfileState>()(
  devtools((set) => ({
    profile: null,
    posts: postsData,

    // --- Добавление нового поста ---
    addPost: (message, image) => {
      set((state) => ({
        posts: [
          ...state.posts,
          { id: state.posts.length, message, image, likes: 0 },
        ],
      }));
    },

    // --- Установка профиля пользователя ---
    setUserProfile: (profile) => {
      set({ profile });
    },

    // --- Обновление статуса профиля ---
    updateStatus: (status) => {
      set((state) =>
        state.profile
          ? { profile: { ...state.profile, statusText: status } }
          : { profile: null }
      );
    },

    // --- Получение данных профиля из friendsData ---
    getProfile: (friendId) => {
      const friend = friendsData.find((f) => f.id === friendId) || null;
      set({ profile: friend });
    },

    // --- Изменение статуса (имитация запроса) ---
    postStatus: (newStatus) => {
      set((state) =>
        state.profile
          ? { profile: { ...state.profile, statusText: newStatus } }
          : { profile: null }
      );
    },
  }))
);
