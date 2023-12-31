import {StyleSheet, View} from 'react-native';

const RowView = ({
  style,
  children,
  justify = 'space-between',
  align = 'center',
  gap = 4,
  ...rest
}) => {
  return (
    <View
      style={[
        rowDirection,
        {justifyContent: justify, alignItems: align, columnGap: gap},
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
};

const rowDirection = StyleSheet.create({
  flexDirection: 'row',
});

export default RowView;
