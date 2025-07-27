import messages from './messages';

const Schema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.blocktitle),
    block: 'block',
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['title', 'image', 'linkText', 'url'],
      },
    ],

    properties: {
      image: {
        title: intl.formatMessage(messages.image),
        widget: 'object_browser',
      },
      url: {
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
