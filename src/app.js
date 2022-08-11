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

// заполнение из содержаниия страницы

// let name = document.querySelector('.profile__username')
// let status = document.querySelector('.profile__status')

// console.log(name, status)

// let formSearch = document.querySelector('.popup__form') // Находим форму в DOM
// console.log(formSearch)



// nameInput.innerHTML = name.innerHTML
// console.log(nameInput)









let formSearch = document.querySelector('.popup__form') // Находим форму в DOM
console.log(formSearch)
let nameInput = formSearch.querySelector('.popup__input-field_value_name') // Находим поля формы в DOM
console.log(nameInput)
let jobInput = formSearch.querySelector('.popup__input-field_value_job')
console.log(jobInput)





// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    nameInput.textContent = nameInput.value
    console.log(nameInput)  
    // jobInput.value = 
    
                                           // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 