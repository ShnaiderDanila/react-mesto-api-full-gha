# [![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&vCenter=true&random=false&width=700&height=80&lines=%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%3A+Mesto+(Frontend+%2B+Backend))](https://git.io/typing-svg)
Дипломный проект в рамках учебы в [Яндекс.Практикум](https://practicum.yandex.ru/) на факультете [Веб-разработчик](https://practicum.yandex.ru/web/)

![Mesto (Backend + Frontend)](https://github.com/Shnd3r/react-mesto-api-full-gha/assets/116545792/9683a207-708d-448a-b94b-dc10ad520167)

## Описание проекта
Проект представляет собой адаптивное приложение (SPA), написанное на фреймворке "React" (Frontend) и "Express" (Backend), с возможностью регистрации личного кабинета пользователя, редактированием данных и добавлением фотокарточек в общую галерею.

Изначально приложение было написано на нативных технологиях: JavaScript, CSS3 и HTML5. Затем проект был перенесен на "React" с добавлением функционала регистрации и авторизации пользователей, отдельно написана логика серверной части с фреймворком "Express" и в завершение обе части объединены и сохранены на виртуальной машине, размещенной на Яндекс Облаке.

**Ссылки на проект:**
- IP: 158.160.117.107
- Frontend: https://mesto.shnd3r.nomoredomainsicu.ru
- Backend: https://api.mesto.shnd3r.nomoredomainsicu.ru

**Ссылки на макет:**
- https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1 
- https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1 
- https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1 
- https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1 
- https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1

**Ссылка на чек-лист:**
https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist_15.pdf

<i>* - проект прошел код-ревью</i>

## Используемые технологии:
### Frontend
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
### Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
### General
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

## Функциональность:
- Backend:
  - В проекте созданы схемы и модели пользователей и карточек с контентом:
    - `card` — схема карточки с контентом
    - `user` — схема пользователя
  - В проекте созданы эндпоинты:
    - `/cards` — обрабатывает:
      - GET запросы — отдаёт все карточки из БД
      - POST запросы — создаёт новую карточку с контентом
    - `/cards/:cardId` — обрабатывает DELETE запросы, удаляет карточку по `cardId`
    - `/cards/:cardId/likes` — обрабатывает:
      - PUT запросы — добавляет лайк карточке с контентом
      - DELETE запросы — удаляет лайк карточке с контентом
    - `/signin` — обрабатывает POST запросы, производит аутентификацию пользователя
    - `/signup` — обрабатывает POST запросы, производит регистрацию пользователя
    - `/users` — обрабатывает:
      - GET запросы — отдаёт всех пользователей из БД
      - POST запросы — создаёт нового пользователя
    - `/users/:userId` — обрабатывает GET запросы, отдаёт пользователя по `userId`
    - `/users/me` — обрабатывает:
      - GET запросы — отдаёт информацию о текущем пользователе
      - PATCH запросы — обновляет информацию о пользователе
      - DELETE запросы — производит выход пользователя, с удалением JWT-токена из Cookie
    - `/users/me/avatar` — обрабатывает PATCH запросы, обновляет аватар пользователя
  - Созданы мидлвары:
    - Централизованной обработки ошибок
    - Авторизации пользователя
    - Ограничитель количества запросов (защита от DDoS атак)
    - Поддержки CORS запросов, включая обработку предварительных запросов
    - Логирования запросов и ошибок
  - Производится валидация поступающих данных:
    - до передачи информации контроллерам с помощью joi и celebrate
    - на уровне схем с помощью validator и встроенных методов mongoose
- Frontend:
  - Возможность регистрации и аутентификации пользователя
  - Возможность редактировать информацию о пользователе (установить имя пользователя, информацию «о себе», аватар)
  - Возможность создавать карточки мест (добавить\удалить карточку места, поставить\снять лайк карточке)
  - Возможность просматривать детальную фотографию карточки
  - Реализована валидация форм с помощью кастомного хука

## 🚀 Запуск проекта:

#### Клонировать репозиторий:
```
git clone https://github.com/Shnd3r/react-mesto-api-full-gha.git
```
#### Установить зависимости (отдельно - в директории Frontend и Backend):
```
npm install
```
#### Запустить приложение в режиме разработчика в директории Backend:
```
npm run dev
```
#### Запустить приложение в режиме разработчика в директории Frontend
```
npm run start
```

## Автор

**Данила Шнайдер**

- E-mail: [d.shnder@gmail.com](mailto:d.shnder@gmail.com)
- Telegram: [@shnd3r](https://t.me/shnd3r)
