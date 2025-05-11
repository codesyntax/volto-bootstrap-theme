import TextBlockView from '@plone/volto-slate/blocks/Text/TextBlockView';

const BootstrapTextBlockView = (props) => {
  return (
    <div className="block text-block">
      <TextBlockView {...props} />
    </div>
  );
};

export default BootstrapTextBlockView;
