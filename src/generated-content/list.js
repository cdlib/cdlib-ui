const { faker } = require('@faker-js/faker/locale/en');
const fakerList = [];
const fakerCompoundList1 = [];
const fakerCompoundList2 = [];
const fakerCompoundList3 = [];

for (var i = 0; i < 5; i++) {
  fakerList.push({
    list: {
      text: faker.lorem.sentence(),
      term: faker.lorem.sentence(),
      definition: faker.lorem.sentences()
    }
  });
}

for (var i = 0; i < 2; i++) {
  fakerCompoundList1.push({
    compoundlist1: {
      text: faker.lorem.sentence(),
      term: faker.lorem.sentence(),
      definition: faker.lorem.sentences()
    }
  });
}

for (var i = 0; i < 2; i++) {
  fakerCompoundList2.push({
    compoundlist2: {
      text: faker.lorem.sentence()
    }
  });
}

for (var i = 0; i < 2; i++) {
  fakerCompoundList3.push({
    compoundlist3: {
      text: faker.lorem.sentence()
    }
  });
}

module.exports = {
  collated: true,
  default: '1',
  label: 'Lists',
  context: {
    list: fakerList,
    compoundlist1: fakerCompoundList1,
    compoundlist2: fakerCompoundList2,
    compoundlist3: fakerCompoundList3,
  },
  notes: "By default, WP will not apply an inline style to `ul` or `ol` tags. Therefore, this setting is styled as a non-bulleted list. If 'circle', 'disc', or 'square' is selected for 'Bulleted list' in the editor, the inline style with that attribute will be added. 'Numbered list' in the WP editor does not have an alternative style."
};
