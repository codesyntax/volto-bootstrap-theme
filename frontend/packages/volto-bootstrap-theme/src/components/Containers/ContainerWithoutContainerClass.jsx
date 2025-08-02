import React from 'react';
import cx from 'classnames';

const Container = (props) => {
  const {
    as: Component = 'div',
    children,
    className,
    layout,
    narrow,
    ...rest
  } = props;
  const classes = cx('q', className, { layout, narrow });

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};

export default Container;
