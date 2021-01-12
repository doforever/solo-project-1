import Popup from './popup.js';
import {settings, templates, select} from '../settings.js';

class Confirm extends Popup {
  constructor(question, confirmation, cancellation) {
    super();
    this.dataObject = this.prepareData(question, confirmation, cancellation);
    this.template = templates.popupConfirm;
  }

  prepareData(question, confirmation = settings.popup.confirmationDefault, cancellation = settings.popup.cancellationDefault) {
    return {
      question: question,
      confirmation: confirmation,
      cancellation: cancellation,
    };
  }

  getElements() {
    this.dom.confirm = this.dom.element.querySelector(select.popup.buttonConfirm);
    this.dom.cancel = this.dom.element.querySelector(select.popup.buttonCancel);
  }

  initActions() {
    this.dom.confirm.addEventListener('click', () => {
      console.log('confirm click', this);
      this.close();
    });
    this.dom.cancel.addEventListener('click', () => {
      this.close();
    });
  }
}

export default Confirm;
