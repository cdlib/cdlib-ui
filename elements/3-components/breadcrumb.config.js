const breadcrumbSamples = [];
const breadcrumbLevels = ['California Digital Library', 'Level 2', 'Level 3']

for (const breadcrumbLevel of breadcrumbLevels) {
  breadcrumbSamples.push({
    link: {
      text: breadcrumbLevel
    }
  });
}

module.exports = {
  label: 'Breadcrumb Nav',
  context: {
    breadcrumb: {
      list: breadcrumbSamples,
      activelevel: 'Active Page'
    }
  }
};
