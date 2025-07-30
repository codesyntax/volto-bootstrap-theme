import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import config from '@plone/volto/registry';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

const BlockView = (props) => {
  const { data, isEditMode } = props;
  let Image = config.getComponent('Image').component;

  return (
    <div className="card text-bg-dark my-5">
      {data.preview_image && data.preview_image.length > 0 && (
        <Image
          className="responsive"
          item={data.preview_image[0]}
          sizes="(min-width: 1200px) 1200px, 75vw"
          alt={data.preview_image[0].title}
          title={data.preview_image[0].title}
        />
      )}

      <div className="card-img-overlay">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">
          {isEditMode ? (
            <DetachedTextBlockEditor {...props} />
          ) : (
            <TextBlockView {...props} />
          )}
        </p>
        {data.href && (
          <UniversalLink href={data.href} className="btn btn-primary">
            {data.linkText}
          </UniversalLink>
        )}
      </div>
    </div>
  );
};
export default withBlockExtensions(BlockView);
