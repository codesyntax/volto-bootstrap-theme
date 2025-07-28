import { composeSchema } from '@plone/volto/helpers';
import homeBand from '@plone/volto/icons/image-wide.svg';

import FeaturedBlockView from '../components/Blocks/Featured/View';
import FeaturedBlockSchema from '../components/Blocks/Featured/schema';
import FeaturedBlockVariationImageToTheSide from '../components/Blocks/Featured/VariationImageSide.jsx';
import FeaturedBlockVariationImageOverlay from '../components/Blocks/Featured/VariationImageOverlay.jsx';
import { schemaEnhancerImageToTheSide } from '../components/Blocks/Featured/schemaEnhancers.js';
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
        id: 'variation00',
        title: 'Overlay image',
        isDefault: true,
        template: FeaturedBlockVariationImageOverlay,
      },
      {
        id: 'variation01',
        title: 'Image to the side',
        isDefault: false,
        template: FeaturedBlockVariationImageToTheSide,
        schemaEnhancer: schemaEnhancerImageToTheSide,
      },
    ],
  };

  return config;
}
