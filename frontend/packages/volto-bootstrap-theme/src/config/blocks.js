import { composeSchema } from '@plone/volto/helpers';
import homeBand from '@plone/volto/icons/image-wide.svg';

import FeaturedBlockView from '../components/Blocks/Featured/View';
import FeaturedBlockSchema from '../components/Blocks/Featured/schema';
import FeaturedBlockVariationImageToTheSide from '../components/Blocks/Featured/VariationImageSide';
import FeaturedBlockVariationImageOverlay from '../components/Blocks/Featured/VariationImageOverlay';
import { schemaEnhancerImageToTheSide } from '../components/Blocks/Featured/schemaEnhancers';

import HorizontalRuleView from '../components/Blocks/HR/View';
import SpacerView from '../components/Blocks/Spacer/View';

import GridTemplateVariation from '../components/Blocks/Listing/GridTemplate';
import { schemaEnhancerGridTemplate } from '../components/Blocks/Listing/schemaEnhancer';

import FeaturedContainerView from '../components/Blocks/FeaturedContainer/View';
import { FeaturedContainerSchema } from '../components/Blocks/FeaturedContainer/schema';
import FeaturedContainerVariationCards from '../components/Blocks/FeaturedContainer/VariationCards';

import SliderView from '../components/Blocks/Slider/View';
import { SliderSchema } from '../components/Blocks/Slider/schema';
import SliderDefaultVariation from '../components/Blocks/Slider/VariationSlider';

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

  config.blocks.blocksConfig._vbtHR = {
    id: '_vbtHR',
    title: 'Horizontal Rule',
    view: HorizontalRuleView,
    //edit: BlockEdit,
    //blockSchema: FeaturedBlockSchema,
    icon: homeBand,
    sidebarTab: 1,
    group: 'common',
  };

  config.blocks.blocksConfig._vbtSpacer = {
    id: '_vbtSpacer',
    title: 'Spacer',
    view: SpacerView,
    //edit: BlockEdit,
    //blockSchema: FeaturedBlockSchema,
    icon: homeBand,
    sidebarTab: 1,
    group: 'common',
  };

  config.blocks.blocksConfig.listing.variations = {
    id: 'grid',
    title: 'Grid',
    isDefault: true,
    template: GridTemplateVariation,
    schemaEnhancer: schemaEnhancerGridTemplate,
  };

  config.blocks.blocksConfig._vbtFeaturedContainer = {
    id: '_vbtFeaturedContainer',
    title: 'Cards',
    view: FeaturedContainerView,
    //edit: BlockEdit,
    blockSchema: FeaturedContainerSchema,
    icon: homeBand,
    sidebarTab: 1,
    group: 'common',
    variations: [
      {
        id: 'variation01',
        title: 'Cards',
        isDefault: true,
        template: FeaturedContainerVariationCards,
      },
    ],
  };

  config.blocks.blocksConfig._vbtSlider = {
    id: '_vbtSlider',
    title: 'Slider',
    view: SliderView,
    //edit: BlockEdit,
    blockSchema: SliderSchema,
    icon: homeBand,
    sidebarTab: 1,
    group: 'common',
    variations: [
      {
        id: 'variation01',
        title: 'Slider',
        isDefault: true,
        template: SliderDefaultVariation,
      },
    ],
  };

  return config;
}
