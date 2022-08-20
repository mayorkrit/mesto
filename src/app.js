let formElement = document.querySelector('#popup')
let profileContainer = document.querySelector('.profile__info')
console.log(profileContainer)

// открытие / закрыте попапа
const popupCloseIcon = document.querySelectorAll('.popup__close');
const popupEditIcon = document.querySelectorAll('.profile__edit-button');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

if (popupEditIcon.length > 0) {
    for (let index = 0; index < popupEditIcon.length; index++) {
        const el = popupEditIcon[index];
        el.addEventListener('click', function (e) {
            popupOpen(formElement);
            e.preventDefault();
        })
    }
}

function popupOpen(currentPopup) {
    if (currentPopup) {
        formElement.classList.remove('popup_closed');
        formElement.classList.add('popup_opened');
        unlock = true;
    }
}

function popupClose(popupActive, doUnlock = true) {
    popupActive.classList.remove('open');
    if (doUnlock) {
        formElement.classList.toggle('popup_opened');
    }
}


let formSearch = document.querySelector('.popup__form') // Находим форму в DOM
let nameInput = formSearch.querySelector('.popup__input-field_value_name') // Находим поля формы в DOM
let jobInput = formSearch.querySelector('.popup__input-field_value_job')

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = nameInput.value
    let name = document.querySelector('.profile__username')
    let status = document.querySelector('.profile__status')
    name.textContent = nameInput.value
    status.textContent = jobInput.value
}

formElement.addEventListener('submit', formSubmitHandler); 