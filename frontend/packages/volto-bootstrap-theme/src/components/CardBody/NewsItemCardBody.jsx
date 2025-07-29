import DefaultCardBodyWithDate from './DefaultCardBodyWithDate';

const NewsItemCardBody = (props) => {
  const { item } = props;

  return <DefaultCardBodyWithDate datevalue={item.effective} {...props} />;
};

export default NewsItemCardBody;
