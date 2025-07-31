import { AccordionPanelSchema } from '@codesyntax/volto-bootstrap-theme/components/Blocks/Accordion/schema';

import ObjectListWidget from '@plone/volto/components/manage/Widgets/ObjectListWidget';

const AccordionPanelSchemaWidget = (props) => {
  return (
    <ObjectListWidget
      schema={AccordionPanelSchema}
      {...props}
      value={props.value?.items || props.default?.items || []}
      onChange={(id, value) => props.onChange(id, { items: value })}
    />
  );
};

export default AccordionPanelSchemaWidget;
