import { composeSchema } from '@plone/volto/helpers';
import homeBand from '@plone/volto/icons/image-wide.svg';

import FeaturedBlockView from '../components/Blocks/Featured/View';
import FeaturedBlockSchema from '../components/Blocks/Featured/schema';
import FeaturedBlockViewVariationImageLeft from '../components/Blocks/Featured/VariationImageLeftView.jsx';
import FeaturedBlockViewVariationImageRight from '../components/Blocks/Featured/VariationImageRightView.jsx';

export default function install(config) {
  // disable gridBlock and teaser
  config.blocks.blocksConfig.gridBlock = {};
  config.blocks.blocksConfig.teaser = {};

  config.blocks.blocksConfig._vbtFeatured = {
    id: '_vbtFeatured',
    title: 'Featured',
    view: FeaturedBlockView,
    //edit: BlockEdit,
    blockSchema: FeaturedBlockSchema,
    icon: homeBand,
    sidebarTab: 1,
    group: 'common',
    //dataAdapter: FeaturedBlockDataAdapter,
    variations: [
      {
        id: 'variation01',
        title: 'Image on the left',
        isDefault: true,
        template: FeaturedBlockViewVariationImageLeft,
      },
      {
        id: 'variation02',
        title: 'Image on the right',
        isDefault: false,
        template: FeaturedBlockViewVariationImageRight,
      },
    ],
  };

  return config;
}
