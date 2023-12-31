import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {View, Dimensions, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const ChartExample = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [5, 17, 10, 25, 20, 22],
        color: (opacity = 1) => `rgba(0, 0, 255,1)`,
      },
      {
        data: [14, 5, 12, 9, 25, 18],
        color: (opacity = 1) => `rgba(255, 0, 0, 1)`,
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={Dimensions.get('window').width}
      height={220}
      chartConfig={{
        backgroundColor: '#f00',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0,${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0,${opacity})`,
      }}
      bezier
      style={{
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 16,
      }}
    
      fromZero={true}
      segments={5}
      yAxisSuffix="k"
      withVerticalLines={false}
      withDots={false}
    />
  );
};

const styles = StyleSheet.create({});
export default ChartExample;
