<div style="display:flex;align-items: stretch;gap:10px;">
<img src="frontend/public/logo.png" height="32"/>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Rubik+Mono+One&size=20&pause=1000&color=FD608C&center=true&vCenter=true&multiline=true&width=200&lines=Strikle)](https://git.io/typing-svg)
</div>

Если ты хочешь найти друзей, с которыми можно сходить на концерт или просто поболтать о любимой музыке, этот сайт то, что тебе нужно. В знакомствах не всегда всё однозначно. Если ты хочешь завести новые знакомства, друзей, а может быть любовь, [на Страйкл](https://strikle1.herokuapp.com/) это сделать проще простого. Знакомься онлайн — это просто.

## Техстек 👩‍💻👨‍💻

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="50" alt="JS"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="50" alt="react"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" width="50" alt="redux"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width="50" alt="HTML"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width="50" alt="CSS"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" width="50" alt="postgres"/> <img src="https://sequelize.org/img/logo.svg" width="45" alt="sequlize"/> <img src="https://miro.medium.com/1*tOitxCwTNcS3ESstLylmtg.png" width="140" alt="socket"/> <img src="https://camo.githubusercontent.com/e54c6fddb5ef96daebea5d3de22d316766e783cec5f9de6a86f3a3a4276bc98b/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3733363436363531303838383936303032302f3736303835333931353837363332373436342f53612e706e673f77696474683d373138266865696768743d323735" width="150" alt="spotify"/> <img src="https://date-fns.org/static/7ceafe855b131d457fe7de810ed31e0f.svg" width="55" alt="data-fns"/> <img src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" width="50" alt="data-fns"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="50" alt="nodejs"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" width="50" alt="express"/>

## Демо 🎧

[Смотреть видео на Youtube](https://youtu.be/l9ImYZx9yCg)
[![Strikle](/backend/public/readme/strikle.gif)](https://youtu.be/l9ImYZx9yCg "Strikle")

[Перейти на сайт](https://strikle1.herokuapp.com/)


## Функционал 🖥

 - [X] Регистрация/логирование

 На странице регистрации нужно обязательно ввести свое имя, свою почту и придумать пароль. На пароли стоит валидация на стороне клиента и на стороне сервера.

  - [X] Заполнение профиля

 После того как вы зарегистрировались, вы можете заполнить данные о себе, такие как, пол, дату рождения, город, краткую информацию о себе и добавить фото. Либо пропустить данное действие.

  - [X] Раздел "Любимые песни" и "Любимые жанры"

 Присходит подключение к своему аккаунту в Spotify через API и возможность добавление своих любимых песен, также происходит выбор любимых жанров. Это необходимо для расчета %  совместимости музыкального вкуса с другими пользователями.

 - [X] Раздел "Главная"


 После того, когда профиль полностью заполнен, на главной странице появляется меню с функционалом сайта, где тебе предлагают “Найти кого-нибудь” , пройти во вкладку “Ивенты”  или перейти в твои личные сообщения.

  - [X] Раздел "Найти кого-нибудь"


 Здесь показываются все пользователи сайта, которых ты еще не лайкнул/дизлайкнул, работа алгоритма похожа на всем известный Тиндер. Высчитывается совпадение с каждым пользователем на основе выбранных п Когда происходит совпадение с другим пользователем( для этого они должны друг друга лайкнуть) появляется возможность написать этому человеку и обсудить музыку, концерты и тд. 

  - [X] Раздел "Ивенты"


 Здесь показываются все будущие события на которые идут пользователи. Люди сами создают события, куда потом могут присоединиться остальные, если им нравится данное мероприятие. Помимо создания, есть возможность редактирования событий, если вдруг перенесли концерт, а также удалять созданные тобой мероприятия. На самой странице события есть возможно указать что ты идешь и отменить это действие если позже передумал. К каждому мероприятию можно оставлять комментарии которые будут видеть другие пользователи.

  - [X] Раздел "Личка"


 Здесь можно переписываться с пользователями, с которыми у тебя совпала пара. Чат реализован с помощью технологии Socket.io, есть возможность вести диалоги в реальном времени.
 
  - [X] Раздел "Личный кабинет"


 Здесь пользователь может поменять все свои данные: имя, пароль, почту, описание аккаунта, гео, фотографию, свои любимые песни и музыкальные жанры.

## Точки роста 📈
</br>

- Добавление раздела "Мои плейлисты", где можно добавлять чужие плейлисты в избранное и добавлять свои через SoundCloud API.
- Добавление премиум-аккаунтов.
- Продажа билетов на мероприятия напрямую.
- Возможность входа через соц.сети, почту и по номеру телефона.
- Подтверждение аккаута через почту.
