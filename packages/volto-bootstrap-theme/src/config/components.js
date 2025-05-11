import { Container } from '@plone/components';
import MainContainer from '@codesyntax/volto-bootstrap-theme/components/base/MainContainer';

export default function install(config) {
  // Register a custom Container component from @plone/components
  config.registerComponent({
    name: 'Container',
    component: Container,
  });

  config.registerComponent({
    name: 'MainContainer',
    component: MainContainer,
  });

  return config;
}
