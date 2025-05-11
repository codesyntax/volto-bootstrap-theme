import { navrootFooterLinksSchema } from '@codesyntax/volto-bootstrap-theme/components/Widgets/schema/navrootFooterLinksSchema';

export default function install(config) {
  config.registerUtility({
    name: 'navrootFooterLinks',
    type: 'schema',
    method: navrootFooterLinksSchema,
  });

  return config;
}
