import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/AntDesign';
import RowView from '@components/RowView';
import Text from '@components/Text';
import KeypadButton from './components/KeypadButton';
import Avatar from './components/Avatar';

const Send = () => {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const [amount, setAmount] = useState('');

  const handleKeyPress = key => {
    if (key === 'C') {
      setAmount('');
    } else if (key === '.') {
      if (!amount.includes('.')) {
        setAmount(prevAmount => prevAmount + key);
      }
    } else {
      setAmount(prevAmount => prevAmount + key);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView>
        <View style={styles.topSection}>
          <Text size={32} weight={900}>
            {t('Send')}
          </Text>
          <RowView justify="center" gap={30}>
            <Avatar image={require('@assets/images/Hannah.png')} name="You" />
            <Icon name="swap" color="#000" size={30} />
            <Avatar
              image={require('@assets/images/Charlotte.png')}
              name="Juice"
            />
          </RowView>
          <View style={styles.incomeCalculation}>
            <Text size={18} weight={400} color="#fff">
              {amount ? `${amount}` : '246'}
              {t(' shares')} = $500
            </Text>
          </View>
        </View>

        <View style={styles.keyPadSection}>
          <Text style={styles.amount}>{amount ? `${amount}` : '246'}</Text>
          <View style={styles.keypad}>
            <View style={styles.row}>
              <KeypadButton label="1" onPress={() => handleKeyPress('1')} />
              <KeypadButton label="2" onPress={() => handleKeyPress('2')} />
              <KeypadButton label="3" onPress={() => handleKeyPress('3')} />
            </View>
            <View style={styles.row}>
              <KeypadButton label="4" onPress={() => handleKeyPress('4')} />
              <KeypadButton label="5" onPress={() => handleKeyPress('5')} />
              <KeypadButton label="6" onPress={() => handleKeyPress('6')} />
            </View>
            <View style={styles.row}>
              <KeypadButton label="7" onPress={() => handleKeyPress('7')} />
              <KeypadButton label="8" onPress={() => handleKeyPress('8')} />
              <KeypadButton label="9" onPress={() => handleKeyPress('9')} />
            </View>
            <View style={styles.row}>
              <KeypadButton label="0" onPress={() => handleKeyPress('0')} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleKeyPress('C')}>
            <Text size={18} weight={700} color="#fff">
              {t('Send')}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingTop: wp(2),
    paddingBottom: wp(1),
  },
  topSection: {
    alignItems: 'center',
  },
  avatar: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(10),
  },
  incomeCalculation: {
    paddingVertical: wp(2),
    paddingHorizontal: wp(6),
    marginTop: wp(3),
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#16669E',
    backgroundColor: '#0793F7',
  },
  keyPadSection: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: wp(8),
    paddingBottom: wp(20),
    marginTop: wp(2),
  },
  amount: {
    marginBottom: 8.5,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
  },
  keypad: {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: wp(3),
    marginBottom: wp(5),
    paddingHorizontal: wp(8),
  },
  row: {
    flexDirection: 'row',
    columnGap: wp(5),
  },
  button: {
    paddingVertical: wp(2),
    flex: 1,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0793F7',
  },
});
export default Send;
