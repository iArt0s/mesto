export default class Api {
  constructor(config) {
    this._url = config.url
    this.headers = config.headers;
  }

  loadUser() {
    return fetch(`${this._url}users/me/`, {
      method: "GET",
      headers: this.headers
    })
    .then((res)=>{

      if(res.ok) {
        return res.json()
      }
      return Promise.reject('AAAA,все сломалось!');
    })
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this.headers
    })
    .then((res)=>{
      if(res.ok) {
        return res.json()
      }
      return Promise.reject('AAAA,все сломалось!');
    })
  }

  updateAvatar(formData) {
    return fetch(`${this._url}users/me/avatar`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            avatar: formData.avatar
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject('AAAA,все сломалось!');
    })
  }

  updateUserInfo(formData) {
    console.log(formData);
    return fetch(`${this._url}users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            name: formData.name,
            about: formData.about,
            avatar: formData.avatar
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject('AAAA,все сломалось!');
    })
  }

  addCard(formData) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: formData.name,
        link: formData.link
      })
    })
    .then((res)=>{
      if(res.ok) {
        return res.json()
      }
      return Promise.reject('AAAA,все сломалось!');
    })
  }

  likeCard(id) {
    return fetch(`${this._url}cards/likes/${id}`, {
        method: 'PUT',
        headers: this.headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('AAAA,все сломалось!');
        })
}

  dislikeCard(id) {
      return fetch(`${this._url}cards/likes/${id}`, {
          method: 'DELETE',
          headers: this.headers
      })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject('AAAA,все сломалось!');
          })
  }

  removeCard(id) {
    return fetch(`${this._url}cards/${id}`, {
        method: 'DELETE',
        headers: this.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject('AAAA,все сломалось!');
    })
  }
}