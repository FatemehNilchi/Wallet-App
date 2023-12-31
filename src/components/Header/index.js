import React, {useState} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import RowView from '@components/RowView';
import Text from '@components/Text';

const Header = () => {
  const {i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };
  return (
    <RowView style={styles.container}>
      <RowView gap={8}>
        <Image
          source={require('@assets/images/Hannah.png')}
          style={styles.avatar}
        />
        <Text size={16} weight="700">
          Fatemeh Nilchi
        </Text>
        <Icon name="chevron-down" size={wp(4)} color="#000" />
      </RowView>
      <TouchableOpacity onPress={toggleLanguage}>
        <Icon name="bell" size={wp(5)} color="#000" />
      </TouchableOpacity>
    </RowView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(2),
    paddingBottom: wp(5),
    backgroundColor: '#fff',
  },
  avatar: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
  },
});

export default Header;
