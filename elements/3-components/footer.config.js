const faker = require('faker/locale/en');
const linkData1 = [];
const linkData2 = [];
const linkData3 = [];
const list1 = ['About CDL', 'Our Organization', 'Services & Projects', 'Resources For...', 'Committees & Groups', 'News & Media'];
const list3 = ['Site Map', 'Terms & Conditions', 'Privacy Policy', 'Accessibility Policy'];

function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

for (var i = 0; i < list1.length; i++) {
  linkData1.push({
    link: {
      text: list1[i]
    }
  });
}

for (var i = 0; i < 5; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  linkData2.push({
    link: {
      text: capFirstLetter(faker.lorem.words())
    }
  });
}

for (var i = 0; i < list3.length; i++) {
  linkData3.push({
    link: {
      text: list3[i]
    }
  });
}

module.exports = {
  label: 'Footer',
  context: {
    list1: linkData1,
    list2: linkData2,
    list3: linkData3
  }
};
