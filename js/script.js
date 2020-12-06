const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const profileTitle = document.querySelector('.profile__credentials-title');
const profileSubtitle = document.querySelector('.profile__credentials-subtitle');
const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const сlosePopupBtn = document.querySelector('.popup__close-button');
const popupFieldnickname = document.querySelector('[name="nickname"]');
const popupFieldinfo = document.querySelector('[name="info"]');
const formElement = document.querySelector('.popup__container');
const cardsContainerElement = document.querySelector('.gallery');
const templateElement = document.querySelector('.template');


function composeItem(item) {
  const newItem = templateElement.content.cloneNode(true);
  const titleElement = newItem.querySelector('.card__description-title');
  const imageElement = newItem.querySelector('.card__image');
  const heart = newItem.querySelector('.card__button');
  heart.addEventListener('click', function toggleHeart (e) {
    e.target.classList.toggle('card__button_active')
  });
  
  titleElement.textContent = item.name;
  imageElement.src = item.link;
  return newItem;
}




function renderList() {
  const cardsList = initialCards.map(composeItem);
  cardsContainerElement.append(...cardsList)
  // console.log(...cardsList);
} 
renderList()

  


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