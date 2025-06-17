// src/index.js

import installComponents from './config/components';
import installBlocks from './config/blocks';
import installWidgets from './config/widgets';
import installApiExpanders from './config/apiExpanders';
import installViews from './config/views';
import installComponentsClassName from './config/componentsClassname';


const applyConfig = (config) => {


  config.settings.isMultilingual = false;
  config.settings.supportedLanguages = ['eu', 'es', 'en'];
  config.settings.defaultLanguage = 'eu';
  config.settings.navDepth = 2;

  installComponentsClassName(config);

  installComponents(config);
  installBlocks(config);
  installWidgets(config);
  installApiExpanders(config);
  installViews(config);

  return config;
};

export default applyConfig;
