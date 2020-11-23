const profileTitle = document.querySelector('.profile__credentials-title');
const profileSubtitle = document.querySelector('.profile__credentials-subtitle');
const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const сlosePopupBtn = document.querySelector('.popup__close-button');
const popupField = document.querySelectorAll('.popup__field');
const formElement = document.querySelector('.popup__container');


function openPopup() {
  popup.classList.add('popup_opened');
}
editBtn.addEventListener('click', openPopup);


function closePopup() {
  popup.classList.remove('popup_opened');
}
сlosePopupBtn.addEventListener('click', closePopup);

popupField[0].value = profileTitle.textContent;
popupField[1].value = profileSubtitle.textContent;


function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameInput = popupField[0].value;
    profileTitle.textContent = nameInput;
    let jobInput = popupField[1].value;
    profileSubtitle.textContent = jobInput;

    closePopup()
  }
formElement.addEventListener('submit', formSubmitHandler);
