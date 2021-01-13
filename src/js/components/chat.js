import Popup from './popup.js';
import {templates, select} from '../settings.js';
import Contact from './contact.js';

class Chat extends Popup {
  constructor(title, type) {
    super();
    this.dataObject = this.prepareData(title, type);
    this.template = templates.popupChat;
  }

  prepareData(title, type) {

    return {
      title: title,
      type: type,
    };
  }

  chooseContact(id) {
    this.contact = new Contact (this.dataObject.type, id);
    this.dataObject.contactStatus = this.contact.status;
    this.dataObject.contactName = this.contact.nick;
    this.dataObject.contactAvatar = this.contact.avatar;
  }

  open(id) {
    this.chooseContact(id);
    super.open();
  }

  getElements() {
    this.dom.confirm = this.dom.element.querySelector(select.popup.buttonConfirm);
  }

  initActions() {
    super.initActions();

    this.dom.confirm.addEventListener('click', () => {
      this.close();
    });
  }
}

export default Chat;
