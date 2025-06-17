// /**
//  * Footer component.
//  * @module components/theme/Footer/Footer
//  */

// import React from 'react';
// import { useSelector, shallowEqual } from 'react-redux';
// import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
// import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
// import { useNetworks } from '@plonegovbr/volto-social-media/hooks/useNetworks';
// import SocialNetwork from '@plonegovbr/volto-social-media/components/SocialNetwork/SocialNetwork';
// import Image from '@plone/volto/components/theme/Image/Image';

// const Footer = () => {
//   const { siteActions = [] } = useSelector(
//     (state) => ({
//       siteActions: state.actions?.actions?.site_actions,
//     }),
//     shallowEqual,
//   );

//   const content = useSelector((state) => state.content?.data, shallowEqual);
//   let footerLinks =
//     content?.['@components']?.inherit?.[
//       'voltobootstraptheme.navroot_footer_links'
//     ]?.data?.['navroot_footer_links'] || [];

//   // filter out invalid values: without href, with invalid href
//   footerLinks = footerLinks.filter(
//     (item) => item?.href.length > 0 && item?.href[0] && item?.href[0]?.['@id'],
//   );

//   const footerData =
//     content?.['@components']?.inherit?.['voltobootstraptheme.footer']?.data;

//   const footerAddressLineOne = footerData?.footer_address_line_one || '';
//   const footerAddressLineTwo = footerData?.footer_address_line_two || '';

//   const footerImage = footerData?.footer_logo;

//   const socialLinks = useNetworks();

//   return (
//     <footer id="mainfooter">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="row">
//               {footerImage && (
//                 <div className="col-6 col-lg-12">
//                   <Image src={footerImage.download} alt="" />
//                 </div>
//               )}
//               {(footerAddressLineOne || footerAddressLineTwo) && (
//                 <div className="col-6 col-lg-12">
//                   <address className="address-container">
//                     {footerAddressLineOne && (
//                       <p className="address-first-line">
//                         {footerAddressLineOne}
//                       </p>
//                     )}
//                     {footerAddressLineTwo && (
//                       <p className="address-second-line">
//                         {footerAddressLineTwo}
//                       </p>
//                     )}
//                   </address>
//                 </div>
//               )}
//             </div>
//           </div>
//           <p>Hola mundo soy el footer el zapato</p>
//           {footerLinks.length > 0 && (
//             <div className="col-md-6">
//               <div className="text-center text-lg-end pb-lg-4">
//                 <ul className="footer-links list-inline m-0">
//                   {footerLinks.map((item, key) => (
//                     <li className="list-inline-item" key={key}>
//                       <UniversalLink
//                         href={flattenToAppURL(item.href[0]['@id'])}
//                       >
//                         {item.title}
//                       </UniversalLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="text-center text-lg-end pb-lg-4">
//                 <ul className="footer-links list-inline m-0">
//                   {socialLinks.map((item, key) => (
//                     <li className="list-inline-item" key={key}>
//                       <SocialNetwork {...item} />
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
