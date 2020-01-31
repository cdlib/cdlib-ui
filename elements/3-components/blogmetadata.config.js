const faker = require('faker/locale/en');
const categoryData = [];
const categories = ['Collection Development', 'Newsletter', 'Shared Print', 'Staff News'];
const tagData = [];
const tags = ['resource_change', 'arks', 'citation', 'community', 'open source'];

for (var i = 0; i < categories.length; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  categoryData.push({
    link: {
      text: categories[i]
    }
  });
}

for (var i = 0; i < tags.length; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  tagData.push({
    link: {
      text: tags[i]
    }
  });
}

module.exports = {
  label: 'Blog Metadata',
  context: {
    link: {
      text: faker.name.findName()
    },
    blogmetadata: {
      date: faker.date.month() + ' ' + faker.random.number({min: 1, max: 30}) + ', ' + faker.random.number({min: 2000, max: 2018})
    },
    categoryList: categoryData,
    tagList: tagData
  }
};
