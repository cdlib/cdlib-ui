const { faker } = require('@faker-js/faker/locale/en');
const headingText = titleCase(faker.lorem.words(10))

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

module.exports = {
  heading: {
    level: '1',
    text: headingText
  },
  heading_sample2: {
    heading: {
      level: '2',
      text: headingText
    }
  },
  heading_sample3: {
    heading: {
      level: '2',
      link: {
        text: headingText,
        url: 'https://cdlib.org'
      }
    }
  },
  heading_sample4: {
    heading: {
      level: '3',
      text: headingText,
      abbr: {
        title: 'California Digital Library',
        text: 'CDL'
      }
    }
  },
  heading_sample5: {
    heading: {
      level: '4',
      text: headingText
    }
  },
  heading_sample6: {
    heading: {
      level: '5',
      text: headingText
    }
  }
}
