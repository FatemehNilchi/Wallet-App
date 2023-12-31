import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/AntDesign';
import Text from '@components/Text';
import Wallet from '@pages/Wallet';
import Home from '@pages/Home';
import Send from '@pages/Send';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {t} = useTranslation();

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: wp(15),
      background: '#fff',
      borderTopWidth: 1,
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabContainer}>
                <Icon
                  name="home"
                  size={24}
                  color={focused ? '#121212' : '#727272'}
                />
                <Text
                  color={focused ? '#121212' : '#727272'}
                  size={12}
                  weight="600">
                  {t('Home')}
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabContainer}>
                <Icon
                  name="wallet"
                  size={24}
                  color={focused ? '#121212' : '#727272'}
                />
                <Text
                  color={focused ? '#121212' : '#727272'}
                  size={12}
                  weight="600">
                  {t('Wallet')}
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Send"
        component={Send}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.sendTabContainer,
                  {
                    width: focused ? wp(11) : wp(10),
                    height: focused ? wp(11) : wp(10),
                  },
                ]}>
                <Icon
                  name="swap"
                  size={focused ? 24 : 22}
                  color={focused ? '#fff' : '#ddd'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabContainer}>
                <Icon
                  name="barchart"
                  size={24}
                  color={focused ? '#121212' : '#727272'}
                />
                <Text
                  color={focused ? '#121212' : '#727272'}
                  size={12}
                  weight="600">
                  {t('Analytics')}
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabContainer}>
                <Icon
                  name="setting"
                  size={24}
                  color={focused ? '#121212' : '#727272'}
                />
                <Text
                  color={focused ? '#121212' : '#727272'}
                  size={12}
                  weight="600">
                  {t('Settings')}
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendTabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
    borderRadius: wp(50),
  },
});
export default TabNavigator;
