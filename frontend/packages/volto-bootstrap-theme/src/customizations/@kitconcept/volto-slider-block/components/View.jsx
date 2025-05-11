import React, { useEffect, useState } from 'react';
import { Message } from 'semantic-ui-react';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import Body from '@kitconcept/volto-slider-block/components/Body';
import { withBlockExtensions } from '@plone/volto/helpers';
import teaserTemplate from '@kitconcept/volto-slider-block//icons/teaser-template.svg';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
});

const SliderView = (props) => {
  const {
    className,
    data,
    isEditMode = false,
  } = props;
  const intl = useIntl();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (data.autoplayEnabled) {
      const interval = setInterval(() => {
        setSelectedIndex((prevIndex) =>
          prevIndex + 1 < data.slides.length ? prevIndex + 1 : 0,
        );
      }, data.autoplayDelay || 3000);
      return () => clearInterval(interval);
    }
  }, [data.autoplayEnabled, data.autoplayDelay, data.slides]);

  return (
    <>
      <div className={cx('carousel slide', 'bootstrap-container', className)} id="carouselExampleIndicators" data-bs-ride="carousel">
        {data.slides?.length === 0 && isEditMode && (
          <Message>
            <div className="teaser-item default">
              <img src={teaserTemplate} alt="" />
              <p>{intl.formatMessage(messages.PleaseChooseContent)}</p>
            </div>
          </Message>
        )}

        {data.slides?.length > 0 && (
          <>
            {/* Indicadores */}
            <ol className="carousel-indicators">
              {data.slides.map((_, index) => (
                <li
                  key={index}
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === selectedIndex ? 'active' : ''}
                  onClick={() => setSelectedIndex(index)}
                ></li>
              ))}
            </ol>

            {/* Slides */}
            <div className="carousel-inner">
              {data.slides.map((item, index) => {
                const imageId = item.href?.[0]?.['@id'];
                const imageDowload = item.href?.[0]?.image_scales?.image?.[0]?.download;
                const imageUrl = imageId + '/' + imageDowload;
                return (
                  <div key={item['@id']} className={`carousel-item ${index === selectedIndex ? 'active' : ''}`}>
                    <img src={imageUrl} className="d-block w-100" alt={item.title || 'Slide'} />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controles de navegación */}
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev" onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : data.slides.length - 1))}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next" onClick={() => setSelectedIndex((prev) => (prev < data.slides.length - 1 ? prev + 1 : 0))}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default withBlockExtensions(SliderView);
