# 🚀 Быстрый старт - Деплой на GitHub Pages

## Вариант 1: Автоматический деплой (рекомендуется)

1. **Создайте репозиторий на GitHub**
   - Перейдите на [github.com](https://github.com)
   - Нажмите "New repository"
   - Назовите репозиторий (например: `capy-site`)
   - Сделайте репозиторий публичным
   - НЕ добавляйте README, .gitignore или лицензию

2. **Загрузите код**
   ```bash
   # Инициализация git (если еще не сделано)
   git init
   
   # Добавление удаленного репозитория
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   
   # Загрузка кода
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```

3. **Настройте GitHub Pages**
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"
   - Сохраните настройки

4. **Готово!** 🎉
   - Сайт будет доступен по адресу: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`
   - Деплой происходит автоматически при каждом push в main ветку

## Вариант 2: Использование скрипта

```bash
# Запустите скрипт деплоя
./deploy.sh
```

## Вариант 3: Ручной деплой

```bash
# Проверка готовности
node deploy-check.js

# Добавление файлов
git add .

# Коммит
git commit -m "Deploy to GitHub Pages"

# Push
git push origin main
```

## 🔧 Проверка деплоя

1. Перейдите в раздел "Actions" вашего репозитория
2. Убедитесь, что workflow "Deploy to GitHub Pages" выполнился успешно
3. Перейдите в Settings → Pages и проверьте URL сайта

## 🐛 Решение проблем

### Сайт не загружается
- Проверьте, что все файлы загружены в репозиторий
- Убедитесь, что GitHub Pages настроен на "GitHub Actions"
- Проверьте логи в разделе "Actions"

### Ошибки в консоли браузера
- Убедитесь, что все пути к ресурсам корректны
- Проверьте, что все изображения и шрифты загружены

### Стили не применяются
- Проверьте, что файл `styles.css` находится в корне проекта
- Убедитесь, что в `index.html` правильно указан путь к CSS

## 📞 Поддержка

Если возникли проблемы, проверьте:
1. Логи GitHub Actions
2. Консоль браузера на наличие ошибок
3. Правильность настроек GitHub Pages
