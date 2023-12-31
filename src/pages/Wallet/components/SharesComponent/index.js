import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';
import RowView from '@components/RowView';
import Text from '@components/Text';

const YourSharesComponent = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <RowView style={styles.topSection}>
        <Text> {t('Your number of shares')}</Text>
        <RowView>
          <Text>607/</Text>
          <Text color="#777">50.4G</Text>
        </RowView>
      </RowView>
      <RowView style={styles.bottomSection}>
        <Text size={15} weight={700}>
          {t('Sale')}
        </Text>
        <RowView style={styles.yearSection}>
          <Icon name="chevron-left" size={20} color="black" />
          <Text>{t(2022)}</Text>
          <Icon name="chevron-right" size={20} color="black" />
        </RowView>
        <RowView>
          <Text> {t('7days')} </Text>
          <Icon name="chevron-down" size={20} color="black" />
        </RowView>
      </RowView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  topSection: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

  bottomSection: {
    paddingTop: 10,
  },

  yearSection: {
    marginStart: 10,
    marginEnd: 'auto',
  },
});

export default YourSharesComponent;
