/* This is a default MainContainer that will wrap the <main> tag.
   by default the wrapper is a <div class="container">

   If you want some other wrapper, just register a component that renders it, like this:

   const MyEmptyContainer = (props) = {
    const { children } = props;

    return <div className="my-elegant-site-wrapper">{children}</div>;
   }

   And then register it in your add-on's index.js file like this:

     config.registerComponent({
       name: 'MainContainer',
       component: MyEmptyContainer,
     });

  This is done like this, to avoid having to override App component in your add-on.

*/

const MainContainer = (props) => {
  const { children } = props;
  return <div className="container">{children}</div>;
};

export default MainContainer;
