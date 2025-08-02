const variationIdStyleClassNameExtender = (props) => {
  const { data, classNames } = props;
  let styles = [];

  data?.variation && styles.push(data.variation);

  return [...classNames, ...styles];
};

const styleClassNameExtender = (config) => {
  config.settings.styleClassNameExtenders.push(
    variationIdStyleClassNameExtender,
  );
};

export default styleClassNameExtender;
