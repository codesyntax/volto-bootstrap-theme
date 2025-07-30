import { Logo } from '@codesyntax/volto-bootstrap-theme/components/Logo/Logo';
import Navigation from '@codesyntax/volto-bootstrap-theme/components/Navigation/Navigation';
import SearchLink from '@codesyntax/volto-bootstrap-theme/components/SearchLink/SearchLink';
import LanguageSelector from '@codesyntax/volto-bootstrap-theme/components/LanguageSelector/LanguageSelector';
import config from '@plone/registry';

const Header = ({ pathname }) => {
  const Container = config.getComponent('Container').component;
  return (
    <>
      <header id="mainheader" className="sticky-lg-top">
        <Container
          id="header-container"
          className="px-2 px-lg-3 d-lg-flex justify-content-lg-between align-items-lg-center"
        >
          <Logo />
          <Navigation pathname={pathname} />
          <SearchLink pathname={pathname} />
          <LanguageSelector />
        </Container>
      </header>
    </>
  );
};

export default Header;
