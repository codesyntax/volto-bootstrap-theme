import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { compose } from 'redux';
import noop from 'lodash/noop';
import { RenderBlocks } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { withScrollToTarget } from '@eeacms/volto-tabs-block/hocs';
import { getVariation } from '@eeacms/volto-tabs-block/helpers';

const View = (props) => {
  const {
    data = {},
    tabsList = [],
    tabs = {},
    activeTabIndex = 0,
    setActiveTab = noop,
    width,
    id,
  } = props;

  const variation = getVariation(data);
  const accordionConfig =
    config.blocks.blocksConfig.TABS_BLOCK?.variations?.find((v) => v.id === variation);

  const [mounted, setMounted] = useState(false);
  const [initialWidth, setInitialWidth] = useState(800);
  const [isAccordion, setIsAccordion] = useState(width < initialWidth);
  const tabsContainer = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsAccordion(width <= initialWidth);
  }, [width, initialWidth]);

  useLayoutEffect(() => {
    if (document.activeElement.role !== 'tab') return;
    const activeTab = document.getElementById(id)?.querySelector('.tab-pane.active');
    if (activeTab) {
      activeTab.setAttribute('tabindex', '0');
      activeTab.focus();
    }
  }, [activeTabIndex, id]);

  return (
    <div className="tab-accordion-container" role="presentation" tabIndex={-1}>
      {!isAccordion ? (
        <ul className="nav nav-tabs" id="tabsMenu" role="tablist">
          {tabsList.map((tab, index) => (
            <li className="nav-item" key={tab} role="presentation">
              <button
                className={`nav-link ${activeTabIndex === index ? 'active' : ''}`}
                id={`tab-${tab}`}
                type="button"
                role="tab"
                onClick={() => setActiveTab(index)}
              >
                {tabs[tab]?.title || `Tab ${index + 1}`}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="accordion" id="tabsAccordion">
          {tabsList.map((tab, index) => (
            <div className="accordion-item" key={tab}>
              <h2 className="accordion-header" id={`heading-${tab}`}>
                <button
                  className={`accordion-button ${activeTabIndex === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => setActiveTab(index)}
                >
                  {tabs[tab]?.title || `Tab ${index + 1}`}
                </button>
              </h2>
              {activeTabIndex === index && (
                <div className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    <RenderBlocks {...props} content={tabs[tab]} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="tab-content" id="tabsContent">
        {tabsList.map((tab, index) => (
          activeTabIndex === index && (
            <div
              key={tab}
              id={`content-${tab}`}
              className="tab-pane fade show active"
              role="tabpanel"
            >
              <RenderBlocks {...props} content={tabs[tab]} />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default compose(withScrollToTarget)(View);
