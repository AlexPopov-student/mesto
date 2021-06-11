const popup = document.querySelector('#popup_type_edit-profile');
    cardPopup = document.querySelector('#popup_type_add-card');
    openEditProfilePopupBtn = document.querySelector('#popup_opened');
    closeEditProfilePopupBtn= document.querySelector('#popup__closemark');
    closeAddCardPopupBtn = document.querySelector('#popup__cardclosemark')
    formElement = document.querySelector('.edit-form');
    nameInput = document.querySelector('.profile__title');
    jobInput = document.querySelector('.profile__subtitle');
    userName = document.querySelector('#name');
    userOccupation = document.querySelector('#occupation');
    windowOpen = document.querySelector('#popup_type_image');                                    

openEditProfilePopupBtn.addEventListener('click',togglePopup);                           //открываем форму редактирования путешественника
closeEditProfilePopupBtn.addEventListener('click',togglePopup);                          //закрываем форму редактирования путешественника

function togglePopup(){                                                                  //функция-переключатель
    popup.classList.toggle('popup_opened');
    userName.value = nameInput.textContent;    
    userOccupation.value = jobInput.textContent;  
}

function formEditProfileSubmitHandler (evt) {                                            //функция занесения нового персонажа 
    evt.preventDefault(); 
    nameInput.textContent = userName.value;
    jobInput.textContent = userOccupation.value;
    togglePopup();
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
       windowOpen.classList.toggle('popup-type-window_opened'); 
       windowHandler(place, link);                                                        //отправили в функцию заполнения windowHandler значения
    }       
    setCardListeners(cardElement);                                                       //вызвали функцию переключателей
    cards.prepend(cardElement);                                                          //добавили карточку в обойму cards ('ul')
}

renderCards();                                                                           //запускаем функцию генерации карточек

const windowImage = document.querySelector('.popup-type-window__image');                            //просили объъявить в глобальной области видимости - ок! Объявил. Прогресс кода потрясает
const windowTitle = document.querySelector('.popup-type-window__text');

function windowHandler(place, link){                                                     //функция-заполнение "большой карточки" картинкой и подписью  
    windowImage.src = link;                                                              //заполнили большую картинку данными 
    windowTitle.textContent = place;
    windowImage.alt = place;
    closeImagePopupBtn.addEventListener('click', toggleWindows);                          //слушатель закрытия большого окна
};

const closeImagePopupBtn = document.querySelector('#window__closemark');

function toggleWindows(){                                                                //функция-переключатель открыть/закрыть "большую картинку"
   windowOpen.classList.toggle('popup-type-window_opened'); 
}

function setCardListeners(evt){                                                          //универсальная функция-"слушатель" - вызов других
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
    closeFormCard();
}
    
const addCardButton = document.querySelector('#newCardOpen');                            //открываем формочку внесения новой карточки

addCardButton.addEventListener('click', openFormCard);                                   

function openFormCard(){
    cardPopup.classList.toggle('popup_opened')
}    

function closeFormCard(){
    cardPopup.classList.toggle('popup_opened')                                          //закрываем формочку новой карточки  
}

closeAddCardPopupBtn.addEventListener('click', closeFormCard);                                  

const formAddCard = document.querySelector('#create');                                   //запускаем функцию генерации новых карточек
      formAddCard.addEventListener('submit', submitAddCardForm);

