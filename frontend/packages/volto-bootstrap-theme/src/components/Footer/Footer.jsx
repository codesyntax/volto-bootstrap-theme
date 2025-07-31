/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { useNetworks } from '@plonegovbr/volto-social-media/hooks/useNetworks';
import SocialNetwork from '@plonegovbr/volto-social-media/components/SocialNetwork/SocialNetwork';
import Image from '@plone/volto/components/theme/Image/Image';
import SlotRenderer from '@plone/volto/components/theme/SlotRenderer/SlotRenderer';

const Footer = () => {
  const { siteActions = [] } = useSelector(
    (state) => ({
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );

  const content = useSelector((state) => state.content?.data, shallowEqual);
  let footerLinks =
    content?.['@components']?.inherit?.[
      'voltobootstraptheme.navroot_footer_links'
    ]?.data?.['navroot_footer_links'] || [];

  // filter out invalid values: without href, with invalid href
  footerLinks = footerLinks.filter(
    (item) => item?.href.length > 0 && item?.href[0] && item?.href[0]?.['@id'],
  );

  const footerData =
    content?.['@components']?.inherit?.['voltobootstraptheme.footer']?.data;

  const footerImage = footerData?.footer_logo;

  const socialLinks = useNetworks();

  return (
    <>
      <div className="pre-footer">
        <SlotRenderer name="preFooter" content={content} />
      </div>
      <footer id="mainfooter">
        <div className="container">
          <div className="pre-footer-content">
            <SlotRenderer name="preFooterContent" content={content} />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                {footerImage && (
                  <div className="col-6 col-lg-12">
                    <Image src={footerImage.download} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              {footerLinks.length > 0 && (
                <div className="text-center pb-lg-4">
                  <ul className="footer-links list-inline m-0">
                    {footerLinks.map((item, key) => (
                      <li className="list-inline-item" key={key}>
                        <UniversalLink
                          href={flattenToAppURL(item.href[0]['@id'])}
                        >
                          {item.title}
                        </UniversalLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {socialLinks.length > 0 && (
                <div className="text-center pb-lg-4">
                  <ul className="footer-links list-inline m-0">
                    {socialLinks.map((item, key) => (
                      <li className="list-inline-item" key={key}>
                        <SocialNetwork {...item} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="post-footer-content">
            <SlotRenderer name="postFooterContent" content={content} />
          </div>
        </div>
      </footer>
      <div className="post-footer">
        <SlotRenderer name="postFooter" content={content} />
      </div>
    </>
  );
};

export default Footer;
