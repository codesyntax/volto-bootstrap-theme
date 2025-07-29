import { FeaturedContainerCardSchema } from '@codesyntax/volto-bootstrap-theme/components/Blocks/FeaturedContainer/schema';

import ObjectListWidget from '@plone/volto/components/manage/Widgets/ObjectListWidget';

const FeaturedContainerCardSchemaWidget = (props) => {
  return (
    <ObjectListWidget
      schema={FeaturedContainerCardSchema}
      {...props}
      value={props.value?.items || props.default?.items || []}
      onChange={(id, value) => props.onChange(id, { items: value })}
    />
  );
};

export default FeaturedContainerCardSchemaWidget;
