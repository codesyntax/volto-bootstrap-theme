import { getNavroot } from '@plone/volto/actions/navroot/navroot';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import { flattenToAppURL, getBaseUrl } from '@plone/volto/helpers/Url/Url';
import { hasApiExpander } from '@plone/volto/helpers/Utils/Utils';
import searchIcon from '@plone/volto/icons/zoom.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchLink = (props) => {
  const { pathname } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    if (pathname && !hasApiExpander('navroot', getBaseUrl(pathname))) {
      dispatch(getNavroot(getBaseUrl(pathname)));
    }
  }, [dispatch, pathname]);

  const navroot = useSelector((state) => state.navroot.data);
  const navRootPath = flattenToAppURL(navroot?.navroot?.['@id']) || '/';
  const searchRootPath = flattenToAppURL(`${navRootPath}search`);

  return (
    <div className="d-none d-lg-flex justify-content-between">
      <Link to={searchRootPath} rel="search">
        <Icon className="search-link-icon" name={searchIcon} size="18px" />
      </Link>
    </div>
  );
};

export default SearchLink;
