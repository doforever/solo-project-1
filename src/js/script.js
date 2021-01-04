import { classNames, select } from './settings.js';

const app = {
  init: function() {
    this.getElements();
    this.initActions();
  },

  getElements: function() {
    this.dom = {};
    this.dom.menuToggle = document.querySelector(select.general.menuToggleBtn);
    this.dom.sidebar = document.querySelector(select.general.aside);
    this.pages = document.querySelectorAll(select.general.page);
  },

  initActions: function() {
    this.dom.menuToggle.addEventListener('click', () => {
      this.dom.sidebar.classList.toggle(classNames.general.sidebarExpaded);
    });
  },
};

app.init();
