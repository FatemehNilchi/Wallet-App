import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import RowView from '@components/RowView';
import Text from '@components/Text';

const StockSection = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text size={14} color="grey">
        {t('Your total stock in this company')}
      </Text>
      <RowView gap={5}>
        <Text size={32} weight="900">
          $10,474
        </Text>
        <View style={styles.icon}>
          <Text size={13} weight="600" color="#33DA18">
            +32%
          </Text>
        </View>
      </RowView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  icon: {
    backgroundColor: '#D6F8D1',
    borderRadius: 25,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
  },
});

export default StockSection;
