import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
const BlockView = (props) => {
  const { id, data } = props;

  const accordionId = `accordion-uid-${id}`;
  console.log('data', data);
  const panels = data.accordionPanels?.items || [];

  return (
    <div className="my-5 accordion accordion-flush" id={accordionId}>
      {panels && panels.length > 0 ? (
        <div className="content">
          {panels.map((item, key) => {
            return (
              <div className="accordion-item" key={`${accordionId}-${key}`}>
                <div className="accordion-header h3">
                  <button
                    class="accordion-button collapsed"
                    aria-controls={`#${accordionId}-${key}`}
                    aria-expanded="false"
                    type="button"
                    data-bs-target={`#${accordionId}-${key}`}
                    data-bs-toggle="collapse"
                  >
                    {item.title}
                  </button>
                </div>

                <div
                  class="accordion-collapse collapse"
                  id={`${accordionId}-${key}`}
                  data-bs-parent={`#${accordionId}`}
                >
                  <div
                    class="accordion-body"
                    dangerouslySetInnerHTML={{ __html: item.text?.data }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Add pannels on the right</p>
      )}
    </div>
  );
};
export default withBlockExtensions(BlockView);
