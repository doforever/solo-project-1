import { classNames, select, settings } from './settings.js';
import Form from './components/form.js';
import Confirm from './components/confirm.js';
import Chat from './components/chat.js';

const app = {
  init: function() {
    this.getElements();
    this.initPopups();
    this.initForm();
    this.initPages();
    this.initActions();
    console.log('thisApp', this);
  },

  getElements: function() {
    this.dom = {};
    this.dom.menuToggle = document.querySelector(select.header.menuToggleBtn);
    this.dom.sidebar = document.querySelector(select.sidebar.sidebar);
    this.pages = document.querySelectorAll(select.main.pages);
    this.navLinks = document.querySelectorAll(select.sidebar.navLinks);
    this.dom.quit = document.querySelector(select.topBar.quit);
    this.dom.manager = document.querySelector(select.sidebar.managerLink);
    this.dom.popupBackground = document.querySelector(select.popup.background);
  },

  initActions: function() {
    this.dom.menuToggle.addEventListener('click', () => {
      this.dom.sidebar.classList.toggle(classNames.sidebar.sidebarExpaded);
    });

    this.dom.quit.addEventListener('click', () => {
      this.showPopupBackground();
      this.popupConfirm.open();
    });

    this.dom.manager.addEventListener('click', () => {
      this.showPopupBackground();
      this.popupChat.open(this.dom.manager.dataset.id);
    });

    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.hidePopupBackground();
      }
    });

    this.dom.popupBackground.addEventListener('click', () => {
      this.hidePopupBackground();
    });
  },

  initPages: function () {
    const thisApp = this;
    const idFromHash = window.location.hash.replace('#/', '');
    let linkMatchingHash = this.navLinks[0].getAttribute('href').replace('#', '');
    for (let link of this.navLinks){
      const linkId = link.getAttribute('href').replace('#', '');
      if (linkId == idFromHash){
        linkMatchingHash = linkId;
        break;
      }
    }

    thisApp.activatePage(linkMatchingHash);

    for (let link of this.navLinks){
      link.addEventListener('click', function(event) {
        const clickedElement = this;
        event.preventDefault();
        /* get id from href attr */
        const id = clickedElement.getAttribute('href').replace('#', '');
        /* activate Page with id */
        thisApp.activatePage(id);
        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const chosenPages = settings.pagesMap[pageId] || [];
    /* add class 'active' to matching pages, remove from non-matching */
    for (let page of this.pages){
      page.classList.toggle(
        classNames.pages.active,
        chosenPages.includes(page.id)
      );
    }
    /* add class 'active' to matching links, remove from non-matching */
    for (let link of this.navLinks){
      link.classList.toggle(
        classNames.sidebar.navLinkActive,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initForm: function() {
    const formElement = document.querySelector(select.form.wrapper);
    this.form = new Form(formElement);
  },

  initPopups: function() {
    this.popupConfirm = new Confirm (settings.popup.questionQuit, settings.popup.confirmationQuit);
    this.popupChat = new Chat (settings.popup.managerChatTitle, settings.popup.typeManagerChat);
  },

  showPopupBackground: function() {
    this.dom.popupBackground.classList.add(classNames.popup.backgroundVisible);
  },

  hidePopupBackground: function() {
    this.dom.popupBackground.classList.remove(classNames.popup.backgroundVisible);
  },
};

app.init();
