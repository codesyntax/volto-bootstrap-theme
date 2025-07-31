import { navrootFooterLinksSchema } from '@codesyntax/volto-bootstrap-theme/components/Widgets/schema/navrootFooterLinksSchema';

import FeaturedContainerCardSchemaWidget from '@codesyntax/volto-bootstrap-theme/components/Widgets/FeaturedContainerCardSchemaWidget';
import SliderItemSchemaWidget from '@codesyntax/volto-bootstrap-theme/components/Widgets/SliderItemSchemaWidget';
import AccordionPanelSchemaWidget from '@codesyntax/volto-bootstrap-theme/components/Widgets/AccordionPanelSchemaWidget';

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
    sliderItems: SliderItemSchemaWidget,
    accordionPanels: AccordionPanelSchemaWidget,
  };

  return config;
}
