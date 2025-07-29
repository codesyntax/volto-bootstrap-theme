import { navrootFooterLinksSchema } from '@codesyntax/volto-bootstrap-theme/components/Widgets/schema/navrootFooterLinksSchema';

import FeaturedContainerCardSchemaWidget from '@codesyntax/volto-bootstrap-theme/components/Widgets/FeaturedContainerCardSchemaWidget';

export default function install(config) {
  // The backend has defined a field with a widgetOptions of {schemaName: 'navrootFooterLinks'}
  // With this registration we link the backend requirement and the frontend requirement
  config.registerUtility({
    name: 'navrootFooterLinks',
    type: 'schema',
    method: navrootFooterLinksSchema,
  });

  config.widgets.id = {
    ...config.widgets.id,
    featuredContainerCards: FeaturedContainerCardSchemaWidget,
  };

  return config;
}
