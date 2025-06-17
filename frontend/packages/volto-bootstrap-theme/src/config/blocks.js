// packages/volto-bootstrap-theme/src/config/blocks.js
import { composeSchema } from '@plone/volto/helpers';
import { buttonNewProperties } from '@codesyntax/volto-bootstrap-theme/components/Blocks/Button/button_type_schema';
import TextBlockView from '@codesyntax/volto-bootstrap-theme/components/Blocks/Text/View.jsx';
import AccordionView from '@eeacms/volto-accordion-block/components/manage/Blocks/Accordion/View';

export default function install(config) {
  config.blocks.blocksConfig.__button = {
    ...config.blocks.blocksConfig.__button,
    schemaEnhancer: composeSchema(({ schema }) => buttonNewProperties(schema)),
  };

  config.blocks.blocksConfig.slate.view = TextBlockView;

  if (config.blocks.blocksConfig.accordion) {
    config.blocks.blocksConfig.accordion = {
      ...config.blocks.blocksConfig.accordion,
      view: AccordionView,
    };
  }

  return config;
}
