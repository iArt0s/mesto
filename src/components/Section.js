export default class Section {
  constructor({ items, renderer }, containerSelector ) {
    // this._initialItems = items;
    this._renderer = renderer;

    this._container = containerSelector;
  }

  // renderInitialItems() {
  //   this._initialItems.forEach(item => this._renderer(item));
  // }

  renderInitialItems(arr) {
    arr.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._container.append(element);
  }
  addItemEnd(element) {
    this._container.prepend(element);
  }
}