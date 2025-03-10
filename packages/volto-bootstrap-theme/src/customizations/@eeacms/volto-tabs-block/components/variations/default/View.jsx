import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import cx from 'classnames';
import { RenderBlocks } from '@plone/volto/components';
import { withScrollToTarget } from '@eeacms/volto-tabs-block/hocs';
import { SimpleMarkdown, getMenuPosition } from '@eeacms/volto-tabs-block/utils';
import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers';
import '@eeacms/volto-tabs-block/less/menu.less';
import noop from 'lodash/noop';

export const AssetTab = ({ props, tabIndex, tabTitle }) => {
  const {
    icon,
    image,
    assetType,
    assetPosition,
    iconSize,
    imageSize,
    hideTitle,
  } = props;
  const imageObject = image?.[0];
  return (
    <div
      className={cx('asset-position', {
        'asset-top': assetPosition === 'top',
        'asset-left': assetPosition === 'left',
        'asset-right': assetPosition === 'right',
      })}
    >
      {assetType === 'icon' && icon && (
        <i
          className={cx('tab-icon', icon, iconSize, 'aligned')}
          {...{
            ...(hideTitle && {
              role: 'img',
              'aria-hidden': 'false',
              'aria-label': tabTitle,
            }),
          }}
        />
      )}

      {assetType === 'image' && imageObject && (
        <img
          src={
            isInternalURL(imageObject['@id'])
              ? `${flattenToAppURL(imageObject['@id'])}/${imageObject?.image_scales?.image?.[0].scales?.[imageSize]?.download || imageObject?.image_scales?.image?.[0].download
              }`
              : imageObject['@id']
          }
          className={cx('img-fluid', imageSize, 'aligned')}
          alt={hideTitle ? tabTitle : ''}
        />
      )}

      {!hideTitle && (
        <div>
          <span className="menu-item-count">{tabIndex}</span>
          <span className="menu-item-text">{tabTitle}</span>
        </div>
      )}
    </div>
  );
};

const MenuItem = (props) => {
  const {
    activeTab = null,
    tabs = {},
    setActiveTab = noop,
    tabsTitle,
    tabsDescription,
    blockId,
  } = props;

  const { tab, index } = props;
  const tabIndex = index + 1;
  const [tabChanged, setTabChanged] = useState(false);
  const defaultTitle = `Tab ${tabIndex}`;
  const tabSettings = tabs[tab];
  const { title, assetType } = tabSettings;
  const tabTitle = title || defaultTitle;

  useEffect(() => {
    if (
      tabChanged === true &&
      document?.getElementById(blockId)?.querySelector('#tab-pane-' + tab)
    ) {
      document
        .getElementById(blockId)
        .querySelector('#tab-pane-' + tab)
        .focus();
      setTabChanged(false);
    }
  }, [tabChanged, tab, blockId]);

  return (
    <React.Fragment>
      {index === 0 && (tabsTitle || tabsDescription) && (
        <div className="menu-title">
          <SimpleMarkdown md={tabsTitle} defaultTag="##" className="title" />
          <SimpleMarkdown md={tabsDescription} className="description" />
        </div>
      )}
      <div
        className={cx('nav-item', { active: tab === activeTab })}
        onClick={() => {
          if (activeTab !== tab) {
            setActiveTab(tab);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (activeTab !== tab) {
              setActiveTab(tab);
            }
            setTabChanged(true);
          }
        }}
        role="tab"
        aria-selected={tab === activeTab}
        tabIndex={0}
      >
        <>
          {assetType ? (
            <AssetTab
              props={tabSettings}
              tabTitle={tabTitle}
              tabIndex={tabIndex}
            />
          ) : (
            <>
              <span className="menu-item-count">{tabIndex}</span>
              <span className="menu-item-text">{tabTitle}</span>
            </>
          )}
        </>
      </div>
    </React.Fragment>
  );
};

const View = (props) => {
  const {
    metadata = {},
    data = {},
    tabsList = [],
    tabs = {},
    activeTabIndex = 0,
  } = props;
  const [menuPosition, setMenuPosition] = React.useState({});
  React.useEffect(() => {
    if (Object.keys(menuPosition).length === 0) {
      setMenuPosition(getMenuPosition(data));
    }
  }, [data, menuPosition]);
  const panes = tabsList.map((tab, index) => (
    <React.Fragment key={tab}>
      {activeTabIndex === index && (
        <div className="tab-pane active" id={`tab-pane-${tab}`}>
          <div
            aria-labelledby={`nav-tab-${tab}`}
            role="tabpanel"
            aria-selected={tab === activeTabIndex}
          >
            <RenderBlocks {...props} metadata={metadata} content={tabs[tab]} />
          </div>
        </div>
      )}
    </React.Fragment>
  ));


  return (
    <div className="container">
      <div className="tabs-content">
        <div className="tab-content">{panes}</div>
      </div>
    </div>
  );
};

export default compose(withScrollToTarget)(View);
