import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

const DefaultCardBody = (props) => {
  const { item, HeadingTag = null } = props;

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

export default DefaultCardBody;
