import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '@components/Header';
import StockSection from '@components/StockSection';
import RowView from '@components/RowView';
import Text from '@components/Text';
import CreditCard from './components/CreditCard';
import Chart2 from './components/Chart';
const Home = () => {
  const {t} = useTranslation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView>
        <Header />
        <StockSection />
        <View style={styles.cardsContainer}>
          <CreditCard
            colors={['#F8D3B4', '#7AD9BB']}
            style={styles.creditCardTop}
          />
          <CreditCard
            colors={['#B0EAF2', '#52CC60']}
            style={styles.creditCardBottom}
          />
        </View>
        <RowView>
          <Text size={18} weight={700}>
            {t('My Funds')}
          </Text>
          <RowView>
            <Text> {t('See All')} </Text>
            <Icon name="angle-right" size={18} color="black" />
          </RowView>
        </RowView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.chartsSection}>
            <Chart2 bg="#C8E5FD" line2="#219AF6" line1="#0D456D" />
            <Chart2 bg="#C8E5FD" line2="#219AF6" line1="#0D456D" />
          </View>
        </ScrollView>
        <RowView gap={0} justify="center">
          <View style={styles.popularSection}>
            <Text size={18} weight={900}>
              {t('Most popular')}
            </Text>
          </View>
          <View style={styles.recommendedSection}>
            <Text size={18} weight={900} color="#A0A0A0">
              {t('Recommended')}
            </Text>
          </View>
        </RowView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.chartsSection}>
            <Chart2 bg="#D6F8D1" line2="#99E68E" line1="#155B09" />
            <Chart2 bg="#D6F8D1" line2="#99E68E" line1="#155B09" />
          </View>
        </ScrollView>
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
    paddingHorizontal: wp(6),
    paddingTop: wp(2),
    paddingBottom: wp(20),
  },
  cardsContainer: {
    alignItems: 'center',
  },
  creditCardTop: {
    width: '90%',
  },
  creditCardBottom: {
    width: '100%',
    marginTop: -wp(35),
    marginBottom: wp(4),
    zIndex: 1,
  },
  chartsSection: {
    flexDirection: 'row',
    marginTop: wp(3),
    gap: 12,
  },
  popularSection: {
    flex: 3,
    marginLeft: wp(6),
    borderBottomWidth: 2,
    paddingBottom: wp(1),
    paddingTop: wp(4),
  },
  recommendedSection: {
    flex: 4,
    alignItems: 'flex-end',
    marginRight: wp(6),
    borderBottomWidth: 2,
    paddingBottom: wp(1),
    paddingTop: wp(4),
    borderColor: '#D0D0D0',
  },
});
export default Home;
