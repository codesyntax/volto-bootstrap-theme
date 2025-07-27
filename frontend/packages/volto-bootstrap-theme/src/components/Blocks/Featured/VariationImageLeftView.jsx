import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import config from '@plone/volto/registry';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

const BlockView = (props) => {
  const { data, isEditMode } = props;
  let Image = config.getComponent('Image').component;

  console.log('isEditMode', isEditMode);

  return (
    <div className="row my-5">
      <div className="col-md-6">
        {data.image && data.image.length > 0 && (
          <Image
            item={data.image[0]}
            alt={data.title}
            sizes="50vw"
            responsive={true}
          />
        )}
      </div>
      <div className="col-md-6">
        <h3>{data.title}</h3>

        {isEditMode ? (
          <DetachedTextBlockEditor {...props} />
        ) : (
          <TextBlockView {...props} />
        )}

        {data.url && (
          <UniversalLink to={data.url} className="btn btn-primary">
            {data.linkText}
          </UniversalLink>
        )}
      </div>
    </div>
  );
};
export default withBlockExtensions(BlockView);
