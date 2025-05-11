import { composeSchema } from '@plone/volto/helpers';
import { buttonNewProperties } from '@codesyntax/volto-bootstrap-theme/components/Blocks/Button/button_type_schema';

export default function install(config) {
  //console.log(config.blocks.blocksConfig.__button);
  config.blocks.blocksConfig.__button = {
    ...config.blocks.blocksConfig.__button,
    schemaEnhancer: composeSchema(({ schema }) => buttonNewProperties(schema)),
  };

  return config;
}
