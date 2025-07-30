import { SliderItemSchema } from '@codesyntax/volto-bootstrap-theme/components/Blocks/Slider/schema';

import ObjectListWidget from '@plone/volto/components/manage/Widgets/ObjectListWidget';

const SliderItemSchemaWidget = (props) => {
  return (
    <ObjectListWidget
      schema={SliderItemSchema}
      {...props}
      value={props.value?.items || props.default?.items || []}
      onChange={(id, value) => props.onChange(id, { items: value })}
    />
  );
};

export default SliderItemSchemaWidget;
