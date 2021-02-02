import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js';
import '../pages/index.css';
import UserInfo from '../components/UserInfo.js';
import { editBtn, addBtn, popupFieldnickname, popupFieldinfo, editPopupForm, addPopupForm, cardsContainerElement, initialCards, validationConfig } from '../utils/constants.js'

const userInfo = new UserInfo({ name: '.profile__credentials-title', about: '.profile__credentials-subtitle' })

const popupImg = new PopupWithImage('.popup_img');
popupImg.setEventListeners();

const editPopup = new PopupWithForm('.popup_edit', (data) => {
    userInfo.setUserInfo(data)
});
editPopup.setEventListeners();

const addPopup = new PopupWithForm('.popup_add', (item) => {
    const card = new Card(item, '.template', (item) => {popupImg.open(item)});
    const cardElements = card.generateCard();
    cardList.addItemEnd(cardElements);
})
addPopup.setEventListeners()

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            const card = new Card(item, '.template', (item) => {popupImg.open(item)});
            const cardElements = card.generateCard();
            cardList.addItem(cardElements)
        }
    }, cardsContainerElement);
cardList.renderInitialItems()

addBtn.addEventListener('click', () => {
    addPopup.open();
    addFormValidator.clearSpanError();
    addFormValidator.clearTypeError();
    addFormValidator.setButtonState(false);
});

editBtn.addEventListener('click',() => {
    popupFieldnickname.value = userInfo.getUserInfo().name
    popupFieldinfo.value = userInfo.getUserInfo().about
    editPopup.open();
    editFormValidator.clearSpanError();
    editFormValidator.clearTypeError()
    editFormValidator.setButtonState(true);
})

const addFormValidator = new FormValidator(validationConfig, addPopupForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationConfig, editPopupForm);
editFormValidator.enableValidation();

