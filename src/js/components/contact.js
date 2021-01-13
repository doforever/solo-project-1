import dataSource  from '../data.js';

class Contact {
  constructor(type, id) {
    this.nick = dataSource[type][id].nick;
    this.avatar = dataSource[type][id].avatar;
    this.status = dataSource[type][id].status;
    console.log('new contact', this);
  }
}

export default Contact;
