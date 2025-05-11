/**
 * Logo component.
 * @module components/theme/Logo/Logo
 */
import { defineMessages, useIntl } from 'react-intl';
import { useEffect } from 'react';
import LogoImage from '@plone/volto/components/theme/Logo/Logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getNavroot } from '@plone/volto/actions/navroot/navroot';
import { flattenToAppURL, getBaseUrl } from '@plone/volto/helpers/Url/Url';
import { hasApiExpander } from '@plone/volto/helpers/Utils/Utils';
import Image from '@plone/volto/components/theme/Image/Image';

/**
 * Logo component class.
 * @function Logo
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */

const LogoComponent = (props) => {
  const { navRootPath, className = '' } = props;
  const site = useSelector((state) => state.site.data);
  const intl = useIntl();
  const messages = defineMessages({
    logoOf: {
      id: 'Logo of',
      defaultMessage: 'Logo of {siteName}',
    },
  });
  return (
    <Link to={navRootPath} className={className}>
      <Image
        src={
          site['plone.site_logo']
            ? flattenToAppURL(site['plone.site_logo'])
            : LogoImage
        }
        alt={intl.formatMessage(messages.logoOf, {
          siteName: site['plone.site_title'],
        })}
      />
    </Link>
  );
};

const Logo = () => {
  const pathname = useLocation().pathname;
  const navroot = useSelector((state) => state.navroot.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname && !hasApiExpander('navroot', getBaseUrl(pathname))) {
      dispatch(getNavroot(getBaseUrl(pathname)));
    }
  }, [dispatch, pathname]);

  const navRootPath = flattenToAppURL(navroot?.navroot?.['@id']) || '/';

  return (
    <div id="logo" className="d-none d-lg-block">
      {navRootPath === pathname ? (
        <h1>
          <LogoComponent navRootPath={navRootPath} />
        </h1>
      ) : (
        <LogoComponent navRootPath={navRootPath} />
      )}
    </div>
  );
};

// export also LogoComponent, because it will be used in the Navigation componentç
// when rendering the logo in mobile view
export { Logo, LogoComponent };
