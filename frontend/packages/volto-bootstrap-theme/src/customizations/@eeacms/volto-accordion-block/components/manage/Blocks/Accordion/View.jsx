import React from 'react';
import { getPanels, accordionBlockHasValue, Icon } from '@eeacms/volto-accordion-block/components/manage/Blocks/Accordion/util';
import { withBlockExtensions } from '@plone/volto/helpers';
import { useLocation } from 'react-router-dom';
import { RenderBlocks } from '@plone/volto/components';
import config from '@plone/volto/registry';
import '@eeacms/volto-accordion-block/components/manage/Blocks/Accordion/editor.less';

const View = (props) => {
  const { data, className } = props;
  const location = useLocation();
  const panels = getPanels(data.data);
  const metadata = props.metadata || props.properties;

  // const accordionConfig = config.blocks.blocksConfig.accordion;
  // const iconOnRight = data.right_arrows;
  // const { titleIcons } = accordionConfig;
  // const iconPosition = iconOnRight ? 'rightPosition' : 'leftPosition';

  return (
    <div className={`accordion bootstrap-container ${className}`} id="accordionExample">
      {data.headline && <h2 className="accordion-header">{data.headline}</h2>}

      {panels.map(([id, panel]) =>
        accordionBlockHasValue(panel) ? (
          <div className="accordion-item" key={id}>
            <h2 className="accordion-header" id={`heading${id}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${id}`}
                aria-expanded="false"
                aria-controls={`collapse${id}`}
              >
                {/* <Icon
                  options={titleIcons}
                  name={titleIcons.closed[iconPosition]}
                /> */}
                <span>{panel?.title}</span>
              </button>
            </h2>
            <div
              id={`collapse${id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <RenderBlocks
                  {...props}
                  location={location}
                  metadata={metadata}
                  content={panel}
                />
              </div>
            </div>
          </div>
        ) : null,
      )}
    </div>
  );
};

export default withBlockExtensions(View);
