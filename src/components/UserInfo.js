export default class UserInfo {
  constructor({ name, about }) {
      this._name = document.querySelector(name);
      this._about = document.querySelector(about);
  }

  getUserInfo() {
      return {
          name: this._name.textContent,
          about: this._about.textContent
      };
  }

  setUserInfo(data) {
      this._name.textContent = data.nickname;
      this._about.textContent = data.info;
  }
}