export default function install(config) {
  config.settings.apiExpanders = [
    ...config.settings.apiExpanders,
    {
      match: '',
      GET_CONTENT: ['inherit'],
      querystring: (config, querystring) => {
        if (querystring['expand.inherit.behaviors']) {
          return {
            'expand.inherit.behaviors': querystring[
              'expand.inherit.behaviors'
            ].concat(
              ',',
              'voltobootstraptheme.navroot_footer_links',
              ',',
              'voltobootstraptheme.footer',
            ),
          };
        } else {
          return {
            'expand.inherit.behaviors':
              'voltobootstraptheme.navroot_footer_links,voltobootstraptheme.footer',
          };
        }
      },
    },
  ];
  return config;
}
