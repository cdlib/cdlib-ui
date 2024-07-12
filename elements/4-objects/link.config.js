module.exports = {
  collated: true,
  default: '1',
  label: 'Links',
  context: {
    link: {
      text: 'Blue, underlined by default',
      url: 'https://cdlib.org',
      linebreak: true
    }
  },
  variants: [
    {
      name: '2', // link--2.hbs
      context: {
        link: {
          text: 'Blue, underlined on focus/hover',
          url: 'https://cdlib.org'
        }
      }
    },
    {
      name: '3', // link--3.hbs
      context: {
        link: {
          text: 'Blue, underlined by default, external link',
          url: 'wordpress/external/link'
        }
      }
    },
    {
      name: '4', // link--4.hbs
      context: {
        link: {
          text: 'Blue, underlined on focus/hover, external link',
          url: 'wordpress/external/link'
        }
      }
    },
    {
      name: '5', // link--5.hbs
      context: {
        link: {
          text: 'Light black, underlined on focus/hover',
          url: 'https://cdlib.org'
        }
      }
    },
    {
      name: '6', // link--6.hbs
      context: {
        link: {
          text: 'Light black, blue on focus/hover',
          url: 'https://cdlib.org'
        }
      }
    },
    {
      name: '7', // link--7.hbs
      context: {
        link: {
          text: 'Link to email address',
          url: 'mailto:someone@cdlib.org'
        }
      }
    },
    {
      name: '8', // link--8.hbs
      context: {
        link: {
          text: 'Link to UCOP Sharepoint site',
          url: 'https://ucofficeofthepresident.sharepoint.com'
        }
      }
    },
    {
      name: '9', // link--9.hbs
      context: {
        link: {
          text: 'Link to PDF',
          url: 'wordpress/document.pdf'
        }
      }
    },
    {
      name: '10', // link--10.hbs
      context: {
        link: {
          text: 'Link to UCOP Sharepoint PDF',
          url: 'https://ucofficeofthepresident.sharepoint.com/document.pdf'
        }
      }
    },
    {
      name: '11', // link--11.hbs
      context: {
        link: {
          text: 'Link to Word document',
          url: 'wordpress/document.doc'
        }
      }
    },
    {
      name: '12', // link--12.hbs
      context: {
        link: {
          text: 'Link to Excel spreadsheet',
          url: 'wordpress/document.xls'
        }
      }
    },
    {
      name: '13', // link--13.hbs
      context: {
        link: {
          text: 'Link to text file',
          url: 'wordpress/document.txt'
        }
      }
    },
    {
      name: '14', // link--14.hbs
      context: {
        link: {
          text: 'Link to ZIP file',
          url: 'wordpress/document.zip'
        }
      }
    },
    {
      name: '15', // link--15.hbs
      context: {
        link: {
          text: 'Link to Rich Text file',
          url: 'wordpress/document.rtf'
        }
      }
    }
  ]
};
