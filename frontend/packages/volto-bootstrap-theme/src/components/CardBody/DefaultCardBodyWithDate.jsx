import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import FormattedDate from '@plone/volto/components/theme/FormattedDate/FormattedDate';

const DefaultCardBodyWithDate = (props) => {
  const { item, HeadingTag = null, datevalue = null } = props;

  const Heading = () => {
    return HeadingTag ? (
      <HeadingTag>
        <UniversalLink item={item} className="h5 card-title stretched-link">
          {item.title}
        </UniversalLink>
      </HeadingTag>
    ) : (
      <UniversalLink item={item} className="h5 card-title stretched-link">
        {item.title}
      </UniversalLink>
    );
  };

  const Date = () => {
    return datevalue ? (
      <FormattedDate
        key="day"
        date={datevalue}
        format={{
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }}
        className="date"
      />
    ) : null;
  };

  return (
    <>
      <Heading />
      <p className="mb-3">
        <Date />
      </p>
    </>
  );
};

export default DefaultCardBodyWithDate;
