import installComponents from './config/components';
import installBlocks from './config/blocks';
import installWidgets from './config/widgets';
import installApiExpanders from './config/apiExpanders';
import installViews from './config/views';
import installBlockStyleClassNameExtenders from './config/blockstyles';

const applyConfig = (config) => {
  // Default Settings
  config.settings.isMultilingual = false;
  config.settings.supportedLanguages = ['eu', 'es', 'en'];
  config.settings.defaultLanguage = 'eu';
  config.settings.navDepth = 2;

  // Install components in the componentRegistry
  installComponents(config);
  // Install block configuration
  installBlocks(config);
  // Install custom widgets
  installWidgets(config);
  // Install apiExpanders
  installApiExpanders(config);
  // Install views
  installViews(config);
  // Install styleClassNameExtenders
  installBlockStyleClassNameExtenders(config);

  return config;
};

export default applyConfig;
