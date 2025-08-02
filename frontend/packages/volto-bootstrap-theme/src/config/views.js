import DefaultView from '@codesyntax/volto-bootstrap-theme/components/Views/DefaultView';

export default function install(config) {
  config.views.defaultView = DefaultView;

  return config;
}
