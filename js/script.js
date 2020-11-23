const profileTitle = document.querySelector('.profile__credentials-title');
const profileSubtitle = document.querySelector('.profile__credentials-subtitle');
const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const сlosePopupBtn = document.querySelector('.popup__close-button');
const popupFieldnickname = document.querySelector('[name="nickname"]');
const popupFieldinfo = document.querySelector('[name="info"]');
const formElement = document.querySelector('.popup__container');


function openPopup() {
  popup.classList.add('popup_opened');
  popupFieldnickname.value = profileTitle.textContent;
  popupFieldinfo.value = profileSubtitle.textContent;
}
editBtn.addEventListener('click', openPopup);


function closePopup() {
  popup.classList.remove('popup_opened');
}
сlosePopupBtn.addEventListener('click', closePopup);



function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameInput = popupFieldnickname.value;
    profileTitle.textContent = nameInput;
    let jobInput = popupFieldinfo.value;
    profileSubtitle.textContent = jobInput;

    closePopup()
  }
formElement.addEventListener('submit', formSubmitHandler);
