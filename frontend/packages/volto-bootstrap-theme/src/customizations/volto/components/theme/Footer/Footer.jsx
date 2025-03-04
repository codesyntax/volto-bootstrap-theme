import React from 'react';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

const messages = defineMessages({
    copyright: {
        id: 'Copyright',
        defaultMessage: 'Copyright',
    },
});

const Footer = ({ intl }) => {
    const { settings } = config;
    const { lang, siteActions = [] } = useSelector(
        (state) => ({
            lang: state.intl.locale,
            siteActions: state.actions?.actions?.site_actions,
        }),
        shallowEqual,
    );

    return (
        <footer id="footer" className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    {/* Mensaje de copyright */}
                    <div className="col-md-6 text-center text-md-start">
                        <h2>Kontaktua</h2>
                        <p className="mb-1">Azitain industrialdea 3K · E-20600 EIBAR (+34) 943 82 17 80 · </p>
                        <a href="mailto:info@codesyntax.com">info@codesyntax.com</a>

                    </div>

                    {/* Enlaces de acciones del sitio */}
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled">
                            {siteActions?.length
                                ? siteActions.map((item) => (
                                    <li key={item.id}>
                                        <UniversalLink
                                            className="text-light"
                                            href={
                                                settings.isMultilingual
                                                    ? `/${lang}/${item.url ? flattenToAppURL(item.url) : addAppURL(item.id)
                                                    }`
                                                    : item.url
                                                        ? flattenToAppURL(item.url)
                                                        : addAppURL(item.id)
                                            }
                                        >
                                            {item?.title}
                                        </UniversalLink>
                                    </li>
                                ))
                                : null}
                        </ul>
                    </div>

                    {/* Logo y branding */}
                    <div className="col-md-3 text-center">
                        <div className="mb-2">
                            <img src="cs.png" alt="CodeSyntax Irudia" />

                        </div>
                        <a className="text-light d-block" href="https://plone.org">
                            <FormattedMessage id="Powered by Plone & Python" defaultMessage="Powered by Plone & Python" />
                        </a>
                        <p className="mt-2">
                            Made with skills and {' '}
                            <span role="img" aria-label="love" className="text-danger">
                                ❤️
                            </span>{' '}
                            by CodeSyntax
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default injectIntl(Footer);
