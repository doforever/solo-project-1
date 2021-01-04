import { classNames, select } from './settings.js';

const menuToggle = document.querySelector(select.general.menuToggleBtn);
const sidebar = document.querySelector(select.general.aside);

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle(classNames.general.sidebarExpaded);
});
