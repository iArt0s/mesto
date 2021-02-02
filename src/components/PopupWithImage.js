import Popup from '../components/Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup__img');
    this._popupImgTitle = this._popup.querySelector('.popup__img-title')
  }

  open(item) {
    super.open();
    this._popupImg.src = item.link;
    this._popupImg.alt = 'картинка ' + item.name;
    this._popupImgTitle.textContent = item.name;
  }
}