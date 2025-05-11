import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';

const messages = defineMessages({
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  item: {
    id: 'Link',
    defaultMessage: 'Link',
  },
  addLink: {
    id: 'Add link',
    defaultMessage: 'Add link',
  },
  Target: {
    id: 'Target',
    defaultMessage: 'Target',
  },
  openLinkInNewTab: {
    id: 'Open in a new tab',
    defaultMessage: 'Open in a new tab',
  },
});

export function navrootFooterLinksSchema({ props, intl }) {
  return {
    title: intl.formatMessage(messages.item),
    addMessage: intl.formatMessage(messages.addLink),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'href'],
      },
    ],

    properties: {
      title: {
        title: intl.formatMessage(messages.title),
      },
      href: {
        title: intl.formatMessage(messages.Target),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: ['Title', 'Description', '@type'],
        allowExternals: true,
      },
    },
    required: ['title', 'href'],
  };
}
