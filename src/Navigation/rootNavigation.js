import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../Screens/HomeScreen/Home.screen';
import StockScreen from '../Screens/StockScreen/StockScreen';

const Tab = createBottomTabNavigator();

const icon = {
  'Home': 'home',
  'Stock': 'archive',
  'Cashflow': 'activity',
  'Profile': 'user'
}

const _getIcon = (opts, route) => {
  const { color } = opts;
  const { name } = route;
  const iconName = icon[name]

  return (
    <View style={{ marginBottom: -5 }}>
      <Feather name={iconName} size={24} color={color} />
    </View>
  )
}

const Root = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: (opts) => _getIcon(opts, route),
        tabBarLabelStyle: { marginBottom: -5 }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stock" component={StockScreen} />
      <Tab.Screen name="Cashflow" component={StockScreen} />
      <Tab.Screen name="Profile" component={StockScreen} />
    </Tab.Navigator>
  );
}

export default Root;
