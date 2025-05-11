import React from 'react';
import { compose } from 'redux';
import { withScrollToTarget } from '@eeacms/volto-tabs-block/hocs';
import { getVariation, isTabEmpty, getParentTabFromHash } from '@eeacms/volto-tabs-block/helpers';
import { DefaultView } from '@eeacms/volto-tabs-block/components/variations/default';
import config from '@plone/volto/registry';

const View = (props) => {
  const view = React.useRef(null);
  const { data = {}, uiContainer = '', location, history } = props;
  const metadata = props.metadata || props.properties;
  const variation = getVariation(data);
  const tabsData = data.data || {};
  const tabs = tabsData.blocks || {};
  const tabsList = (tabsData.blocks_layout?.items || []).filter((tab) => {
    return data.hideEmptyTabs ? !isTabEmpty(tabs[tab]) : true;
  });

  const activeVariation = config.blocks.blocksConfig['tabs_block'].variations.find(
    (v) => v.id === variation
  );
  const TabsView = activeVariation?.view || DefaultView;

  const query = new URLSearchParams(location.search);
  const initialTabId = query.get('activeTab') || tabsList[0];
  const [activeTabId, setActiveTabId] = React.useState(initialTabId);

  const updateQueryParam = (key, value) => {
    if (query.get(key) !== value) {
      query.set(key, value);
      history.push({ pathname: location.pathname, search: query.toString() });
    }
  };

  React.useEffect(() => {
    if (!tabsList.includes(activeTabId)) {
      setActiveTabId(tabsList[0] || '');
    }
    const urlHash = props.location.hash.substring(1) || '';
    const parentTabId = getParentTabFromHash(data, urlHash);
    if (tabsList.includes(parentTabId)) {
      setActiveTabId(parentTabId);
      updateQueryParam('activeTab', parentTabId);
    }
  }, [tabsList, data, props.location.hash]);

  return (
    <div className="container" id={props.id} ref={view}>
      <ul className="nav nav-tabs" role="tablist">
        {tabsList.map((tab) => (
          <li className="nav-item" role="presentation" key={tab}>
            <button
              className={`nav-link ${activeTabId === tab ? 'active' : ''}`}
              data-bs-toggle="tab"
              data-bs-target={`#nav-${tab}`}
              type="button"
              role="tab"
              aria-controls={`nav-${tab}`}
              aria-selected={activeTabId === tab}
              onClick={() => {
                setActiveTabId(tab);
                updateQueryParam('activeTab', tab);
              }}
            >
              {tabs[tab]?.title || 'Tab'}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabsList.map((tab) => (
          activeTabId === tab && (
            <div
              key={tab}
              className="tab-pane fade show active"
              id={`nav-${tab}`}
              role="tabpanel"
              aria-labelledby={`nav-${tab}-tab`}
            >
              <TabsView
                {...props}
                tabIndex={tabsList.indexOf(tab)}
                activeTab={activeTabId}
                activeTabIndex={tabsList.indexOf(activeTabId)}
                node={view}
                metadata={metadata}
                parentRef={view}
                tabs={tabs}
                tabData={tabs[tab] || {}}
                tabsData={tabsData}
                tabsList={tabsList}
                uiContainer={uiContainer}
              />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default compose(withScrollToTarget)(View);