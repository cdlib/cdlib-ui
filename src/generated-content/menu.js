const list = [
  {
    title: {
      rendered: 'menu item 1'
    }
  },
  {
    title: {
      rendered: 'menu item 2'
    }
  },
  {
    title: {
      rendered: 'menu item 3'
    },
    list: [
      {
        title: {
          rendered: 'nested menu item 4'
        }
      },
      {
        title: {
          rendered: 'nested menu item 5'
        },
        list: [
          {
            title: {
              rendered: 'nested menu item 6'
            }
          },
          {
            title: {
              rendered: 'nested menu item 7'
            }
          }
        ]
      },
      {
        title: {
          rendered: 'nested menu item 8'
        }
      }
    ]
  },
  {
    title: {
      rendered: 'menu item 9'
    }
  }
]

module.exports = {
  label: 'Menu',
  context: {
    list
  },
  notes: 'Recursive nested list Handlebars templating adapted from: http://www.boduch.ca/2014/03/recursive-list-building-with-handlebars.html (see menu-items partial).'
}
