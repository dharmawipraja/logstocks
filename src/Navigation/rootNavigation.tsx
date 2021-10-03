import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../Screens/HomeScreen/Home.screen';
import StockScreen from '../Screens/StockScreen/StockScreen';
import CashflowScreen from '../Screens/CashflowScreen/Cashflow.screen';
import ProfileScreen from '../Screens/ProfileScreen/Profile.screen';

const Tab = createBottomTabNavigator();

interface Opts {
  color: string
}

interface Route {
  name: string
}

const icons = {
  Home: 'home',
  Stock: 'archive',
  Cashflow: 'activity',
  Profile: 'user'
}

const _getIcon = (opts: Opts, route: Route) => {
  const { color } = opts;
  const { name } = route;
  // @ts-ignore
  const iconName = icons[name]

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
      <Tab.Screen name="Cashflow" component={CashflowScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Root;
