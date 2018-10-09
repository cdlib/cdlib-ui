const faker = require('faker/locale/en');

module.exports = {
  label: 'Meet',
  context: {
    meet: {
      img: faker.image.avatar(),
      alt: faker.name.findName(),
      caption: 'Meet ' + faker.name.findName() + ', ' + faker.helpers.randomize(['DMPTool', 'Calisphere', 'User Experience', 'Web Production', 'Collections Program']) + ' ' +faker.name.jobTitle()
    },
    link: {
      text: 'Read more'
    }
  }
};
