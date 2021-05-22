//прописываем все используемеые переменные
let popup = document.querySelector('#popup');
    popupOpen = document.querySelector('#popup_opened');
    popupClose = document.querySelector('#popup__closemark');
    formElement = document.querySelector('.edit-form');
    nameInput = document.querySelector('.profile__title');
    jobInput = document.querySelector('.profile__subtitle');
    anewName = document.querySelector('#name');
    anewOccupation = document.querySelector('#occupation');
    editForm = document.querySelector('.edit-form__button');
    likeCurrent = document.querySelectorAll('.like');
console.log(likeCurrent);
 
//открываем форму
popupOpen.addEventListener('click', toggleClass)
//закрываем форму
popupClose.addEventListener('click',toggleClass)
//функция-переключатель
function toggleClass(){
    popup.classList.toggle('popup_opened');
}

//а теперь редактируем формочки 
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = anewName.value;
    editForm.addEventListener('click',toggleClass);
};

formElement.addEventListener('submit', formSubmitHandler); 
