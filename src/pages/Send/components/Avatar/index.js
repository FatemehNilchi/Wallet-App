import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Text from '@components/Text';

const Avatar = props => {
  const {image, name} = props;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.avatar} />
      <Text size={18} weight={900}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(10),
  },
});
export default Avatar;
