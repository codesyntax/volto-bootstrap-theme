import messages from './messages';

const schemaEnhancerGridTemplate = ({ formData, schema, intl }) => {
  schema.properties.itemsPerRow = {
    title: intl.formatMessage(messages.itemsPerRow),
    choices: [
      ['col-md-6', 2],
      ['col-md-4', 3],
      ['col-md-3', 4],
    ],
    default: 'col-md-4',
  };
  schema.properties.url = {
    title: intl.formatMessage(messages.url),
    widget: 'object_browser',
  };
  schema.properties.linkText = {
    title: intl.formatMessage(messages.linkText),
  };
  schema.fieldsets[0].fields.push('itemsPerRow');
  schema.fieldsets[0].fields.push('linkText');
  schema.fieldsets[0].fields.push('url');
  return schema;
};

export { schemaEnhancerGridTemplate };
