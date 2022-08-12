let formElement = document.querySelector('#popup')
console.log(formElement)

// открытие/ закрыте попапа
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

// заполнение из содержаниия страницы
let nameInputValue = document.querySelector('.profile__username')
let jobInputValue = document.querySelector('.profile__status')
console.log(jobInputValue)




// let formSearch = document.querySelector('.popup__form') // Находим форму в DOM
// console.log(formSearch)

// let nameInput = formSearch.querySelector('.popup__input-field_value_name') // Находим поля формы в DOM
// console.log(nameInput)

// let jobInput = formSearch.querySelector('.popup__input-field_value_job')
// console.log(jobInput)




// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 