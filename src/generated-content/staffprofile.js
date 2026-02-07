const pages = require('../../sample-data/pages.json')
const page = 78
const pageTitle = pages[page].title.rendered
const firstName = pages[page].acf.first_name
const lastName = pages[page].acf.last_name
const programService = pages[page].acf.program_service
const jobTitle = pages[page].acf.title
const responsibilities = pages[page].acf.responsibilities
const education = pages[page].acf.education
const background = pages[page].acf.background
const professionalInterests = pages[page].acf.professional_interests
const committeesAffiliations = pages[page].acf.committees_affiliations
const publications = pages[page].acf.publications
const papersAndPresentations = pages[page].acf.papers_and_presentations
const orcidId = pages[page].acf.orcid_id
const linkedinProfile = pages[page].acf.linkedin_profile
const breadcrumbSamples = [];
const breadcrumbLevels = ['California Digital Library', 'Contact CDL', 'Staff Directory']

for (const breadcrumbLevel of breadcrumbLevels) {
  breadcrumbSamples.push({
    link: {
      text: breadcrumbLevel
    }
  });
}

module.exports = {
  label: 'Staff Profile',
  preview: '@template-page',
  context: {
    breadcrumb: {
      list: breadcrumbSamples,
      activelevel: pageTitle
    },
    heading: {
      level: '1',
      text: pageTitle
    },
    contact: {
      firstname: firstName,
      lastname: lastName,
      button: {
        text: 'Contact Information'
      },
      link: {
        text: 'Contact Information'
      }
    },
    program: programService,
    title: jobTitle,
    pronouns: 'he, him',
    responsibilities: responsibilities,
    education: education,
    background: background,
    interests: professionalInterests,
    affiliations: committeesAffiliations,
    publications: publications,
    papers: papersAndPresentations,
    orcid: {
      url: orcidId,
      text: orcidId
    },
    linkedin: {
      heading: 'LinkedIn Profile',
      url: linkedinProfile
    },
  }
};
