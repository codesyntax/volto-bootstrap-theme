/*
 * Taken from: https://github.dev/eea/volto-clms-theme
 */

import messages from './messages';

const SliderItemSchema = ({ intl }) => {
  return {
    title: 'Slider Item',
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['title', 'description', 'href', 'preview_image'],
      },
    ],
    properties: {
      title: {
        title: intl.formatMessage(messages.cardTitle),
        type: 'string',
        placeholder: 'Item title here',
      },
      preview_image: {
        title: intl.formatMessage(messages.cardImage),
        widget: 'object_browser',
        mode: 'image',
      },
      description: {
        title: intl.formatMessage(messages.cardDescription),
        type: 'textarea',
      },
      href: {
        title: intl.formatMessage(messages.cardURL),
        widget: 'url',
        allowExternals: true,
      },
      linkText: {
        title: intl.formatMessage(messages.linkText),
        widget: 'string',
      },
    },
    required: [],
  };
};

const SliderSchema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.sliderBlockTitle),

    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['sliderItems'],
      },
    ],

    properties: {
      sliderItems: {
        title: intl.formatMessage(messages.sliderItems),
        type: 'object_list',
        default: [],
      },
    },
    required: [],
  };
};
export { SliderSchema, SliderItemSchema };
