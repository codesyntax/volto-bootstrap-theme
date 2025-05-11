import { composeSchema } from '@plone/volto/helpers';
import { buttonNewProperties } from '@codesyntax/volto-bootstrap-theme/components/Blocks/Button/button_type_schema';

import TextBlockView from '@codesyntax/volto-bootstrap-theme/components/Blocks/Text/View.jsx';
export default function install(config) {
  //console.log(config.blocks.blocksConfig.__button);
  config.blocks.blocksConfig.__button = {
    ...config.blocks.blocksConfig.__button,
    schemaEnhancer: composeSchema(({ schema }) => buttonNewProperties(schema)),
  };

  config.blocks.blocksConfig.slate.view = TextBlockView;

  return config;
}
