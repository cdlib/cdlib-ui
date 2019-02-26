const faker = require('faker/locale/en');
const fakerData = [];
const filetypes = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'zip', 'html', 'rtf'];
const terms = ['digital', 'library', 'books', 'report', 'campus'];
const unbrokenText = ' UnbrokenTextloremipsumdolorsitametconsecteturadipisicingelitNequedignissimosfugitnamreprehenderitminimadelenitiquamquiasitisteexpeditatemp'

for (var i = 0; i < 20; i++) {
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
      group: faker.helpers.randomize(['News and Media: CDLINFO', 'Information Services', 'User Experience Design Services', 'Discovery ＆ Delivery Program', 'Collections Program', '']),
      doctype: faker.helpers.randomize(filetypes),
      quoteFirstHalf: faker.lorem.words(15) + unbrokenText,
      terms: faker.helpers.randomize(terms),
      quoteSecondHalf: faker.lorem.words(15),
      date: faker.date.month() + ' ' + faker.random.number({min: 1, max: 30}) + ', ' + faker.random.number({min: 2000, max: 2018}),
    }
  });
}

module.exports = {
  label: 'Search Results',
  context: {
    list: fakerData,
  }
};
