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
    messageVisible: 'form__message',
  },
  popup: {
    visible: 'popup--visible',
    backgroundVisible: 'popup__background--visible',
    buttonClose: 'js--close-modal',
  },
  chart: {
    datasetHidden: 'hidden',
  }
};

export const select = {
  popup: {
    background: '.popup__background',
    popupConfirm: '.popup--confirm',
    buttonConfirm: '.popup .js--confirm',
    buttonsClose: '.popup .js--close-modal',
    chatConversation: '.popup__conversation',
    chatMessage: '.popup__message',
  },
  header: {
    menuToggleBtn : '.header__toggle-menu',
  },
  sidebar: {
    sidebar: '.drop-down',
    navLinks: '.sidebar__menu-item',
    managerLink: '.sidebar__manager a',
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
    typePassword: 'input[type="password"]',
    validityMessage: '.form__message',
  },
  template: {
    popupConfirm: '#template-popup-confirm',
    popupChat: '#template-popup-chat',
  },
  statistics: {
    chartcontext: '#myChart',
    legendWrapper: '.chart__legend',
    legendButtons: '.chart__legend li',
    dateRange: '.statistics .date-period',
    dateInputGroup: '.date-period__input-group',
    calendarPicker: '.date-period__icon',
    refreshDate: '.date-period__button',
  },
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
    managerChatTitle: 'Online chat with your personal manager',
    typeManagerChat: 'managers',
  },
  chart: {
    colors: ['#8DBEC8', '#F29E4E', '#71B374'],
    hiddenDefault: [2],
  }
};

export const templates = {
  popupConfirm: Handlebars.compile(document.querySelector(select.template.popupConfirm).innerHTML),
  popupChat: Handlebars.compile(document.querySelector(select.template.popupChat).innerHTML),
};
