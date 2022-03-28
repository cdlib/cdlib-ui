const faker = require('faker/locale/en');
const fakerData = [];
const filetypes = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'zip', 'html', 'rtf'];
const terms = ['digital', 'library', 'books', 'report', 'campus'];
const unbrokenText = ' UnbrokenTextloremipsumdolorsitametconsecteturadipisicingelitNequedignissimosfugitnamreprehenderitminimadelenitiquamquiasitisteexpeditatemp'

for (var i = 0; i < 20; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  fakerData.push({
    heading: {
      level: '2'
    },
    link1: true,
    link2: false,
    link: {
      text: faker.commerce.productName(),
      url: 'file.' + faker.helpers.randomize(filetypes),
    },
    searchresult: {
      doctype: faker.helpers.randomize(filetypes),
      excerptFirstHalf: faker.lorem.words(15) + unbrokenText,
      terms: faker.helpers.randomize(terms),
      excerptSecondHalf: faker.lorem.words(15),
      datetime: faker.date.month() + ' ' + faker.random.number({min: 1, max: 30}) + ', ' + faker.random.number({min: 2000, max: 2018}),
    }
  });
}

module.exports = {
  label: 'Search Results',
  context: {
    list: fakerData,
  }
};
