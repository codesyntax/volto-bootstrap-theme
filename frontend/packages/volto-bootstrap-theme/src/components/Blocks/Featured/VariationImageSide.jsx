import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import config from '@plone/volto/registry';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import cx from 'classnames';

const BlockView = (props) => {
  const { data, isEditMode } = props;
  let Image = config.getComponent('Image').component;
  const imagePosition = data.imagePosition || 'left';

  const ImageBlock = ({ data }) => {
    return (
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
    );
  };

  const TextBlock = ({ data }) => {
    return (
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
    );
  };

  return (
    <div className="row my-5">
      {imagePosition === 'left' ? (
        <>
          <ImageBlock data={data} />
          <TextBlock data={data} />
        </>
      ) : (
        <>
          <TextBlock data={data} />
          <ImageBlock data={data} />
        </>
      )}
    </div>
  );
};
export default withBlockExtensions(BlockView);
