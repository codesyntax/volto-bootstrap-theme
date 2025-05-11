import { flattenToAppURL, getBaseUrl } from '@plone/volto/helpers/Url/Url';
import { useEffect } from 'react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import config from '@plone/registry';
import { getBreadcrumbs } from '@plone/volto/actions/breadcrumbs/breadcrumbs';
import { getNavroot } from '@plone/volto/actions/navroot/navroot';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import { hasApiExpander } from '@plone/volto/helpers/Utils/Utils';
import homeSVG from '@plone/volto/icons/home.svg';

const messages = defineMessages({
  home: {
    id: 'Home',
    defaultMessage: 'Home',
  },
  breadcrumbs: {
    id: 'Breadcrumbs',
    defaultMessage: 'Breadcrumbs',
  },
  controlpanel: {
    id: 'Site Setup',
    defaultMessage: 'Site Setup',
  },
});

const BreadcrumbsComponent = ({ pathname }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { pathname: realPath } = useLocation();
  const controlpanelItems = [
    {
      url: '/controlpanel',
      title: intl.formatMessage(messages.controlpanel),
    },
  ];

  const items = useSelector(
    (state) =>
      realPath.startsWith('/controlpanel')
        ? controlpanelItems
        : state.breadcrumbs.items,
    shallowEqual,
  );
  const root = useSelector((state) => state.breadcrumbs.root);

  useEffect(() => {
    if (!hasApiExpander('breadcrumbs', getBaseUrl(pathname))) {
      dispatch(getBreadcrumbs(getBaseUrl(pathname)));
    }
  }, [dispatch, pathname]);

  const navroot = useSelector((state) => state.navroot.data);

  useEffect(() => {
    if (pathname && !hasApiExpander('navroot', getBaseUrl(pathname))) {
      dispatch(getNavroot(getBaseUrl(pathname)));
    }
  }, [dispatch, pathname]);

  const navRootPath = flattenToAppURL(navroot?.navroot?.['@id']) || '/';
  const Container = config.getComponent('Container').component;

  return (
    navRootPath !== useLocation().pathname && (
      <div id="portal-breadcrumbs">
        <Container>
          <ol className="breadcrumb">
            <li id="breadcrumbs-home" className="breadcrumb-item">
              <Link to={root || '/'} title={intl.formatMessage(messages.home)}>
                <FormattedMessage {...messages.home} />
              </Link>
            </li>
            {items.map((item, index) => (
              <li className="breadcrumb-item" key={index}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    )
  );
};

export default BreadcrumbsComponent;
