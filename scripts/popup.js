//прописываем все используемеые переменные
let openPopup = document.querySelector('#popup');
    popupToggle = document.querySelector('#popup_opened');
    popupClose = document.querySelector('.edit-form__closemark');
    formElement = document.querySelector('.edit-form');
    nameInput = document.querySelector('.profile__title');
    jobInput = document.querySelector('.profile__subtitle');
    anewName = document.querySelector('#name');
    anewOccupation = document.querySelector('#occupation');
    editForm = document.querySelector('.edit-form__button');
    likeCurrent = document.querySelector('.card__white-heart');

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
}

//включаем "сердечки"
likeCurrent.onclick = function(){
    likeCurrent.className = 'card__black-heart';
    }

//а теперь редактируем формочки 

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = anewName.value;
    jobInput.textContent = anewOccupation.value;;
}

formElement.addEventListener('submit', formSubmitHandler); 
