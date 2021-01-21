import Card from './Card.js';
import FormValidator from './FormValidator.js';
const initialCards = [
    {
        name: 'Архыз',
        link:
            'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    },
    {
        name: 'Челябинская область',
        link:
            'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    },
    {
        name: 'Иваново',
        link:
            'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    },
    {
        name: 'Камчатка',
        link:
            'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    },
    {
        name: 'Холмогорский район',
        link:
            'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    },
    {
        name: 'Байкал',
        link:
            'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    },
];
const profileTitle = document.querySelector('.profile__credentials-title');
const profileSubtitle = document.querySelector(
    '.profile__credentials-subtitle'
);
const editPopup = document.querySelector('.popup_edit');
const addPopup = document.querySelector('.popup_add');
const editPopupCloseBtn = document.querySelector('.popup__close-edit');
const addPopupCloseBtn = document.querySelector('.popup__close-add');
const imgPopupCloseBtn = document.querySelector('.popup__close-button_img');
const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__btn');
const popupFieldnickname = document.querySelector('[name="nickname"]');
const popupFieldinfo = document.querySelector('[name="info"]');
const popupFieldPlace = document.querySelector('[name="place"]');
const popupFieldLink = document.querySelector('[name="link"]');
const editPopupForm = document.querySelector('[name=popupform]');
const addPopupForm = document.querySelector('[name=popupformadd]');
const formElement = document.querySelector('.popup__container');
const imgPopup = document.querySelector('.popup_img');
const popupImg = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__img-title');
const cardsContainerElement = document.querySelector('.gallery');


initialCards.forEach((item) =>{
    const card = new Card(item, '.template', openPopupImg);
    const cardElements = card.generateCard();
    cardsContainerElement.append(cardElements);
 });


function createNewCard(e) {

    const newCards = {
        name: popupFieldPlace.value,
        link: popupFieldLink.value,
    };
    addNewCard(cardsContainerElement, createCard(newCards));
    closePopup(addPopup);
    addPopupForm.reset();
}

function createCard(newCards) {
    const card = new Card(newCards, '.template', openPopupImg);
    const cardElements = card.generateCard();
    return cardElements;
}

function addNewCard(position, card) {
    position.prepend(card);
}

addPopupForm.addEventListener('submit', createNewCard);

function closePopupEsc(e) {
    const popupIsActive = document.querySelector('.popup_opened');
    if (e.key === 'Escape' && popupIsActive) {
        closePopup(popupIsActive);
    }
}

function closePopupOverlay() {
    const popupIsActive = document.querySelector('.popup_opened');
    popupIsActive.addEventListener('click', function (e) {
        if (e.target === popupIsActive) {
            closePopup(e.target);
        }
    });
}


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    popup.addEventListener('click', closePopupOverlay);
}

function openPopupImg(item) {
    popupImg.src = item.link;
    popupImg.alt = 'картинка ' + item.name;
    popupImgTitle.textContent = item.name;
    openPopup(imgPopup);
}

editBtn.addEventListener('click', function () {
    popupFieldnickname.value = profileTitle.textContent;
    popupFieldinfo.value = profileSubtitle.textContent;
    editFormValidator.clearSpanError();
    editFormValidator.clearTypeError();
    editFormValidator.setButtonState(true);
    openPopup(editPopup);
});

addBtn.addEventListener('click', function () {
    editFormValidator.clearSpanError();
    editFormValidator.clearTypeError();
    editFormValidator.setButtonState(false);
    openPopup(addPopup);
});

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
    popup.removeEventListener('click', closePopupOverlay);
}

editPopupCloseBtn.addEventListener('click', function () {
    editFormValidator.clearSpanError();
    editFormValidator.clearTypeError();
    closePopup(editPopup);
});

addPopupCloseBtn.addEventListener('click', function () {
    addPopupForm.reset();
    editFormValidator.clearSpanError();
    editFormValidator.clearTypeError();
    closePopup(addPopup);
});


imgPopupCloseBtn.addEventListener('click', function () {
    closePopup(imgPopup);
});

function formSubmitHandler() {

    const nameInput = popupFieldnickname.value;
    profileTitle.textContent = nameInput;
    const jobInput = popupFieldinfo.value;
    profileSubtitle.textContent = jobInput;
    closePopup(editPopup);
}

formElement.addEventListener('submit', formSubmitHandler);


const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
  };

const addFormValidator = new FormValidator(validationConfig, addPopupForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationConfig, editPopupForm);
editFormValidator.enableValidation();