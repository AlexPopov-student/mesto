//прописываем все используемеые переменные
let openPopup = document.querySelector('#popup');
    popupToggle = document.querySelector('#popup_opened');
    popupClose = document.querySelector('.popup__closemark');
    formElement = document.querySelector('.edit-form');
    nameInput = document.querySelector('.profile__title');
    jobInput = document.querySelector('.profile__subtitle');
    anewName = document.querySelector('#name');
    anewOccupation = document.querySelector('#occupation');
    editForm = document.querySelector('.edit-form__button');
    likeCurrent = document.querySelectorAll('.card__like-button');
console.log(likeCurrent);
 
//открываем форму
popupToggle.onclick = function(){
    popup.style.display="initial";
};

//закрываем форму
popupClose.onclick = function(){
    popup.style.display="none";
};

//в принципе, этого нет в брифе, но пусть закрывается ещё и по нажатию на любое место вне формы редактирования. Если не нравится - я удалю. Просто в учебных целях
    window.onclick = function(evt){
    if (evt.target == popup) {
        popup.style.display="none";
    }
};

//включаем "сердечки"

function toggleLike (evt){
    evt.preventDefault();
    if (evt.target === evt.currentTarget){
        evt.target.classList = 'card__like-button_active';
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
