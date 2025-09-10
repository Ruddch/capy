# CAPY - The Cutest Chain Travelers on Abstract

Лендинг страница для токена CAPY на блокчейне Abstract.

## 🚀 Деплой на GitHub Pages

Этот проект настроен для автоматического деплоя на GitHub Pages.

### Инструкции по деплою:

1. **Создайте репозиторий на GitHub**
   - Создайте новый репозиторий на GitHub
   - Назовите его `capy-site` или любое другое имя

2. **Загрузите код в репозиторий**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

3. **Настройте GitHub Pages**
   - Перейдите в Settings вашего репозитория
   - Найдите раздел "Pages" в левом меню
   - В разделе "Source" выберите "GitHub Actions"
   - Сохраните настройки

4. **Автоматический деплой**
   - После push в ветку `main` или `master` автоматически запустится GitHub Actions
   - Сайт будет доступен по адресу: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

### Структура проекта:

```
├── index.html          # Главная страница
├── styles.css          # Стили
├── script.js           # JavaScript функциональность
├── assets/             # Ресурсы
│   ├── fonts/          # Шрифты
│   ├── images/         # Изображения
│   └── icons/          # Иконки
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions workflow
```

### Особенности:

- ✅ Адаптивный дизайн
- ✅ Анимации и эффекты
- ✅ Интерактивные элементы
- ✅ Автоматический деплой на GitHub Pages
- ✅ Оптимизированные шрифты и изображения

### Локальная разработка:

Для локального запуска просто откройте `index.html` в браузере или используйте локальный сервер:

```bash
# Python 3
python -m http.server 8000

# Node.js (если установлен)
npx serve .
```

Сайт будет доступен по адресу `http://localhost:8000`
