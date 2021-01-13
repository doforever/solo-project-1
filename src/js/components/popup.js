import { select, classNames } from '../settings.js';

class Popup {
  constructor() {
    this.getBackground();
    this.initGlobalActions();
    this.dataObject = null;
    this.template = null;
  }

  getBackground() {
    this.dom = {};
    this.dom.background = document.querySelector(select.popup.background);
  }

  render() {
    let parentDiv = document.createElement('div');
    if (this.template) { parentDiv.innerHTML = this.template(this.dataObject).trim(); }
    this.dom.element = parentDiv.firstChild;
    if (this.dom.element) this.dom.background.appendChild(this.dom.element);
  }

  getElements() {

  }

  initGlobalActions() {
    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    });

    this.dom.background.addEventListener('click', () => {
      this.close();
    });
  }

  initActions() {
    this.dom.element.addEventListener('click', (event) => {
      event.stopPropagation();
      if (event.target.classList.contains(classNames.popup.buttonClose)) {
        this.close();
      }
    });
  }

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
    this.toggleBackgroundVisibility();
    this.dom.element.remove();
  }

  toggleBackgroundVisibility() {
    this.dom.background.classList.toggle(classNames.popup.backgroundVisible);
  }
}

export default Popup;
