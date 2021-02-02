export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closePopupEsc);
    this._popup.addEventListener('click', this._closePopupOverlay);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closePopupEsc);
    this._popup.removeEventListener('click', this._closePopupOverlay);
  }

  _closePopupEsc = (e) => {
    if (e.key === 'Escape') {
      this.close()
    }
  }

  _closePopupOverlay = (e) => {
    const popupIsActive = e.target;
    if (popupIsActive.classList.contains('popup_opened')) {
      this.close()
    }
  }

  setEventListeners() {
    const closePopupBtn = this._popup.querySelector('.popup__close-button');
    closePopupBtn.addEventListener('click', () => this.close());
  }
}