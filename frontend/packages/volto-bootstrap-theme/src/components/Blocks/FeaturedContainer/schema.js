/*
 * Taken from: https://github.dev/eea/volto-clms-theme
 */

import messages from './messages';
import { v4 as uuid } from 'uuid';

const FeaturedContainerCardSchema = ({ intl }) => {
  return {
    title: 'Card',
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
        placeholder: 'Card title here',
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
    },
    required: [],
  };
};

const FeaturedContainerSchema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.featuredContainerBlockTitle),

    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['href', 'title', 'itemsPerRow', 'featuredContainerCards'],
      },
    ],

    properties: {
      href: {
        title: intl.formatMessage(messages.URL),
        widget: 'url',
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
      itemsPerRow: {
        title: intl.formatMessage(messages.itemsPerRow),
        choices: [
          ['col-md-6', 2],
          ['col-md-4', 3],
          ['col-md-3', 4],
        ],
        default: 'col-md-4',
      },
      featuredContainerCards: {
        title: intl.formatMessage(messages.cards),
        type: 'object_list',
        default: [],
      },
    },
    required: [],
  };
};
export { FeaturedContainerSchema, FeaturedContainerCardSchema };
