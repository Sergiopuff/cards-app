import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderBackButton from '../components/headerBackButton';
import Home from '../components/home';
import Collection from '../components/collection';
import SingleCard from '../components/card';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="collection"
          component={Collection}
          options={({navigation}) => ({
            title: 'Collection',
            headerLeft: () => <HeaderBackButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="collection/card"
          component={SingleCard}
          options={({navigation}) => ({
            title: 'Card overview',
            headerLeft: () => <HeaderBackButton navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
