const years = [];
const currentYear = new Date().getFullYear();

for (var i = 0; i < 22; i++) {
  years.push({
    link: {
      text: currentYear - i,
      url: '#' + (currentYear - i)
    }
  });
}

module.exports = {
  label: 'Year Anchor List',
  context: {
    list: years
  }
};
