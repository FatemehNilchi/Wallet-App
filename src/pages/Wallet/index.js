import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '@components/Header';
import StockSection from '@components/StockSection';
import RowView from '@components/RowView';
import Text from '@components/Text';
import TitleBar from './components/TitleBar';
import Chart from './components/Chart';
import YourSharesComponent from './components/SharesComponent';

const Wallet = () => {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <View style={styles.container}>
      <Header userName="Fatemeh Nilchi" onBellPress={toggleLanguage} />
      <TitleBar />
      <StockSection />
      <YourSharesComponent />
      <Chart />
      <RowView justify="flex-start" gap={25}>
        <RowView justify="flex-start" gap={8}>
          <View style={styles.circleRed}></View>
          <Text>{t('This Month')}</Text>
        </RowView>
        <RowView justify="flex-start" gap={8}>
          <View style={styles.circleBlue}></View>
          <Text>{t('Last Month')}</Text>
        </RowView>
      </RowView>
      <RowView style={styles.buttonContainer}>
        <RowView gap={10}>
          <TouchableOpacity style={styles.blueButton}>
            <Text color={'white'}>{t('Buy three')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.grayButton}>
            <Text color={'white'}>{t('Sale')}</Text>
          </TouchableOpacity>
        </RowView>
        <RowView gap={10}>
          <Icon name="plus" size={14} color="black" />
          <Text>0</Text>
          <Icon name="minus" size={14} color="black" />
        </RowView>
      </RowView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(6),
    paddingVertical: wp(2),
    flex: 1,
    backgroundColor: '#fff',
  },
  circleRed: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  circleBlue: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  blueButton: {
    backgroundColor: '#0793F8',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 9,
  },
  grayButton: {
    backgroundColor: '#414141',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 9,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
export default Wallet;
