const navList = [];
const utilityNav = ['Staff Directory', 'Contact CDL', 'Report a Problem', 'System Status'];

for (var i = 0; i < 4; i++) {
  navList.push({
    link: {
      text: utilityNav[i],
    }
  });
}

module.exports = {
  label: 'Utility Nav',
  context: {
    list: navList,
  }
};
