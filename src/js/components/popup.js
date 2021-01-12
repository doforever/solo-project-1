import {select, classNames} from '../settings.js';

class Popup {
  constructor() {
    this.getBackground();
    this.dataObject = null;
    this.template = null;
  }

  getBackground() {
    this.dom = {};
    this.dom.background = document.querySelector(select.popup.background);
  }

  render() {
    let parentDiv = document.createElement('div');
    if (this.template) {parentDiv.innerHTML = this.template(this.dataObject).trim();}
    this.dom.element = parentDiv.firstChild;
    if (this.dom.element) this.dom.background.appendChild(this.dom.element);
    console.log(this.dom.element);
  }

  getElements() {}

  initActions() {}

  show() {
    this.dom.element.classList.add(classNames.popup.visible);
  }

  open() {
    this.toggleBackgroundVisibility();
    this.render();
    this.getElements();
    this.initActions();
    this.show();
  }

  close() {
    this.dom.element.remove();
    this.toggleBackgroundVisibility();
  }

  toggleBackgroundVisibility() {
    this.dom.background.classList.toggle(classNames.popup.backgroundVisible);
  }
}

export default Popup;
