import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
const BlockView = (props) => {
  const { data, className, style, variation, editable = false } = props;
  // get the selected variation template, and use it to render the block
  const BodyTemplate = variation.template;
  return (
    <div className={className} style={style}>
      <BodyTemplate data={data} isEditMode={editable} {...props} />
    </div>
  );
};
export default withBlockExtensions(BlockView);
