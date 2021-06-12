const popup = document.querySelector('#popup_type_edit-profile');
      cardPopup = document.querySelector('#popup_type_add-card');
      windowOpen = document.querySelector('#popup_type_image'); 
      openEditProfilePopupBtn = document.querySelector('#popup_opened');
      closeEditProfilePopupBtn= document.querySelector('#popup__closemark');
      closeAddCardPopupBtn = document.querySelector('#popup__cardclosemark')
      formElement = document.querySelector('.edit-form');
      nameInput = document.querySelector('.profile__title');
      jobInput = document.querySelector('.profile__subtitle');
      userName = document.querySelector('#name');
      userOccupation = document.querySelector('#occupation');       

openEditProfilePopupBtn.addEventListener('click',() => togglePopup(popup));              //открываем форму редактирования путешественника
closeEditProfilePopupBtn.addEventListener('click',() => togglePopup(popup));             //закрываем форму редактирования путешественника

function setNewData(){
    userName.value = nameInput.textContent;    
    userOccupation.value = jobInput.textContent;  
}

function togglePopup(evt){                                                               //Просили одну функцию-переключатель? Получите. И останьте, пожалуйста. Всё по брифу, всё работает
    evt.classList.toggle('popup-type-window_opened');
}

function formEditProfileSubmitHandler (evt) {                                            //функция занесения нового персонажа 
    evt.preventDefault(); 
    nameInput.textContent = userName.value;
    jobInput.textContent = userOccupation.value;
    togglePopup(popup);
}

formElement.addEventListener('submit', formEditProfileSubmitHandler);                    //фиксируем нового персонажа

const cards = document.querySelector('.cards');                                          //объявляем переменные необходимые для клонирования шаблона
const template = document.querySelector('#template').content;

function renderCards(){                                                                  // запустили обработку функции renderCard по массиву initialCards
    initialCards.forEach(renderCard);
}

function renderCard (card){                                                             //создаём и добавляем карточки в DOM                               
    const newCard = createCard(card.place, card.link);
}

function createCard(place, link){                                                        //ГЛАВНАЯ ФУНКЦИЯ возврата карточек 
    const cardElement = template.cloneNode(true);                                        //вызвали шаблон карточки (блок 'li')
    const cardText = cardElement.querySelector('.card__text'); 
    const cardImage = cardElement.querySelector('.card__image');
    cardText.textContent = place;                                                        //заполнили данными 
    cardImage.src = link;
    cardImage.alt = place;
    cardImage.addEventListener('click', toggleWindow);                                   //по щелчку на картинку нарисованной карточки запускаем функцию открытия большой картинки
    function toggleWindow(){                                                             //открыли большую картинку
       togglePopup(windowOpen); 
       windowHandler(place, link);                                                       //отправили в функцию заполнения windowHandler значения
    }       
    setCardListeners(cardElement);                                                       //вызвали функцию переключателей
    cards.prepend(cardElement);                                                          //добавили карточку в обойму cards ('ul')
}

renderCards();                                                                           //запускаем функцию генерации карточек

const windowImage = document.querySelector('.popup-type-window__image');                 //просили объъявить в глобальной области видимости - ок! Объявил. Прогресс кода потрясает
const windowTitle = document.querySelector('.popup-type-window__text');

function windowHandler(place, link){                                                     //функция-заполнение "большой карточки" картинкой и подписью  
    windowImage.src = link;                                                              //заполнили большую картинку данными 
    windowTitle.textContent = place;
    windowImage.alt = place;
};

const closeImagePopupBtn = document.querySelector('#window__closemark');
closeImagePopupBtn.addEventListener('click',() => togglePopup(windowOpen));         //слушатель закрытия большого окна

function setCardListeners(evt){                                                         //универсальная функция-"слушатель" - вызов других
    evt.querySelector('#like').addEventListener('click',handleLike);
    evt.querySelector('.dustbin').addEventListener('click',deconsteCard);
}

function deconsteCard(evt){                                                              //стираем карточку
    evt.target.closest('.card').remove()
}

function handleLike (evt){             
    evt.target.classList.toggle('like_active')                                          //расставляем лайки
}                          
const inputPlace = document.querySelector('#place');                                    //присваиваем им то, что заносит пользователь в формочке
const inputLink = document.querySelector('#link');

function submitAddCardForm(evt){
    evt.preventDefault();
    createCard(inputPlace.value, inputLink.value);
    document.querySelector('#create').reset();
    togglePopup(cardPopup);
}
    
const addCardButton = document.querySelector('#newCardOpen');                            //открываем формочку внесения новой карточки

addCardButton.addEventListener('click',() => togglePopup(cardPopup));                                   

closeAddCardPopupBtn.addEventListener('click',() => togglePopup(cardPopup));                                  

const formAddCard = document.querySelector('#create');                                   //запускаем функцию генерации новых карточек
      formAddCard.addEventListener('submit', submitAddCardForm);