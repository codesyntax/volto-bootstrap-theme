import { composeSchema } from '@plone/volto/helpers';
import { buttonNewProperties } from './components/Blocks/Button/button_type_schema';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['en', 'es', 'eu'],
    defaultLanguage: 'en',
  };




  console.log(config.blocks.blocksConfig.__button)
  config.blocks.blocksConfig.__button = {
    ...config.blocks.blocksConfig.__button,
    schemaEnhancer: composeSchema(
      ({ schema }) => buttonNewProperties(schema)

    ),
  };

  return config;
};

export default applyConfig;
