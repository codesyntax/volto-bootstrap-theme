import { Container } from '@plone/components';
import DefaultCardBodyContent from '../components/CardBody/DefaultCardBody';
import NewsItemCardBody from '../components/CardBody/NewsItemCardBody';
import EventCardBody from '../components/CardBody/EventCardBody';

export default function install(config) {
  // Register a custom Container component from @plone/components
  config.registerComponent({
    name: 'Container',
    component: Container,
  });

  config.registerComponent({
    name: 'CardBodyContent',
    component: DefaultCardBodyContent,
  });

  config.registerComponent({
    name: 'CardBodyContent',
    component: NewsItemCardBody,
    dependencies: ['News Item'],
  });

  config.registerComponent({
    name: 'CardBodyContent',
    component: EventCardBody,
    dependencies: ['Event'],
  });

  return config;
}
