const faker = require('faker/locale/en');
const linkData1 = [];
const linkData2 = [];
const list1 = ['About CDL', 'Services & Projects', 'Resources for...', 'Committees & Groups', 'News & Groups'];

function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

for (var i = 0; i < 5; i++) {
  linkData1.push({
    link: {
      text: list1[i]
    }
  });
}

for (var i = 0; i < 5; i++) {
  linkData2.push({
    link: {
      text: capFirstLetter(faker.lorem.words())
    }
  });
}

module.exports = {
  label: 'Global Footer',
  context: {
    list1: linkData1,
    list2: linkData2,
    heading: {
      level: '2',
    },
    link1: true,
    link: {
      text: 'Heading'
    }
  }
};
