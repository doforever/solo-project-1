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
      else console.log('invalid form');
    });
  }

  validate(input) {
    let validity = true;

    /* check if required input is not empty */
    if (input.required && !input.value) {
      validity = false;
    }

    /* check if password is correcty repeated */
    if (input.type === 'password'
      && input.name === 'repeat'
      && this.dom.querySelector(select.form.password).value != input.value) {
      validity = false;
    }

    input.classList.toggle(classNames.form.invalidInput, !validity);
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
}

export default Form;
