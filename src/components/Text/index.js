import React from 'react';
import {Text as T} from 'react-native';

const Text = props => {
  const {
    style,
    children,
    color = '#000',
    size,
    align,
    lineHeight,
    weight = '400',
    ...rest
  } = props;
  return (
    <T
      style={[
        {
          color: color,
          fontSize: size,
          textAlign: align,
          lineHeight: lineHeight,
          fontWeight: weight,
        },
        style,
      ]}
      {...rest}>
      {children}
    </T>
  );
};

export default Text;
