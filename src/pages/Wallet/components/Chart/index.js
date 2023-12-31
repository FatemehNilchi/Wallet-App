import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {LineChart} from 'react-native-gifted-charts';

const Chart = () => {
  const ptData = [
    {value: 5},
    {value: 17},
    {value: 9},
    {value: 21},
    {value: 16},
  ];

  const ptData2 = [
    {value: 4},
    {value: 8},
    {value: 18},
    {value: 13},
    {value: 22},
  ];

  return (
    <View
      style={{
        paddingVertical: 30,
        backgroundColor: '#fff',
      }}>
      <LineChart
        data={ptData}
        data2={ptData2}
        rotateLabel
        width={350}
        hideDataPoints
        spacing={90}
        color1="red"
        color2="blue"
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
        rulesColor="lightgray"
        yAxisTextStyle={{color: 'gray'}}
        yAxisSide="right"
        yAxisLabelSuffix="k"
        xAxisColor="lightgray"
        curved
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: '#111',
          pointerStripWidth: 2,
          pointerColor: '#111',
          radius: 4,
          pointerLabelWidth: 100,
          pointerLabelHeight: 150,
          activatePointersOnLongPress: false,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: items => {
            return (
              <View
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  marginTop: -30,
                  marginLeft: -40,
                }}>
                <View
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 10,
                    borderRadius: 8,
                    backgroundColor: '#0E132F',
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

export default Chart;
