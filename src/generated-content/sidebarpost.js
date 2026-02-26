const { faker } = require('@faker-js/faker/locale/en');
const fakerData1 = [];
const authorUrls = ['https://www.cdlib.org/cdlinfo/author/abrin/', 'https://www.cdlib.org/cdlinfo/author/bhui/', 'https://www.cdlib.org/cdlinfo/author/cli/', 'https://www.cdlib.org/cdlinfo/author/dlowenberg/', 'https://www.cdlib.org/cdlinfo/author/eproulx/'];
const authorNames = ['Adam Brin', 'Barbara Hui', 'Chan Li', 'Daniella Lowenberg', 'Elise Proulx'];
const fakerData2 = [];
const monthUrls = ['https://www.cdlib.org/cdlinfo/2019/08/', 'https://www.cdlib.org/cdlinfo/2019/07/', 'https://www.cdlib.org/cdlinfo/2019/06/', 'https://www.cdlib.org/cdlinfo/2019/05/', 'https://www.cdlib.org/cdlinfo/2019/04/', 'https://www.cdlib.org/cdlinfo/2019/03/'];
const months = ['August', 'July', 'June', 'May', 'April', 'March'];

for (var i = 0; i < authorUrls.length; i++) {
  fakerData1.push({
    select: {
      option: {
        value: authorUrls[i],
        label: authorNames[i] + ' (' + faker.number.int({min: 1, max: 20}) + ')'
      }
    }
  });
}

for (var i = 0; i < monthUrls.length; i++) {
  fakerData2.push({
    select: {
      option: {
        value: monthUrls[i],
        label: months[i] + ' 2019' + ' (' + faker.number.int({min: 1, max: 20}) + ')'
      }
    }
  });
}

module.exports = {
  sidebarpost1: {
    heading: {
      id: 'c-sidebarpost--author-heading',
      text: 'Authors'
    },
    select: {
      label: {
        class: 'o-label1' // hidden
      },
      labelledby: 'c-sidebarpost--author-heading',
      placeholder: {
        label: 'Select Author'
      },
      selectoption: fakerData1
    },
    button: 'View All by Author'
  },
  sidebarpost2: {
    heading: {
      id: 'c-sidebarpost--month-heading',
      text: 'Months of Publication'
    },
    select: {
      label: {
        class: 'o-label1' // hidden
      },
      labelledby: 'c-sidebarpost--month-heading',
      placeholder: {
        label: 'Select Month'
      },
      selectoption: fakerData2
    },
    button: 'View All from Month',
  }
}
