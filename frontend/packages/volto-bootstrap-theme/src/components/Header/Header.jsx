import { useSelector, shallowEqual } from 'react-redux';
import { Logo } from '@codesyntax/volto-bootstrap-theme/components/Logo/Logo';
import Navigation from '@codesyntax/volto-bootstrap-theme/components/Navigation/Navigation';
import SearchLink from '@codesyntax/volto-bootstrap-theme/components/SearchLink/SearchLink';
import LanguageSelector from '@codesyntax/volto-bootstrap-theme/components/LanguageSelector/LanguageSelector';
import config from '@plone/registry';
import SlotRenderer from '@plone/volto/components/theme/SlotRenderer/SlotRenderer';

const Header = ({ pathname }) => {
  const Container = config.getComponent('Container').component;
  const content = useSelector((state) => state.content?.data, shallowEqual);

  return (
    <>
      <div className="pre-header">
        <SlotRenderer name="preHeader" content={content} />
      </div>

      <header id="mainheader" className="sticky-lg-top">
        <Container
          id="header-container"
          className="px-2 px-lg-3 d-lg-flex justify-content-lg-between align-items-lg-center"
        >
          <div className="pre-header-content">
            <SlotRenderer name="preHeaderContent" content={content} />
          </div>
          <Logo />
          <Navigation pathname={pathname} />
          <SearchLink pathname={pathname} />
          <LanguageSelector />
          <div className="post-header-content">
            <SlotRenderer name="postHeaderContent" content={content} />
          </div>
        </Container>
      </header>
      <div className="post-header">
        <SlotRenderer name="postHeader" content={content} />
      </div>
    </>
  );
};

export default Header;
