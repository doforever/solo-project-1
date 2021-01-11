import {classNames, select} from '../settings.js';

class Form {
  constructor(element) {
    this.dom = element;
    this.validity = false;
    this.getElements();
    this.initActions();
  }

  getElements() {
    this.allInputs = this.dom.querySelectorAll(select.form.input);
    console.log('all inputs', this.allInputs);
  }

  initActions() {
    this.dom.addEventListener('change', (event) => {
      event.preventDefault();
      this.validate(event.target);
    });

    this.dom.addEventListener('submit', (event) => {
      event.preventDefault();
      this.validateForm();
      if (this.validity) console.log('submit form');
    });
  }

  validate(input) {
    let validity = true;
    let validityMessage = '';

    /* check if required input is not empty */
    if (input.required && !input.value) {
      validity = false;
      validityMessage = 'This field is required';
    }

    /* check if password is correcty repeated */
    if (input.type === 'password'
      && input.name === 'repeat'
      && input.value
      && this.dom.querySelector(select.form.password).value != input.value) {
      validity = false;
      validityMessage = 'Incorrect password';
    }

    input.classList.toggle(classNames.form.invalidInput, !validity);
    this.updateMessage(input, validityMessage);
    return validity;
  }

  validateForm() {
    this.validity = true;
    for (let input of this.allInputs){
      const inputValidity = this.validate(input);
      if (!inputValidity) {
        this.validity = false;
      }
    }
  }

  updateMessage(input, message) {
    let messageElement = input.parentElement.querySelector(select.form.validityMessage);
    if (!messageElement && message){
      messageElement = document.createElement('div');
      messageElement.classList.add(classNames.form.messageVisible);
      messageElement.innerText = message;
      input.parentElement.append(messageElement);
    } else if (messageElement) {
      messageElement.innerText = message;
      messageElement.classList.toggle(classNames.form.messageVisible, message);
    }
  }
}

export default Form;
