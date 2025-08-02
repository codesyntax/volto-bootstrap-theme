import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';

const messages = defineMessages({
  blockWidth: {
    id: 'blockWidth',
    defaultMessage: 'Block width',
  },
});

const blockWidthSchemaEnhancer = ({ formData, schema, intl }) => {
  schema.properties.styles.schema.fieldsets[0].fields = [
    'blockWidth',
    ...schema.properties.styles.schema.fieldsets[0].fields,
  ];

  schema.properties.styles.schema.properties['blockWidth'] = {
    widget: 'blockWidth',
    title: intl.formatMessage(messages.blockWidth),
    default: 'default',
    filterActions: ['narrow', 'wide', 'full'],
    actions: config.blocks.widths,
  };
  schema.fieldsets[0].fields.push('color');
  return schema;
};

export { blockWidthSchemaEnhancer };
