const meet = require('../../sample-data/home.json')
const meetImage = meet.acf.meet_image
const meetText = meet.acf.meet_main_text
const meetUrl = meet.acf.meet_link

module.exports = {
  label: 'Meet',
  context: {
    meet: {
      img: meetImage,
      alt: 'Joe Somontan',
      caption: meetText
    },
    link: {
      text: 'Read more',
      url: meetUrl
    }
  }
}
