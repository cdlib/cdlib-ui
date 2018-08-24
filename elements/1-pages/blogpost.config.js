const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 8; i++) {
  fakerData.push({
    blogpost: {
      text: faker.lorem.paragraphs()
    }
  });
}

module.exports = {
  label: 'Blog Post',
  context: {
    heading: {
      level: '1',
      text: 'Post Title'
    },
    paragraph: fakerData
  }
};