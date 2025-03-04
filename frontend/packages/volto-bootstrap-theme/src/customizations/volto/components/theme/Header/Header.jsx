import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';
import Anontools from '@plone/volto/components/theme/Anontools/Anontools';
import LanguageSelector from '@plone/volto/components/theme/LanguageSelector/LanguageSelector';
import Navigation from '@plone/volto/components/theme/Navigation/Navigation';
import SearchWidget from '@plone/volto/components/theme/SearchWidget/SearchWidget';

const Header = ({ pathname }) => {
    const token = useSelector((state) => state.userSession.token, shallowEqual);

    return (
        <header className="bg-dark text-light py-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Logo y navegación */}
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="me-3">
                            <img src="cs.png" alt="CodeSyntax Irudia" className="logo img-fluid" />
                        </div>
                        <nav>
                            <Navigation pathname={pathname} />
                        </nav>
                    </div>

                    {/* Herramientas, selector de idioma y búsqueda */}
                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <LanguageSelector />
                        {!token && (
                            <div className="ms-3">
                                <Anontools />
                            </div>
                        )}
                        <div className="ms-3">
                            <SearchWidget />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

Header.propTypes = {
    pathname: PropTypes.string.isRequired,
};

