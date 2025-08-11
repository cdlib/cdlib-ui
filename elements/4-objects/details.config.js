const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Details',
  context: {
    details: {
      summary: faker.lorem.sentence(),
      text: faker.lorem.sentences(20),
      text_before: faker.lorem.paragraphs(3),
      text_after: faker.lorem.paragraphs(3)
    }
  },
  notes: 'A child element, like `<p>`, must wrap the content within the parent `<details>` element in order for details-element-polyfill.js to work in IE.'
};
