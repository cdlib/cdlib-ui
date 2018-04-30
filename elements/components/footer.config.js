const faker = require('faker/locale/en');
const linkData1 = [];
const linkData2 = [];
const linkData3 = [];
const linkData4 = [];

function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

for (var i = 0; i < 3; i++) {
  linkData1.push({
    link: {
      text: capFirstLetter(faker.lorem.words())
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

for (var i = 0; i < 3; i++) {
  linkData3.push({
    link: {
      text: capFirstLetter(faker.lorem.words())
    }
  });
}

for (var i = 0; i < 3; i++) {
  linkData4.push({
    link: {
      text: capFirstLetter(faker.lorem.words())
    }
  });
}


module.exports = {
  label: 'Global Footer',
  context: {
    listItem1: linkData1,
    listItem2: linkData2,
    listItem3: linkData3,
    listItem4: linkData4,
    heading: {
      level: '2',
    },
    link2: true,
    link: {
      text: 'Heading'
    }
  }
};
