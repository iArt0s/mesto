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

function createCard(item, cardSelector, openPopupImg) {
    const card = new Card(item, cardSelector, openPopupImg);
    const cardElements = card.generateCard();
    return cardElements
}

const addPopup = new PopupWithForm('.popup_add', (item) => {
    cardList.addItemEnd(createCard(item, '.template', (item) => {
        popupImg.open(item)
    }));
})
addPopup.setEventListeners()

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            cardList.addItem(createCard(item, '.template', (item) => {
                popupImg.open(item)
            }));
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
    const info = userInfo.getUserInfo();
    popupFieldnickname.value = info.name;
    popupFieldinfo.value = info.about;
    editPopup.open();
    editFormValidator.clearSpanError();
    editFormValidator.clearTypeError()
    editFormValidator.setButtonState(true);
})

const addFormValidator = new FormValidator(validationConfig, addPopupForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationConfig, editPopupForm);
editFormValidator.enableValidation();

