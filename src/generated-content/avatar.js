const image = require('../../sample-data/media/user-image1.json')
const imageUrl = image.media_details.sizes.full.source_url
const imageAlt = image.alt_text

module.exports = {
  label: 'Avatar',
  context: {
    avatar: {
      img: imageUrl,
      alt: imageAlt
    }
  }
}
