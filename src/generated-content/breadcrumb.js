const breadcrumbSamples = [];
const breadcrumbLevels = ['California Digital Library', 'Level 2', 'Level 3']

for (const breadcrumbLevel of breadcrumbLevels) {
  breadcrumbSamples.push({
    link: {
      url: 'https://cdlib.org',
      text: breadcrumbLevel
    }
  });
}

module.exports = {
  breadcrumb: {
    list: breadcrumbSamples,
    activelevel: 'Active Page'
  }
}
