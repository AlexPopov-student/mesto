const popupEditProfile = document.querySelector('#popup_type_edit-profile');
      popupCard = document.querySelector('#popup_type_add-card');
      popupImage = document.querySelector('#popup_type_image'); 
      openEditProfilePopupBtn = document.querySelector('#popup_opened');
      closeEditProfilePopupBtn= document.querySelector('#popup__closemark');
      closeAddCardPopupBtn = document.querySelector('#popup__cardclosemark')
      formEditProfile = document.querySelector('.edit-form');
      nameInput = document.querySelector('.profile__title');
      jobInput = document.querySelector('.profile__subtitle');
      userName = document.querySelector('#name');
      userOccupation = document.querySelector('#occupation');       

openEditProfilePopupBtn.addEventListener('click', fillInFormEditProfileInputs);          //открываем форму редактирования путешественника
closeEditProfilePopupBtn.addEventListener('click',() => togglePopup(popupEditProfile));  //закрываем форму редактирования путешественника

function fillInFormEditProfileInputs(){                                                  //функция первоначального заполнения полей "Жак-Ив Кусто"
    userName.value = nameInput.textContent;    
    userOccupation.value = jobInput.textContent;
    togglePopup(popupEditProfile);
}

function togglePopup(popup){                                                             //Ключевая функция-переключатель для ВСЕХ поп-апов 
    popup.classList.toggle('popup-type-window_opened');
}

function formEditProfileSubmitHandler (evt) {                                            //функция занесения нового персонажа 
    evt.preventDefault(); 
    nameInput.textContent = userName.value;
    jobInput.textContent = userOccupation.value;
    togglePopup(popupEditProfile);
}

formEditProfile.addEventListener('submit', formEditProfileSubmitHandler);                //фиксируем нового персонажа

const cards = document.querySelector('.cards');                                          //объявляем переменные необходимые для клонирования шаблона
const template = document.querySelector('#template').content;

function renderCards(){                                                                  //запустили обработку функции renderCard по массиву initialCards
    initialCards.forEach(renderCard);
}

function renderCard (card){                                                             //добавляем карточки в DOM                               
    const newCard = createCard(card.place, card.link);
    cards.appendChild(newCard)
}   

function createCard(place, link){                                                        //ГЛАВНАЯ ФУНКЦИЯ возврата карточек 
    const cardElement = template.cloneNode(true);                                        //вызвали шаблон карточки (блок 'li')
    const cardText = cardElement.querySelector('.card__text'); 
    const cardImage = cardElement.querySelector('.card__image');
    cardText.textContent = place;                                                        //заполнили данными 
    cardImage.src = link;
    cardImage.alt = place;                                 
    cardImage.addEventListener('click',()=>  windowHandler(place, link));                //по щелчку на картинку нарисованной карточки запускаем функцию открытия большой картинк                                                                                      //по щелчку на картинку нарисованной карточки запускаем функцию открытия большой картинки
    setCardListeners(cardElement);                                                       //вызвали функцию переключателей
    return cardElement;                                                                  //останавливаем работу функции, чтобы вернуть данные в renderCard
}

renderCards();                                                                           //запускаем функцию генерации карточек

function setCardListeners(evt){                                                          //универсальная функция-"слушатель" - вызов других
    evt.querySelector('#like').addEventListener('click',handleLike);
    evt.querySelector('.dustbin').addEventListener('click',deleteCard);   
}

const windowImage = document.querySelector('.popup-type-window__image');                 
const windowTitle = document.querySelector('.popup-type-window__text');

function windowHandler(place, link){ 
    togglePopup(popupImage);                                                             //функция-открыятия "большой карточки" картинкой и подписью  
    windowImage.src = link;                                                              //заполнили большую картинку данными 
    windowTitle.textContent = place;
    windowImage.alt = place;
};

const closeImagePopupBtn = document.querySelector('#window__closemark');
closeImagePopupBtn.addEventListener('click',() => togglePopup(popupImage));              //слушатель закрытия большого окна
  

function deleteCard(evt){                                                                //стираем карточку
    evt.target.closest('.card').remove()
}

function handleLike (evt){             
    evt.target.classList.toggle('like_active')                                           //расставляем лайки
}                          
const inputPlace = document.querySelector('#place').value;                               //присваиваем им то, что заносит пользователь в формочке
const inputLink = document.querySelector('#link').value;
const formAddCard = document.querySelector('#create'); 
const addCardButton = document.querySelector('#newCardOpen');                            //открываем формочку внесения новой карточки

function submitAddCardForm(evt){                                                         //готовим даныне для загрузки новой карточки
    evt.preventDefault();
    renderCard ({place: inputPlace, link: inputLink});
    formAddCard.reset();                                                                 //стираем занесённые данные 
    togglePopup(popupCard);
}

addCardButton.addEventListener('click',() => togglePopup(popupCard));                                   

closeAddCardPopupBtn.addEventListener('click',() => togglePopup(popupCard));                                  

formAddCard.addEventListener('submit', submitAddCardForm);                               //запускаем функцию генерации новых карточек