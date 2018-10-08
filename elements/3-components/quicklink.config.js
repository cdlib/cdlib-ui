const faker = require('faker/locale/en');
const fakerData1 = [];
const fakerData2 = [];
const list1 = ['For Campus Libraries', 'For Content Contributors', 'For Faculty', 'For Vendors', 'For Technologists'];
const list2 = ['Calisphere', 'eScholarship', 'Merritt Repository Service', 'Melvyl', 'Online Archive of California', 'UC Libraries', 'DMPTool'];

for (var i = 0; i < list1.length; i++) {
  fakerData1.push({
    link: {
      text: list1[i]
    }
  });
}

for (var i = 0; i < list2.length; i++) {
  fakerData2.push({
    link: {
      text: list2[i]
    }
  });
}

module.exports = {
  collated: true,
  default: '1',
  label: 'Quick Link',
  context: {
    quicklink1: {
      heading: {
        level: '2',
        text: 'Information Gateways'
      }
    },
    quicklink2: {
      heading: {
        level: '2',
        text: 'Go Directly To'
      }
    },
    list1: fakerData1,
    list2: fakerData2
  }
};
