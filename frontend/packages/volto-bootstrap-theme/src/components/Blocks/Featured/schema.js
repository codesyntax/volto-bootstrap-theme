import messages from './messages';

const Schema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.featuredBlockTitle),

    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['title', 'preview_image', 'linkText', 'href'],
      },
    ],

    properties: {
      preview_image: {
        title: intl.formatMessage(messages.image),
        widget: 'object_browser',
        mode: 'image',
        allowExternals: true,
      },

      href: {
        title: intl.formatMessage(messages.url),
        widget: 'url',
      },
      linkText: {
        title: intl.formatMessage(messages.linkText),
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
    },
    required: [],
  };
};
export default Schema;
