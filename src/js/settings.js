export const classNames = {
  sidebar: {
    sidebarExpaded : 'expanded',
    navLinkActive: 'sidebar__menu-item--active',
  },
  pages: {
    active: 'page-active',
  },
  form: {
    invalidInput: 'invalid',
    messageVisible: 'message',
  },
  popup: {
    visible: 'popup--visible',
    backgroundVisible: 'popup__background--visible',
  }
};

export const select = {
  popup: {
    background: '.popup__background',
    popupConfirm: '.popup--confirm',
    buttonConfirm: '.popup #confirm',
    buttonCancel: '.popup #cancel',
  },
  header: {
    menuToggleBtn : '.header__toggle-menu',
  },
  sidebar: {
    sidebar: '.drop-down',
    navLinks: '.sidebar__menu-item',
  },
  topBar: {
    quit: 'nav.top-bar .quit',
  },
  main: {
    pages: '.main__section',
  },
  form: {
    wrapper: '.personal-data form',
    input: 'input',
    password: 'input[name="password"]',
    validityMessage: '.message',
  },
  template: {
    popupConfirm: '#template-popup-confirm',
  }
};

export const settings = {
  pagesMap: {
    general: ['statistics', 'links'],
    links: ['links'],
    banners: ['banners'],
    personal_data: ['personal_data'],
  },
  popup: {
    confirmationDefault: 'Yes',
    cancellationDefault: 'Cancel',
    confirmationQuit: 'Quit',
    questionQuit: 'Do you really want to Quit?',
  }
};

export const templates = {
  popupConfirm: Handlebars.compile(document.querySelector(select.template.popupConfirm).innerHTML),
};
