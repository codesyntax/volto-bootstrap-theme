const variationIdStyleClassNameExtender = (props) => {
  const { data, classNames } = props;
  let styles = [];

  data?.variation && styles.push(`variation-${data.variation}`);

  return [...classNames, ...styles];
};

const styleClassNameExtender = (config) => {
  config.settings.styleClassNameExtenders.push(
    variationIdStyleClassNameExtender,
  );
};

export default styleClassNameExtender;
