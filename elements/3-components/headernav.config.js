const faker = require('faker/locale/en');
const fakerHeaderList1 = [];
const fakerHeaderList2 = [];
const fakerHeaderList3 = [];
const list1 = ['About CDL', 'Services & Projects', 'Resources for...', 'Committees & Groups', 'News & Groups'];
const columnClasses = ['columns-2', 'columns-3', '', '', ''];

for (var i = 0; i < list1.length; i++) {
  fakerHeaderList1.push({
    link: {
      text: list1[i],
    },
    columnClass: columnClasses[i]
  });
}

for (var i = 0; i < 3; i++) {
  fakerHeaderList2.push({
    link: {
      text: faker.commerce.productName(),
    }
  });
}

for (var i = 0; i < 5; i++) {
  fakerHeaderList3.push({
    link: {
      text: faker.commerce.productName(),
    }
  });
}

module.exports = {
  label: 'Header Nav',
  context: {
    list1: fakerHeaderList1,
    list2: fakerHeaderList2,
    list3: fakerHeaderList3
  },
  notes: 'Instead of using link variants link--2 and link--6 in headernav.hbs, default links are used and then styled as those variants in _headernav.scss. This is for WP Nav Menus, which output anchors tags without classes, by default.'
};
