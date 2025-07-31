import React from 'react';

import config from '@plone/volto/registry';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import * as bootstrap from 'bootstrap';

const BlockView = (props) => {
  const { data } = props;
  const cards = data.sliderItems?.items || [];

  const PreviewImageComponent = config.getComponent('PreviewImage').component;

  const carouselUUID = `carousel-uuid-${props.id}`;

  return (
    <div className="carousel slide my-5" id={carouselUUID}>
      {cards && cards.length > 0 ? (
        <>
          <div className="carousel-indicators">
            {cards.map((item, key) => {
              return (
                <button
                  key={`button-${key}`}
                  className="active"
                  aria-current={key === 0 && 'true'}
                  aria-label={`Slide ${key}`}
                  type="button"
                  data-bs-slide-to={key}
                  data-bs-target={`#${carouselUUID}`}
                ></button>
              );
            })}
          </div>
          <div className="carousel-inner">
            {cards.map((item, key) => {
              return (
                <div
                  key={item['@id']}
                  className={
                    key === 0 ? 'carousel-item active' : 'carousel-item'
                  }
                >
                  {item.preview_image && item.preview_image.length > 0 && (
                    <PreviewImageComponent
                      item={item.preview_image[0]}
                      sizes="(min-width: 1400px) 1400px, 100vw"
                      alt={item.title}
                      title={item.title}
                    />
                  )}
                  <div className="carousel-caption d-none d-md-block">
                    <p className="h5">{item.title}</p>
                    <p>{item.description}</p>
                    {item.href && (
                      <UniversalLink href={item.href}>
                        {item.linkText}
                      </UniversalLink>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-slide="prev"
            data-bs-target={`#${carouselUUID}`}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-slide="next"
            data-bs-target={`#${carouselUUID}`}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      ) : (
        <p>Add your carousel items on the right side</p>
      )}
    </div>
  );
};

export default BlockView;
