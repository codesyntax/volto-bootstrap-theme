import { Container } from '@plone/components';

export default function install(config) {
  // Register a custom Container component from @plone/components
  config.registerComponent({
    name: 'Container',
    component: Container,
  });

  return config;
}
