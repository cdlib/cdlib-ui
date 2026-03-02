const { faker } = require('@faker-js/faker')

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

module.exports = {
  slide1: {
    slide: {
      heading: titleCase(faker.lorem.words(10)),
      text: faker.lorem.paragraph(),
      link: faker.internet.url(),
      imageSmall: faker.image.urlPicsumPhotos({ width: 700, blur: 0 }),
      imageLarge: faker.image.urlPicsumPhotos({ width: 1000, blur: 0 }),
      alt: titleCase(faker.lorem.words(10)),
      credits: 'Photo by ' + faker.person.fullName()
    }
  },
  slide2: {
    slide: {
      heading: titleCase(faker.lorem.words(10)),
      text: faker.lorem.paragraph(),
      link: faker.internet.url(),
      imageSmall: faker.image.urlPicsumPhotos({ width: 700, blur: 0 }),
      imageLarge: faker.image.urlPicsumPhotos({ width: 1000, blur: 0 }),
      alt: titleCase(faker.lorem.words(10)),
      credits: 'Photo by ' + faker.person.fullName()
    }
  },
  slide3: {
    slide: {
      heading: titleCase(faker.lorem.words(10)),
      text: faker.lorem.paragraph(),
      link: faker.internet.url(),
      imageSmall: faker.image.urlPicsumPhotos({ width: 700, blur: 0 }),
      imageLarge: faker.image.urlPicsumPhotos({ width: 1000, blur: 0 }),
      alt: titleCase(faker.lorem.words(10)),
      credits: 'Photo by ' + faker.person.fullName()
    }
  },
  slide4: {
    slide: {
      heading: titleCase(faker.lorem.words(10)),
      text: faker.lorem.paragraph(),
      link: faker.internet.url(),
      imageSmall: faker.image.urlPicsumPhotos({ width: 700, blur: 0 }),
      imageLarge: faker.image.urlPicsumPhotos({ width: 1000, blur: 0 }),
      alt: titleCase(faker.lorem.words(10)),
      credits: 'Photo by ' + faker.person.fullName()
    }
  }
}
