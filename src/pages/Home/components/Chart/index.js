import React from 'react';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {LineChart} from 'react-native-gifted-charts';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';
import RowView from '@components/RowView';
import Text from '@components/Text';

const Chart2 = props => {
  const {t} = useTranslation();

  const {line1, line2, bg = '#C8E5FD'} = props;
  const ptData = [
    {value: 5},
    {value: 17},
    {value: 9},
    {value: 21},
    {value: 16},
    {value: 18},
    {value: 7},
    {value: 19},
  ];

  const ptData2 = [
    {value: 4},
    {value: 8},
    {value: 18},
    {value: 13},
    {value: 21},
    {value: 7},
    {value: 22},
    {value: 22},
  ];

  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: bg,
        borderRadius: 16,
      }}>
      <RowView style={styles.saleSection}>
        <Text size={14} weight={600}>
          {t('Sale')}
        </Text>
        <RowView>
          <Text size={12} weight={400}>
            {t('7days')}
          </Text>
          <Icon name="angle-down" size={16} color="black" />
        </RowView>
      </RowView>

      <LineChart
        data={ptData}
        data2={ptData2}
        rotateLabel
        adjustToWidth={true}
        stepHeight={wp(5)}
        hideDataPoints
        spacing={30}
        color1={line1}
        color2={line2}
        thickness={2}
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={4}
        maxValue={20}
        yAxisOffset={5}
        stepValue={5}
        yAxisColor="white"
        yAxisThickness={0}
        rulesType="solid"
        rulesColor={line2}
        yAxisTextStyle={{color: '#121212', fontSize: 11}}
        yAxisSide="right"
        yAxisLabelSuffix="k"
        xAxisColor={line2}
        curved
        pointerConfig={{
          pointerStripHeight: 80,
          pointerStripColor: '#111',
          pointerStripWidth: 2,
          pointerColor: '#111',
          radius: 4,
          pointerLabelWidth: 20,
          pointerLabelHeight: 20,
          activatePointersOnLongPress: false,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: items => {
            return (
              <View
                style={{
                  height: 30,
                  width: 60,
                  justifyContent: 'center',
                  marginTop: -5,
                  marginLeft: -5,
                }}>
                <View
                  style={{
                    paddingHorizontal: 2,
                    paddingVertical: 2,
                    borderRadius: 8,
                    backgroundColor: line1,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    {'$' + (items[0].value - items[1].value) + '000'}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  saleSection: {
    marginBottom: wp(3),
  },
});
export default Chart2;
