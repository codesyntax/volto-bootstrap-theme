import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import React from 'react';

const FeaturedBlockView = (props) => {
  const { data, variation, editable = false } = props;
  const BodyTemplate = variation.template;
  return <BodyTemplate data={data} isEditMode={editable} {...props} />;
};
// the withBlockExtensions call will make variations available out of the box
export default withBlockExtensions(FeaturedBlockView);
