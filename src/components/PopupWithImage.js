import Popup from '../components/Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup__img');
    this._popupImgTitle = this._popup.querySelector('.popup__img-title')
  }
  
  open(item) {
    super.open();
    popupImg.src = item.link;
    popupImg.alt = 'картинка ' + item.name;
    popupImgTitle.textContent = item.name;
  }
}