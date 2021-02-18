export const editBtn = document.querySelector('.profile__edit-button');
export const addBtn = document.querySelector('.profile__btn');
export const popupFieldnickname = document.querySelector('[name="name"]');
export const popupFieldinfo = document.querySelector('[name="about"]');
export const editPopupForm = document.querySelector('[name=popupform]');
export const addPopupForm = document.querySelector('[name=popupformadd]');
export const cardsContainerElement = document.querySelector('.gallery');
export const avatar = document.querySelector('.profile__image');
export const name = document.querySelector('.profile__credentials-title');
export const about = document.querySelector('.profile__credentials-subtitle');
export const avatarBtn = document.querySelector('.profile__container');
export const avatarForm = document.querySelector('[name="update_avatar-form"]');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

export const initialCards = [
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