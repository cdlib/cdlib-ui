const { faker } = require('@faker-js/faker/locale/en');
const fakerList = [];
const fakerCompoundList1 = [];
const fakerCompoundList2 = [];
const fakerCompoundList3 = [];

for (var i = 0; i < 5; i++) {
  fakerList.push({
    list: {
      text: faker.lorem.sentence(),
      term: faker.lorem.sentence(),
      definition: faker.lorem.sentences()
    }
  });
}

for (var i = 0; i < 2; i++) {
  fakerCompoundList1.push({
    compoundlist1: {
      text: faker.lorem.sentence(),
      term: faker.lorem.sentence(),
      definition: faker.lorem.sentences()
    }
  });
}

for (var i = 0; i < 2; i++) {
  fakerCompoundList2.push({
    compoundlist2: {
      text: faker.lorem.sentence()
    }
  });
}

for (var i = 0; i < 2; i++) {
  fakerCompoundList3.push({
    compoundlist3: {
      text: faker.lorem.sentence()
    }
  });
}

module.exports = {
  list: fakerList,
  compoundlist1: fakerCompoundList1,
  compoundlist2: fakerCompoundList2,
  compoundlist3: fakerCompoundList3,
}
