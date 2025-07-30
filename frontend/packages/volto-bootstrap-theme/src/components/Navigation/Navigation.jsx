import { flattenToAppURL, getBaseUrl } from '@plone/volto/helpers/Url/Url';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { LogoComponent } from '@codesyntax/volto-bootstrap-theme/components/Logo/Logo';
import { getNavigation } from '@plone/volto/actions/navigation/navigation';
import { getNavroot } from '@plone/volto/actions/navroot/navroot';
import { hasApiExpander } from '@plone/volto/helpers/Utils/Utils';
import config from '@plone/volto/registry';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { pathname } = props;
  const token = useSelector((state) => state.userSession.token, shallowEqual);
  const items = useSelector((state) => state.navigation.items, shallowEqual);

  const messages = defineMessages({
    toggleNavigation: {
      id: 'Toggle Navigation',
      defaultMessage: 'Toggle navigation',
    },
  });

  useEffect(() => {
    const { settings } = config;
    if (!hasApiExpander('navigation', getBaseUrl(pathname))) {
      dispatch(getNavigation(getBaseUrl(pathname), settings.navDepth));
    }
  }, [pathname, token, dispatch]);

  const navroot = useSelector((state) => state.navroot.data);
  const navRootPath = flattenToAppURL(navroot?.navroot?.['@id']) || '/';
  const searchRootPath = `${navRootPath}search`;

  useEffect(() => {
    if (pathname && !hasApiExpander('navroot', getBaseUrl(pathname))) {
      dispatch(getNavroot(getBaseUrl(pathname)));
    }
  }, [dispatch, pathname]);

  return (
    <nav id="mainmenu" className="navbar navbar-expand-lg pb-0 pr-0 pt-0">
      <LogoComponent
        navRootPath={navRootPath}
        className="navbar-brand d-lg-none"
      />

      <Link to={searchRootPath} className="mobile-search d-lg-none"></Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label={intl.formatMessage(messages.toggleNavigation)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="portal-globalnav" className="navbar-nav mr-auto">
          {items.map((item, order) => {
            return (
              <li className="nav-item dropdown" key={item['@id']}>
                {item.items.length > 0 ? (
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    id={`navbarDropDown-${order}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Link to={item.url} className="nav-link">
                    {item.title}
                  </Link>
                )}

                {item.items.length > 0 && (
                  <div
                    className="dropdown-menu"
                    aria-labelledby={`navbarDropDown-${order}`}
                  >
                    <div className="container">
                      <div className="no-group">
                        <ul>
                          {item.items.map((subitem) => {
                            return (
                              <li key={subitem['@id']}>
                                <Link
                                  to={subitem.url}
                                  className="dropdown-item"
                                >
                                  {subitem.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Navigation;
