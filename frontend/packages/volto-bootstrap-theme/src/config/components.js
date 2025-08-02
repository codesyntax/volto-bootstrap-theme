import { Container } from '@plone/components';
import DefaultCardBodyContent from '../components/CardBody/DefaultCardBody';
import NewsItemCardBody from '../components/CardBody/NewsItemCardBody';
import EventCardBody from '../components/CardBody/EventCardBody';

export default function install(config) {
  // this is a <div class="container"> ... </div> item
  config.registerComponent({
    name: 'Container',
    component: Container,
  });

  // Custom components for Listing Block's GridTemplate
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
