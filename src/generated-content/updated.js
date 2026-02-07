const users = require('../../sample-data/users.json')
const name = users[50].name
const url = users[50].link

module.exports = {
  label: 'Updated',
  context: {
    updated: {
      date: 'February 27, 2018'
    },
    link: {
      url: url,
      text: name
    }
  }
};
