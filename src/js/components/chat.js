import Popup from './popup.js';
import {templates, select, classNames} from '../settings.js';
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
    this.dom.send = this.dom.element.querySelector(select.popup.buttonConfirm);
    this.dom.message = this.dom.element.querySelector(select.popup.chatMessageInput);
    this.dom.conversation = this.dom.element.querySelector(select.popup.chatConversation);
  }

  initActions() {
    super.initActions();

    this.dom.send.addEventListener('click', (event) => {
      event.preventDefault();
      this.sendMessage();
    });
  }

  sendMessage() {
    const message = this.dom.message.value.trim();
    if (message) {
      let messageDiv = document.createElement('div');
      messageDiv.innerText = message;
      messageDiv.classList.add(classNames.popup.chatMessage);
      this.dom.conversation.appendChild(messageDiv);
    }
    this.dom.message.value = '';
  }
}

export default Chat;
