const tableData = []

for (var i = 0; i < 7; i++) {
  tableData.push({
    staff: {
      firstname: 'Firstname',
      lastname: 'Lastname',
      title: 'Job Title',
      program: 'CDL Program'
    }
  })
}

module.exports = {
  label: 'Program',
  preview: '@template-page',
  context: {
    row: tableData
  }
}
