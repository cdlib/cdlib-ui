const { faker } = require('@faker-js/faker')
const meetImage = faker.image.personPortrait({ size: '256' })
const meetName = faker.person.fullName()
const meetText = 'Meet ' + meetName + ', ' + faker.person.jobTitle() + ' for ' + faker.company.name()
const meetUrl = 'https://cdlib.org'

module.exports = {
  meet: {
    img: meetImage,
    alt: meetName,
    caption: meetText,
    link: {
      text: 'Read more',
      url: meetUrl
    }
  }
}
