const slideshow = require('../../sample-data/home.json')

module.exports = {
  label: 'Slideshow',
  context: {
    slide1: {
      slide: {
        heading: slideshow.acf.slide_1_heading,
        text: slideshow.acf.slide_1_main_text,
        link: slideshow.acf.slide_1_link,
        imageSmall: slideshow.acf.slide_1_image,
        imageLarge: slideshow.acf.slide_1_image,
        alt: slideshow.acf.slide_1_heading,
        credits: slideshow.acf.slide_1_credits
      }
    },
    slide2: {
      slide: {
        heading: slideshow.acf.slide_2_heading,
        text: slideshow.acf.slide_2_main_text,
        link: slideshow.acf.slide_2_link,
        imageSmall: slideshow.acf.slide_2_image,
        imageLarge: slideshow.acf.slide_2_image,
        alt: slideshow.acf.slide_2_heading,
        credits: slideshow.acf.slide_2_credits
      }
    },
    slide3: {
      slide: {
        heading: slideshow.acf.slide_3_heading,
        text: slideshow.acf.slide_3_main_text,
        link: slideshow.acf.slide_3_link,
        imageSmall: slideshow.acf.slide_3_image,
        imageLarge: slideshow.acf.slide_3_image,
        alt: slideshow.acf.slide_3_heading,
        credits: slideshow.acf.slide_3_credits
      }
    },
    slide4: {
      slide: {
        heading: slideshow.acf.slide_4_heading,
        text: slideshow.acf.slide_4_main_text,
        link: slideshow.acf.slide_4_link,
        imageSmall: slideshow.acf.slide_4_image,
        imageLarge: slideshow.acf.slide_4_image,
        alt: slideshow.acf.slide_4_heading,
        credits: slideshow.acf.slide_4_credits
      }
    }
  }
}
