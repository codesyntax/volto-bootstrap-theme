import DefaultCardBodyWithDate from './DefaultCardBodyWithDate';

const EventCardBody = (props) => {
  const { item } = props;

  return <DefaultCardBodyWithDate datevalue={item.start} {...props} />;
};

export default EventCardBody;
