module.exports = {
  collated: true,
  default: '1',
  label: 'Form Labels',
  context: {
    label: {
      exists: true,
      for: '',
      text: 'Label 1 (Hidden Offscreen)'
    }
  },
  variants: [
    {
      name: '2', // label--2.hbs
      context: {
        label: {
          exists: true,
          for: '',
          text: 'Label 2'
        }
      }
    }
  ]
};
