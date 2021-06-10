//прописываем все используемеые переменные
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
        
const initialCards = [                                                                                                       //цикл изначальных карточек через js и комплект констант для них 
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
debugger
popupOpen.addEventListener('click',toggleClass);                                                  //открываем форму редактирования путешественника
popupClose.addEventListener('click',toggleClass);                                                 //закрываем форму редактирования путешественника

function toggleClass(){                                                                           //функция-переключатель
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')){
        anewName.value = nameInput.textContent;    
        anewOccupation.value = jobInput.textContent;  
      }}

function formSubmitHandler (evt) {                                                                //функция занесения нового персонажа 
    evt.preventDefault(); 
    nameInput.textContent = anewName.value;
    jobInput.textContent = anewOccupation.value;
    toggleClass();
};

formElement.addEventListener('submit', formSubmitHandler);                                        //фиксируем нового персонажа
const cards = document.querySelector('.cards');                                                     //объявляем переменные необходимые для клонирования шаблона
const template = document.querySelector('#template').content;

function renderCards(){                                                                            // запустили обработку функции renderCard по массиву initialCards
   initialCards.forEach(renderCard);
};

function renderCard (elem){                                   
  const card = template.cloneNode(true);                                                           //скопировали template из разметки, где он формирует карточку
  card.querySelector('.card__text').textContent = elem.place;                                      //заносим название места из массива
  card.querySelector('.card__image').src = elem.link;                                              //заносим ссылку на картинку из массива
  card.querySelector('.card__image').alt = elem.place;                                             //заносим alt из массива
  delCard(card);                                                                                   //функция удаления карточки
  const likeCurrent = card.querySelector('.like');                                                 //находим на карточке "сердечко"
  likeCurrent.addEventListener('click', function (evt){evt.target.classList = 'like_active';})     //по клику запускаем функцию, функция меняtт класс на "активный"
  card.querySelector('.card__image').addEventListener('click',toggleWindow, windowHandler);        //по щелчку на картинку нарисованной карточки меняем класс поп-апа большой картинки
  cards.appendChild(card);                                                                         //добавляем изначальную карточку           
};
  renderCards();                                                                                   //запускаем объявленную функцию пересчёта по массиву

//блок добавления новой карточки
const addCardButton = document.querySelector('#newCardOpen');
addCardButton.addEventListener('click', openFormCard);                                             //открываем формочку внесения новой карточки
function openFormCard(){cardPopup.classList.toggle('popup_opened');}    

const closeCardForm = document.querySelector('#popup__cardclosemark');                                                          
function closeFormCard(){cardPopup.classList.toggle('popup_opened')};
closeCardForm.addEventListener('click', closeFormCard);                                            //закрываем формочку новой карточки 

const cardForm = document.querySelector('#create');
cardForm.addEventListener('submit', renderNewCard);                                                //фиксируем внесённые изменения через кнопку "Сохранить"

const templateNewCard = document.querySelector('#template').content;
function renderNewCard (){                                   
  const newCard = templateNewCard.cloneNode(true);                                                  //клонируем шаблон формирования карточек 'li'
  let inputPlace = document.querySelector('#place');                                                //присваиваем им то, что заносит пользователь
  let inputLink = document.querySelector('#link');
  newCard.querySelector('.card__image').src = inputLink.value;                                      //заносим название места из массива
  newCard.querySelector('.card__text').textContent = inputPlace.value;     
  newCard.querySelector('.card__image').alt = inputPlace.value;                                     //заносим ссылку на картинку из массива
  cards.prepend(newCard);  
  debugger
}

//блок удаления карточки
function handleDelite(evt){evt.target.closest('.card').remove();}                                  //функция удаления карточки
function delCard(elm){elm.querySelector('#dustbin').addEventListener('click', handleDelite);}      //функция клика по мусорной корзине 

// блок открытия "больших картинок" по щелчку на карточку
let windowOpen = document.querySelector('#window');                                                //блок переменных, необходимых для открытия/закрытия "больших карточек"      windowClose = document.querySelector('#window__closemark');
    windowImage = document.querySelector('.window__image');
    windowTitle = document.querySelector('#window__text');

document.querySelector('#window__closemark').addEventListener('click',toggleWindow);               //закрываем большую картинку  

function toggleWindow(){windowOpen.classList.toggle('window_opened')}                              //функция-переключатель открыть/закрыть "большую картинку"
debugger
function windowHandler(evt){                                                                       //функция-заполнение "большой карточки" картинкой и подписью
  evt.windowImage.src = evt.document.querySelector('.card__image').value;
  evt.windowTitle.textContent = evt.document.querySelector('.card__text').textContent};
  