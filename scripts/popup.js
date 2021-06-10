let popup = document.querySelector('#popup');
    cardPopup = document.querySelector('#cardPopup');
    popupOpen = document.querySelector('#popup_opened');
    popupClose = document.querySelector('#popup__closemark');
    newCardClose = document.querySelector('#popup__cardclosemark')
    formElement = document.querySelector('.edit-form');
    nameInput = document.querySelector('.profile__title');
    jobInput = document.querySelector('.profile__subtitle');
    anewName = document.querySelector('#name');
    anewOccupation = document.querySelector('#occupation');
    editForm = document.querySelector('#edit-person');
const windowOpen = document.querySelector('.window');                                    

//цикл изначальных карточек через js и комплект констант для них 
const initialCards = [                                                                                                      
  {
    place: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    place: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    place: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    place: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    place: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    place: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

popupOpen.addEventListener('click',toggleClass);                                         //открываем форму редактирования путешественника
popupClose.addEventListener('click',toggleClass);                                        //закрываем форму редактирования путешественника

function toggleClass(){                                                                  //функция-переключатель
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')){
        anewName.value = nameInput.textContent;    
        anewOccupation.value = jobInput.textContent;  
      }}

function formSubmitHandler (evt) {                                                       //функция занесения нового персонажа 
    evt.preventDefault(); 
    nameInput.textContent = anewName.value;
    jobInput.textContent = anewOccupation.value;
    toggleClass();
};

formElement.addEventListener('submit', formSubmitHandler);                               //фиксируем нового персонажа

const cards = document.querySelector('.cards');                                          //объявляем переменные необходимые для клонирования шаблона
const template = document.querySelector('#template').content;

function renderCards(){                                                                  // запустили обработку функции renderCard по массиву initialCards
    initialCards.forEach(renderCard);
};

function renderCard (card){                                   
    const newCard = createCard(card.place, card.link);
};

function createCard(place, link){                                                        //ГЛАВНАЯ ФУНКЦИЯ генерации карточек, в которую мы отдаём все переменные
    const cardElement = template.cloneNode(true);                                        //вызвали шаблон карточки (блок 'li')
    const cardText = cardElement.querySelector('.card__text'); 
    const cardImage = cardElement.querySelector('.card__image');
    cardText.textContent = place;                                                        //заполнили данными 
    cardImage.src = link;
    cardImage.alt = place;
    cardElement.querySelector('.card__image').addEventListener('click', toggleWindow);   //по щелчку на картинку нарисованной карточки запускаем функцию открытия большой картинки
    function toggleWindow(){                                                             //открыли большую картинку
       windowOpen.classList.toggle('window_opened'); 
       windowHandler(place, link);                                                        //отправили в функцию заполнения windowHandler значения
    }       
    setEventListener(cardElement);                                                       //вызвали функцию переключателей
    cards.prepend(cardElement);                                                          //добавили карточку в обойму cards ('ul')
}

renderCards();                                                                           //запускаем функцию генерации карточек

function windowHandler(place, link){                                                     //функция-заполнение "большой карточки" картинкой и подписью  
    const windowImage = document.querySelector('.window__image');
    const windowTitle = document.querySelector('.window__text');
    windowImage.src = link;                                                              //заполнили большую картинку данными 
    windowTitle.textContent = place;
    closeWindow();
};
const windowClose = document.querySelector('.window__closemark');

function closeWindow(){
   windowClose.addEventListener('click', toggleWindows);                                 //слушатель закрытия большого окна
} 

function toggleWindows(){                                                                //функция-переключатель открыть/закрыть "большую картинку"
   windowOpen.classList.toggle('window_opened'); 
}

function handleDelite(evt){evt.target.closest('.card').remove()}                         //открываем форму редактирования путешественника

function handleLike (evt){evt.target.classList = 'like_active'}                          //расставляем лайки

function renderNewCard(evt){
  evt.preventDefault();
  let inputPlace = document.querySelector('#place').value;                               //присваиваем им то, что заносит пользователь в формочке
  let inputLink = document.querySelector('#link').value;
  createCard(inputPlace, inputLink);
  closeFormCard();}

function setEventListener(evt){                                                          //универсальная функция-"слушатель" - вызов других
    evt.querySelector('.like').addEventListener('click', handleLike);
    evt.querySelector('.dustbin').addEventListener('click',handleDelite);}
    
const addCardButton = document.querySelector('#newCardOpen');                            //открываем формочку внесения новой карточки

addCardButton.addEventListener('click', openFormCard);                                   

function openFormCard(){
    cardPopup.classList.toggle('popup_opened')
}    

function closeFormCard(){
    cardPopup.classList.toggle('popup_opened')                                          //закрываем формочку новой карточки  
}

newCardClose.addEventListener('click', closeFormCard);                                  

const cardForm = document.querySelector('#create');                                      //запускаем функцию генерации новых карточек

cardForm.addEventListener('submit', renderNewCard);   
