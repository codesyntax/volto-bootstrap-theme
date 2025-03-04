import cx from 'classnames';
import config from '@plone/volto/registry';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';

const GridBlockView = (props) => {
  const { data, path, className, style } = props;
  const metadata = props.metadata || props.properties;

  if (!data.blocks_layout?.items) {
    return null;
  }

  const columns = data.blocks_layout.items;
  const blocks = data.blocks || {};

  return (
    <div className={cx('block', data['@type'], className, 'container')} style={style}>
      {data.headline && <h2 className="h2">{data.headline}</h2>}

      <div className="row">
        {columns.map((blockId) => {
          const block = blocks[blockId];
          if (!block) return null;

          const BlockComponent = config.blocks.blocksConfig[block['@type']]?.view;
          if (!BlockComponent) return null;

          // Calcular columnas basado en cantidad de bloques
          const columnClass = `col-${12 / columns.length}`;

          return (
            <div key={blockId} className={columnClass}>
              <BlockComponent id={blockId} metadata={metadata} properties={data} data={block} path={path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withBlockExtensions(GridBlockView);
