import { buildStyleClassNamesFromData } from '@plone/volto/helpers/Blocks/Blocks';
import config from '@plone/volto/registry';
/*
 * add selected variation id, if available, in the block classes
 */
const variationIdStyleClassNameExtender = (props) => {
  const { data, classNames } = props;
  let styles = [];

  data?.variation && styles.push(`variation-${data.variation}`);

  return [...classNames, ...styles];
};

/*
 * add block width marker in the block classes
 */
const blockWidthDecider = (props) => {
  const { data, classNames } = props;
  let styles = [];

  const builtStyleClassNames = buildStyleClassNamesFromData(data.styles);

  // If this block does not have any blockWidth set, just push the default the class list
  const defaultBlockWidthClassNames = builtStyleClassNames.filter((item) =>
    item.includes('has--blockWidth--'),
  );
  // we may push also has-
  defaultBlockWidthClassNames.length === 0 &&
    styles.push(`has--blockWidth--${config.blocks.defaultWidth}`);

  return [...classNames, styles];
};

const styleClassNameExtender = (config) => {
  config.settings.styleClassNameExtenders.push(
    variationIdStyleClassNameExtender,
    blockWidthDecider,
  );
};

export default styleClassNameExtender;
