import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './initialCards.js';

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


function initCards() {
    initialCards.map((newCards) => {
        cardsContainerElement.append(createCard(newCards));
    });
}

function createNewCard() {

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

function closePopupOverlay(e) {
    const popupIsActive = e.target;
    if (popupIsActive.classList.contains('popup_opened')) {
        closePopup(popupIsActive);
    }
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
    addFormValidator.clearSpanError();
    addFormValidator.clearTypeError();
    addFormValidator.setButtonState(false);
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

initCards()

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