import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean; // Флаг аутентификации пользователя
  avatarUrl: string | null; // URL аватара пользователя, если есть
  login: (avatarUrl: string, remember?: boolean) => void; // Функция входа
  logout: () => void; // Функция выхода
  setAuthState: (isAuth: boolean, avatarUrl?: string | null) => void; // Устанавливает состояние аутентификации
}

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      isAuthenticated: false,
      avatarUrl: null,

      login: (avatarUrl: string, remember = false) => {
        set({ isAuthenticated: true, avatarUrl });
        if (remember) {
          // Если включено "Запомнить меня", сохраняем данные в localStorage
          localStorage.setItem("authToken", "true");
          localStorage.setItem("authAvatar", avatarUrl);
        }
      },

      logout: () => {
        // Выход пользователя, сброс данных
        set({ isAuthenticated: false, avatarUrl: null });
        localStorage.removeItem("authToken");
        localStorage.removeItem("authAvatar");
      },

      setAuthState: (isAuth, avatarUrl) => {
        // Инициализация состояния (например, при загрузке приложения)
        set((state) => ({
          isAuthenticated: isAuth,
          avatarUrl: avatarUrl ?? state.avatarUrl, // Если avatarUrl не передан, оставляем старый
        }));
      },
    }),
    { name: "AuthStore" } // Указываем имя стора для devtools
  )
);
