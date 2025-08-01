import messages from './messages';

const AccordionPanelSchema = ({ intl }) => {
  return {
    title: 'Accordion Panel',
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['title', 'text'],
      },
    ],
    properties: {
      title: {
        title: intl.formatMessage(messages.accordionPanelTitle),
        type: 'string',
        placeholder: intl.formatMessage(
          messages.accordionPanelTitlePlaceholder,
        ),
      },
      text: {
        title: intl.formatMessage(messages.accordionPanelText),
        widget: 'richtext',
      },
    },
    required: [],
  };
};

const AccordionSchema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.accordionBlockTitle),

    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['title', 'accordionPanels'],
      },
    ],

    properties: {
      title: {
        title: intl.formatMessage(messages.title),
      },
      accordionPanels: {
        title: intl.formatMessage(messages.accordionPanels),
        type: 'object_list',
        default: [],
      },
    },
    required: [],
  };
};
export { AccordionPanelSchema, AccordionSchema };
