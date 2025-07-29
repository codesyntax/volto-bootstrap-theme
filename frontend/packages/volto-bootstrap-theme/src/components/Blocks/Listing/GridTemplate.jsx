/*
 * Taken from https://github.com/kitconcept/volto-light-theme/blob/main/frontend/packages/volto-light-theme/src/components/Blocks/Listing/GridTemplate.jsx
 *
 */
import React from 'react';

import PropTypes from 'prop-types';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import config from '@plone/volto/registry';
import Card from '@codesyntax/volto-bootstrap-theme/components/Card/Card';
import DefaultCardBodyContent from '@codesyntax/volto-bootstrap-theme/components/CardBody/DefaultCardBody';
import cx from 'classnames';

const GridTemplate = (props) => {
  const {
    items,
    linkText,
    url,
    isEditMode,
    headlineTag: HeadlineTag,
    itemsPerRow,
    headline,
  } = props;

  const PreviewImageComponent = config.getComponent('PreviewImage').component;

  return (
    <>
      <div className="my-5">
        <HeadlineTag>{headline}</HeadlineTag>
        <div className="row">
          {items.map((item) => {
            const ItemBodyTemplate = (props) => {
              const CustomItemBodyTemplate = config.getComponent({
                name: 'ListingBlockGridTemplateCustomItemBodyTemplate',
                dependencies: [item['@type']],
              }).component;
              const Summary =
                config.getComponent({
                  name: 'CardBodyContent',
                  dependencies: [item['@type']],
                }).component || DefaultCardBodyContent;

              return CustomItemBodyTemplate ? (
                <CustomItemBodyTemplate item={item} />
              ) : (
                <>
                  {item.image_field !== '' && (
                    <Card.Image
                      item={item}
                      imageComponent={PreviewImageComponent}
                    />
                  )}
                  <Card.Body a11yLabelId={props.a11yLabelId}>
                    <Summary item={item} HeadingTag="h2" />
                  </Card.Body>
                </>
              );
            };
            return (
              <div className={cx(itemsPerRow, 'mb-5')} key={item['@id']}>
                <Card href={!isEditMode ? item['@id'] : null}>
                  <ItemBodyTemplate item={item} />
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {url && url[0] && (
        <div className="d-flex justify-content-end">
          <UniversalLink item={url[0]}>{linkText}</UniversalLink>
        </div>
      )}
    </>
  );
};

GridTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};

export default GridTemplate;
