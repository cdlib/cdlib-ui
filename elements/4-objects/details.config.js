const faker = require('faker/locale/en');

module.exports = {
  label: 'Details',
  context: {
    details: {
      summary: faker.lorem.sentence(),
      text: faker.lorem.sentences(20)
    }
  },
  notes: 'A child element, like `<p>`, must wrap the content within the parent `<details>` element in order for details-element-polyfill.js to work in IE.'
};
