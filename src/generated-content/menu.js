const menu = [
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
    menu: [
      {
        title: {
          rendered: 'nested menu item 4'
        }
      },
      {
        title: {
          rendered: 'nested menu item 5'
        },
        menu: [
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
  menu
}
