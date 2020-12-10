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
const popup = document.querySelector('.popup');
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
const addPopupSubmitBtn = document.querySelector('[name=popupformadd]');
const formElement = document.querySelector('.popup__container');
const imgPopup = document.querySelector('.popup_img');
const popupImg = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__img-title');
const cardsContainerElement = document.querySelector('.gallery');
const templateElement = document.querySelector('.template');


function composeItem(item) {
  const newItem = templateElement.content.cloneNode(true);
  const titleElement = newItem.querySelector('.card__description-title');
  const imageElement = newItem.querySelector('.card__image');
  const heart = newItem.querySelector('.card__button');
  const trash = newItem.querySelector('.card__image-button');
  trash.addEventListener('click', function removeCard(e) {
    e.target.closest('.card').remove();
  })
  heart.addEventListener('click', function toggleHeart (e) {
    e.target.classList.toggle('card__button_active')
  });
  
  titleElement.textContent = item.name;
  imageElement.src = item.link;
  imageElement.alt = "картинка " + item.name;


  imageElement.addEventListener('click', function() {
    openPopupImg(item)
  })

  return newItem;
}

function renderList() {
  const cardsList = initialCards.map(composeItem);
  cardsContainerElement.append(...cardsList)
} 
renderList()


function createNewCard (e) {

  e.preventDefault();

  const newCards = {
    name: popupFieldPlace.value,
    link:  popupFieldLink.value
  }
  addNewCard(cardsContainerElement, composeItem(newCards))
  closePopup(addPopup);
}
  
function addNewCard(position, card) {
  position.prepend(card);
}

addPopupSubmitBtn.addEventListener('submit' , createNewCard)

function openPopup(popup) {

  popup.classList.add('popup_opened');
  popupFieldnickname.value = profileTitle.textContent; 
  popupFieldinfo.value = profileSubtitle.textContent;
}

function openPopupImg(item) {

  popupImg.src = item.link;
  popupImg.alt = "картинка " + item.name;
  popupImgTitle.textContent = item.name;
  openPopup(imgPopup);
}

editBtn.addEventListener('click', function(){
  openPopup(editPopup)}
);

addBtn.addEventListener('click', function() {
  openPopup(addPopup)
}); 

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
editPopupCloseBtn.addEventListener('click', function () {
  closePopup(editPopup)
});

addPopupCloseBtn.addEventListener('click', function () {
  closePopup(addPopup)
});

imgPopupCloseBtn.addEventListener('click', function () {
  closePopup(imgPopup)
});

function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameInput = popupFieldnickname.value;
    profileTitle.textContent = nameInput;
    let jobInput = popupFieldinfo.value;
    profileSubtitle.textContent = jobInput;

    closePopup()
  }
formElement.addEventListener('submit', formSubmitHandler);