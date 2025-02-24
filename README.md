# Социальная сеть

🚀 **Социальная сеть** — это учебный проект, представляющий собой простую социальную сеть, разработанную на **React + Zustand**.  

## 🔗 Демо (GitHub Pages)
[![Deploy](https://img.shields.io/badge/GitHub_Pages-Live-blue?style=flat-square)](https://tim2015web.github.io/social-network/)

## 🛠 Используемые технологии
- ⚛️ **React**
- 🚀 **Vite**
- 🔄 **Zustand**
- 💅 **CSS Modules**
- 📦 **TypeScript**

## 📂 Запуск проекта локально

1. **Склонировать репозиторий**  
   ```sh
   git clone https://github.com/tim2015web/social-network.git
   cd social-network
   ```

2. **Установить зависимости**  
   ```sh
   npm install
   ```

3. **Запустить проект**  
   ```sh
   npm run dev
   ```

4. **Открыть в браузере**  
   ```
   http://localhost:5173/
   ```

## 🚀 Деплой на GitHub Pages

1. **Собрать проект**  
   ```sh
   npm run build
   ```

2. **Разместить на GitHub Pages**  
   ```sh
   npm run deploy
   ```

**Важно!** Убедись, что в `vite.config.js` указан корректный `base`:

```js
export default defineConfig({
  base: "/social-network/",
  plugins: [react()],
});
```

## 📌 Функционал
- ✅ Регистрация / Авторизация  
- ✅ Личная страница  
- ✅ Добавление друзей  
- ✅ Чаты и сообщения  
- ✅ 404-страница  

## 📝 TODO (планы на будущее)
- 🔹 Улучшить UI  
- 🔹 Добавить загрузку изображений  
- 🔹 Улучшить мобильную версию  
