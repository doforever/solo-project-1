import { select } from '../settings.js';

class DateRange {
  constructor(element) {
    this.getElements(element);
    this.initPlugin();
    this.initActions();
  }

  initPlugin() {
    this.options = {
      format: 'dd.mm.yyyy',
      showOnFocus: false,
      showOnClick: false,
    };
    // eslint-disable-next-line no-undef
    this.picker = new DateRangePicker(this.dom.inputGroup, this.options);
    this.pickStart = this.picker.datepickers[0];
    this.pickEnd = this.picker.datepickers[1];
  }

  getElements(element) {
    this.dom = {};
    this.dom.inputGroup = element.querySelector(select.statistics.dateInputGroup);
    this.dom.refreshButton = element.querySelector(select.statistics.refreshDate);
    this.dom.calendar = element.querySelector(select.statistics.calendarPicker);
  }

  initActions() {
    this.dom.calendar.addEventListener('click', () => {

      if (this.options.showOnClick) {
        this.pickStart.hide();
        this.pickEnd.hide();
        this.setShowOnClick(false);
      } else {
        this.pickStart.show();
        this.setShowOnClick(true);
      }
    });

    this.dom.refreshButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.picker.setDates({clear: true}, {clear: true});
    });
  }

  setShowOnClick(boolen) {
    this.options.showOnClick = boolen;
    this.picker.setOptions(this.options);
  }
}

export default DateRange;
