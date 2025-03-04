import React from 'react';
import { useLocation } from 'react-router-dom';
import config from '@plone/volto/registry';
import { RenderBlocks } from '@plone/volto/components';
import { COLUMNSBLOCK } from '@eeacms/volto-columns-block/constants';
import cx from 'classnames';

import { getColumns } from '@eeacms/volto-columns-block/ColumnsBlock/utils';
import { getStyle } from '@eeacms/volto-columns-block/Styles';
//No me gusta, modificar.
const ColumnsBlockView = (props) => {
  const location = useLocation();
  const { gridSizes } = config.blocks.blocksConfig[COLUMNSBLOCK];
  const { data = {}, gridSize = 12, gridCols = [] } = props.data;
  const metadata = props.metadata || props.properties;
  const columnList = getColumns(data);
  const customId = props.data?.title
    ?.toLowerCase()
    ?.replace(/[^a-zA-Z-\s]/gi, '')
    ?.trim()
    ?.replace(/\s+/gi, '-');

  return (
    <div className="columns-view container" id={customId}>
      <div className={cx('row', props.data.reverseWrap && 'flex-row-reverse')}>
        {columnList.map(([id, column], index) => {
          const colSize = gridCols[index] ? `col-${gridCols[index]}` : 'col';

          return (
            <div
              key={id}
              className={cx(
                'column-blocks-wrapper',
                colSize,
                column.settings?.column_class,
              )}
              style={getStyle(column.settings || {})}
            >
              <RenderBlocks
                {...props}
                location={location}
                metadata={metadata}
                content={column}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnsBlockView;
