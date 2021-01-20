export default class Card {
  constructor(data, cardSelector, openPopupImg) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._openPopupImg = openPopupImg;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);
      console.log(this._cardSelector) 
    return cardTemplate;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._card.querySelector('.card__description-title').textContent = this._name;
    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__image').alt = 'картинка ' + this._name;
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {

    this._card.querySelector('.card__button').addEventListener('click', () =>{
      this._heart();
    });

    this._card.querySelector('.card__image-button').addEventListener('click', () => {
      this._trash();
    });

    this._card.querySelector('.card__image').addEventListener('click', () => {
      this._openPopupImg({ name: this._name, link: this._link})
    })
  }

  _heart() {
    this._card.querySelector('.card__button').classList.toggle('card__button_active');
  }

  _trash() {
    this._card.closest('.card').remove()
  }
}