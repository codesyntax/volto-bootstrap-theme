import { defineMessages } from 'react-intl';

import {
    DefaultEdit,
    DefaultView,
    layoutSchema,
    TabsEdit,
    TabsView,
    blockSchema,
} from '@eeacms/volto-tabs-block/components';

import { TABS_BLOCK } from '@eeacms/volto-tabs-block/constants';
import { TabsWidget } from '@eeacms/volto-tabs-block/widgets';

import tabsSVG from '@eeacms/volto-tabs-block//icons/tabs.svg';

defineMessages({
    default: {
        id: 'Default',
        defaultMessage: 'Default',
    },
});

const applyConfig = (config) => {
    config.blocks.blocksConfig[TABS_BLOCK] = {
        id: TABS_BLOCK,
        title: 'Tabs',
        icon: tabsSVG,
        group: 'common',
        edit: TabsEdit,
        view: TabsView,
        restricted: false,
        mostUsed: false,
        sidebarTab: 1,
        security: {
            addPermission: [],
            view: [],
        },
        blockHasOwnFocusManagement: true,
        blockSchema: blockSchema,
        schema: layoutSchema(config),
        variations: [
            {
                id: 'default',
                title: 'Default',
                isDefault: true,
                edit: DefaultEdit,
                view: DefaultView,
                schemaEnhancer: DefaultEdit.schemaEnhancer,
            }

        ],
        getBlocks: (data) => {
            const { blocks = {}, blocks_layout = {} } = data?.data || {};
            if (blocks_layout?.items?.length) {
                return {
                    blocks: blocks_layout.items.map((block, index) => ({
                        title: blocks[block]['title'] || `Tab ${index + 1}`,
                        id: block,
                        parentId: data.parentId,
                        type: TABS_BLOCK,
                    })),
                };
            }
            return {};
        },
    };

    config.widgets.type.tabs = TabsWidget;

    return config;
};

export default applyConfig;
