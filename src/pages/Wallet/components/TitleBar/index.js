import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';
import RowView from '@components/RowView';
import Text from '@components/Text';

const TitleBar = () => {
  const {t} = useTranslation();

  return (
    <RowView justify="center" style={styles.container}>
      <TouchableOpacity>
        <Icon name="chevron-left" size={wp(4)} color="#000" />
      </TouchableOpacity>
      <Text size={22} weight="700" sistyle={styles.title}>
        {t('Apple')}
      </Text>
      <TouchableOpacity>
        <Icon name="chevron-right" size={wp(4)} color="#aaa" />
      </TouchableOpacity>
    </RowView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    paddingBottom: wp(2),
    backgroundColor: '#fff',
  },
  title: {
    marginHorizontal: wp(2),
  },
});

export default TitleBar;
