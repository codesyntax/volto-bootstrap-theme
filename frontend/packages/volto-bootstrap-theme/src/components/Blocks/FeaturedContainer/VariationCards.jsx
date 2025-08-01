import React from 'react';

import config from '@plone/volto/registry';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl';

import Card from '@codesyntax/volto-bootstrap-theme/components/Card/Card';

const BlockView = (props) => {
  const { data, isEditMode } = props;
  const cards = data.featuredContainerCards?.items || [];

  const PreviewImageComponent = config.getComponent('PreviewImage').component;

  return (
    <div className="row my-5">
      {cards && cards.length > 0 ? (
        cards.map((item, key) => {
          return (
            <div className={cx(data.itemsPerRow, 'mb-5')} key={key}>
              <Card href={!isEditMode ? item['@id'] : null}>
                {item?.preview_image && item.preview_image.length > 0 && (
                  <Card.Image
                    item={item.preview_image[0]}
                    imageComponent={PreviewImageComponent}
                  />
                )}
                <Card.Body a11yLabelId={props.a11yLabelId}>
                  {item?.href ? (
                    <UniversalLink
                      href={item.href}
                      className="h5 card-title stretched-link"
                    >
                      {item.title}
                    </UniversalLink>
                  ) : (
                    <p className="h5 card-title mb-3">{item.title}</p>
                  )}
                  {item.description && (
                    <p className="card-text">{item.description}</p>
                  )}
                </Card.Body>
              </Card>
            </div>
          );
        })
      ) : (
        <p>
          <FormattedMessage
            id="addYourCardsOnTheRightSide"
            defaultMessage="Add your cards on the right side"
          />
        </p>
      )}
    </div>
  );
};

export default BlockView;
