const faker = require('faker/locale/en');
const fakerList = [];

for (var i = 0; i < 5; i++) {
  fakerList.push({
    list: {
      text: faker.lorem.sentence(),
    }
  });
}

module.exports = {
  collated: true,
  default: '1',
  label: 'Lists',
  context: {
    list: fakerList
  },
  notes: "By default, WP will not apply an inline style to `ul` or `ol` tags. Therefore, this setting is styled as a non-bulleted list. If 'circle', 'disc', or 'square' is selected for 'Bulleted list' in the editor, the inline style with that attribute will be added. 'Numbered list' in the WP editor does not have a non-numbered default list style. These styles are selected off of the WP editor 'entry-content' `div` wrapper."
};
