import messages from './messages';

const schemaEnhancerImageToTheSide = ({ formData, schema, intl }) => {
  schema.properties.imagePosition = {
    title: intl.formatMessage(messages.imagePosition),
    choices: [
      ['left', intl.formatMessage(messages.left)],
      ['right', intl.formatMessage(messages.right)],
    ],
    default: 'left',
  };
  schema.fieldsets[0].fields.push('imagePosition');
  return schema;
};

export { schemaEnhancerImageToTheSide };
