module.exports = {
  title: 'Status',
  label: 'Status',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n`;
  },
  default: 'info',
  variants: [
    {
      name: 'info',
      label: 'Info',
      context: {
        variant: 'info',
        status: 'Current status',
        description: 'European Commission final decision',
      },
    },
    {
      name: 'authorised',
      label: 'Authorised',
      context: {
        variant: 'authorised',
        status: 'Authorised',
        description:
          'This medicine is authorised for use in the European Union',
      },
    },
    {
      name: 'refused',
      label: 'Refused',
      context: {
        variant: 'refused',
        status: 'Refused',
        description: 'This medicine was refused for use in the European Union',
      },
    },
    {
      name: 'withdrawn',
      label: 'Withdrawn',
      context: {
        variant: 'withdrawn',
        status: 'Withdrawn',
        description:
          'This medicine is now withdrawn from use in the European Union',
      },
    },
    {
      name: 'suspended',
      label: 'Suspended',
      context: {
        variant: 'suspended',
        status: 'Suspended',
        description:
          'This medicine is currently suspended from use in the European Union',
      },
    },
    {
      name: 'patient-safety',
      label: 'Patient safety',
      context: {
        variant: 'patient-safety',
        status: 'Patient safety',
        description: 'Patient safety information',
      },
    },
  ],
};
