module.exports = {
  collated: true,
  default: '1',
  label: 'Links',
  context: {
    link: {
      text: 'Default link to cdlib.org page',
      url: 'https://cdlib.org',
      linebreak: true
    }
  },
  variants: [
    {
      name: '2',
      context: {
        link: {
          text: 'Anchor link to reference',
          url: '#some-heading'
        }
      }
    },
    {
      name: '3',
      context: {
        link: {
          text: 'Link to external site',
          url: 'wordpress/external/link'
        }
      }
    },
    {
      name: '4',
      context: {
        link: {
          text: 'Link to email address',
          url: 'mailto:someone@cdlib.org'
        }
      }
    },
    {
      name: '5',
      context: {
        link: {
          text: 'Link to UCOP Sharepoint site',
          url: 'https://ucofficeofthepresident.sharepoint.com'
        }
      }
    },
    {
      name: '6',
      context: {
        link: {
          text: 'Link to PDF',
          url: 'wordpress/document.pdf'
        }
      }
    },
    {
      name: '7',
      context: {
        link: {
          text: 'Link to UCOP Sharepoint PDF',
          url: 'https://ucofficeofthepresident.sharepoint.com/document.pdf'
        }
      }
    },
    {
      name: '8',
      context: {
        link: {
          text: 'Link to Word document',
          url: 'wordpress/document.doc'
        }
      }
    },
    {
      name: '9',
      context: {
        link: {
          text: 'Link to Excel spreadsheet',
          url: 'wordpress/document.xls'
        }
      }
    },
    {
      name: '10',
      context: {
        link: {
          text: 'Link to text file',
          url: 'wordpress/document.txt'
        }
      }
    },
    {
      name: '11',
      context: {
        link: {
          text: 'Link to ZIP file',
          url: 'wordpress/document.zip'
        }
      }
    },
    {
      name: '12',
      context: {
        link: {
          text: 'Link to Rich Text file',
          url: 'wordpress/document.rtf'
        }
      }
    }
  ]
};
