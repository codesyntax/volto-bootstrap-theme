import installComponents from './config/components';
import installBlocks from './config/blocks';

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

  return config;
};

export default applyConfig;
