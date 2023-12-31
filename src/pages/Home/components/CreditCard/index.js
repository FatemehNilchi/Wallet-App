import React from 'react';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import RowView from '@components/RowView';
import Text from '@components/Text';

const CreditCard = props => {
  const {
    cardNumber = '1234567890123456',
    cardHolder = 'HILLERY NEVELIN',
    expiryDate = '12/23',
    style,
    colors,
  } = props;
  const {t} = useTranslation();

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 0.9}}
      locations={[0, 1]}
      colors={colors}
      style={[styles.cardContainer, style]}>
      <RowView>
        <Text color="white" weight="700" size={16}>
          {t('MasterCard')}
        </Text>
        <Icon name="leaf" size={wp(5)} color="#fff" />
      </RowView>
      <RowView>
        <Text color="white" weight="800" size={22}>
          {cardNumber}
        </Text>
      </RowView>
      <RowView>
        <View>
          <Text color="white" weight="400" size={12}>
            {t('Card Holder Name')}
          </Text>
          <Text color="white" weight="600" size={14}>
            {cardHolder}
          </Text>
        </View>
        <View>
          <Text color="white" weight="400" size={12}>
            {t('Expired Date')}
          </Text>
          <Text color="white" weight="600" size={14}>
            {expiryDate}
          </Text>
        </View>
        <Icon
          name="circle"
          size={wp(5)}
          color="#E53935"
          style={styles.lockIcon}
        />
      </RowView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor:
      'linear-gradient(305deg, rgba(82,204,96,1) 0%, rgba(176,234,242,1) 100%)',
    borderRadius: 10,
    paddingTop: wp(4),
    paddingHorizontal: wp(5),
    paddingBottom: wp(3),
    marginVertical: 10,
    rowGap: wp(5),
  },
});

export default CreditCard;
