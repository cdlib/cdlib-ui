const faker = require('faker/locale/en');

if (process.env.NODE_ENV === 'testing') {
  faker.seed(123);
}

module.exports = {
  label: 'Staff Profile',
  preview: '@template-page',
  context: {
    heading: {
      level: '1',
      text: faker.name.findName()
    },
    contact: {
      button: {
        text: 'Contact Information'
      },
      link: {
        text: 'Contact Information'
      }
    },
    program: {
      heading: 'Program / Service',
      text: faker.lorem.sentence()
    },
    title: {
      heading: 'Job Title',
      text: faker.name.jobTitle()
    },
    responsibilities: {
      heading: 'Responsibilities',
      text: faker.company.catchPhrase() + ' ' + faker.lorem.words(50) + '.'
    },
    education: {
      heading: 'Education',
      text: faker.lorem.sentences()
    },
    background: {
      heading: 'Background',
      text: faker.lorem.sentences()
    },
    interests: {
      heading: 'Professional Interests',
      text: faker.lorem.sentences()
    },
    affiliations: {
      heading: 'Committees / Affiliations',
      text: faker.lorem.sentences()
    },
    social: {
      heading: 'LinkedIn Profile',
      url: faker.internet.url()
    },
  }
};
