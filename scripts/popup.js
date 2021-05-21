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
    likeCurrent = document.querySelectorAll('.like_normal');
console.log(likeCurrent);
 
//открываем форму
popupOpen.addEventListener('click', toggleClass)
//закрываем форму
popupClose.addEventListener('click',toggleClass)
//функция-переключатель
function toggleClass(){
    popup.classList.toggle('popup_opened');
}

//включаем "сердечки"
function toggleLike (evt){
    evt.preventDefault();
    if (evt.target === evt.currentTarget){
        evt.target.classList = 'like_active';
    }
}
    for (i = 0; i< likeCurrent.length; i++) {
    likeCurrent[i].addEventListener('click', toggleLike);
}

//а теперь редактируем формочки 
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = anewName.value;
    jobInput.textContent = anewOccupation.value;;
};

formElement.addEventListener('submit', formSubmitHandler); 
