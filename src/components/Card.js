export default class Card {
  constructor(data, cardSelector, openPopupImg, popupDelete, api) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._api = api;
      this._likes = data.likes.length;
      this._likesId = data.likes;
      this._usersId = data.owner._id;
      this._myId = data.userId;
      this._popupDelete = popupDelete;
      this._cardId = data._id;
      this._openPopupImg = openPopupImg;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._card = this._getTemplate();
    const cardImg = this._card.querySelector('.card__image')
    cardImg.src = this._link;
    const imgTitle = this._card.querySelector('.card__description-title').textContent = this._name;
    this._cardLikes = this._card.querySelector('.card__like');
    this._cardLikes.textContent = this._likes;
    cardImg.alt = 'картинка ' + imgTitle;
    this._setEventListeners();
    this._likedCards(this._isLiked())
    this._removeDeleteBtn()
    return this._card;
  }

  _removeDeleteBtn() {
    if (this._usersId !== this._myId) {
        this._card.querySelector('.card__image-button').remove();
    }
}

  _heart() {
    this._card.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  _isLiked() {
    return Boolean(this._likesId.find(obj => obj._id == this._myId));
  }

  _likedCards(isLiked) {
    if (isLiked) {
        this._card.querySelector('.card__like-button').classList.add('card__like-button_active');
    }
  }

  _likeCard() {
    this._api.likeCard(this._cardId)
      .then((res) => {
          this._likes = res.likes.length;
          this._cardLikes.textContent = this._likes;
      })
      .catch(err => {
          console.log(err);
      })
  }

  _dislikeCard() {
    this._api.dislikeCard(this._cardId)
      .then((res) => {
          this._likes = res.likes.length;
          this._cardLikes.textContent = this._likes;
      })
      .catch(err => {
          console.log(err);
      })
  }

  _setEventListeners() {
    this._card.querySelector('.card__like-button').addEventListener('click', (evt) => {
        const likeButtonActive = this._card.querySelector('.card__like-button').classList.contains('card__like-button_active');
        likeButtonActive ? this._dislikeCard() : this._likeCard();
        this._heart(evt);
    });

    this._card.querySelector('.card__image-button').addEventListener('click', () => {
        this._popupDelete({ cardId: this._cardId, card: this._card });
    });

    this._card.querySelector('.card__image').addEventListener('click', () => {
        this._openPopupImg({ name: this._name, link: this._link });
    });
  }
}