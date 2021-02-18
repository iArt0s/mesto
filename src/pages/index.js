import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupDeleteCard from '../components/PopupDeleteCard.js'
import Section from '../components/Section.js';
import '../pages/index.css';
import UserInfo from '../components/UserInfo.js';
import { editBtn, addBtn, popupFieldnickname, popupFieldinfo, editPopupForm, addPopupForm, cardsContainerElement, validationConfig, avatar, name, about, avatarBtn, avatarForm } from '../utils/constants.js'
import Api from '../components/Api.js'

const api = new Api ({
    url: "https://mesto.nomoreparties.co/v1/cohort-20/",
    headers: {
        "content-type": "application/json",
        "Authorization" : "3070922a-3883-4050-b75d-7ef694125bdc"
    }
})

api.loadUser()
    .then((data)=>{
        avatar.src = data.avatar
        name.textContent = data.name;
        about.textContent = data.about;
        userId = data._id

    })
    .catch(err=>console.log(err))

api
    .getInitialCards()
    .then((data) => {
    cardList.renderInitialItems(data)
    })
    .catch(err=>console.log(err))


const userInfo = new UserInfo({ name: name, about: about, avatar: avatar})
let userId = null;


const popupImg = new PopupWithImage('.popup_img');
popupImg.setEventListeners();

const editPopup = new PopupWithForm('.popup_edit', (data) => {
    editPopup.renderLoading(true)
    api.updateUserInfo(data)
    .then(formData => {
        userInfo.setUserInfo(formData);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        editPopup.renderLoading(false)
    })
});
editPopup.setEventListeners();

function createCard(cardData) {
    const card = new Card({ ...cardData, userId }, '.template', (formData) => {
        popupImg.open(formData)
    },   (cardData) => {
        popupDeleteCard.open(cardData);
    },api);
    const cardElements = card.generateCard();
    return cardElements
}

const addPopup = new PopupWithForm('.popup_add', (formData) => {
    addPopup.renderLoading(true)
    api.addCard(formData)
        .then(formData => {
            cardList.addItemEnd(createCard(formData))
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            addPopup.renderLoading(false)
        })
})
addPopup.setEventListeners()


const cardList = new Section({
    renderer: (item) => {
        cardList.addItem(createCard(item))
    },
}, cardsContainerElement);

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

const updateAvatar = new PopupWithForm('.popup_update-avatar', (formData) => {
    updateAvatar.renderLoading(true)
    api.updateAvatar(formData)
        .then(formData => {
            avatar.src = formData.avatar
            })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            updateAvatar.renderLoading(false)
        })
    })
updateAvatar.setEventListeners();


avatarBtn.addEventListener('click', () => {
    updateAvatar.open();
    avatarFormValidator.clearSpanError();
    avatarFormValidator.clearTypeError();
    avatarFormValidator.setButtonState(false);
})

const popupDeleteCard = new PopupDeleteCard('.popup_delete', (cardData) => {
    api.removeCard(cardData.cardId)
        .then(() => {
            cardData.card.remove();
        })
        .catch(err => {
            console.log(err);
        })
});
popupDeleteCard.setEventListeners();

const addFormValidator = new FormValidator(validationConfig, addPopupForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationConfig, editPopupForm);
editFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();