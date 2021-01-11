import {templates, settings, select, classNames} from '../settings.js';

class Popup {
  constructor(question, confirmation, cancellation) {
    this.dom = {};
    const dataObject = this.prepareData(question, confirmation, cancellation);
    this.render(dataObject);
    this.getElements();
    this.initActions();
  }

  prepareData(question, confirmation = settings.popup.confirmationDefault, cancellation = settings.popup.cancellationDefault) {
    const dataObject = {
      question: question,
      confirmation: confirmation,
      cancellation: cancellation,
    };
    return dataObject;
  }

  render(dataObject) {
    const div = document.createElement('div');
    div.innerHTML = templates.popupConfirm(dataObject);
    this.dom.background = document.querySelector(select.popup.background);
    this.dom.background.appendChild(div);
  }

  getElements() {
    this.dom.element = document.querySelector(select.popup.popupConfirm);
    this.dom.confirm = this.dom.element.querySelector(select.popup.buttonConfirm);
    this.dom.cancel = this.dom.element.querySelector(select.popup.buttonCancel);
    console.log(this);
  }

  initActions() {
    this.dom.confirm.addEventListener('click', () => {
      this.toggle();
    });
    this.dom.cancel.addEventListener('click', () => {
      this.toggle();
    });
  }

  toggle() {
    this.dom.background.classList.toggle(classNames.popup.backgroundVisible);
    this.dom.element.classList.toggle(classNames.popup.visible);
  }
}

export default Popup;
