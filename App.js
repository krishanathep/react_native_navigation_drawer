import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Button} from 'react-native-elements';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Button
      onPress={()=>toggleDrawer()}
      type='clear'
        icon={{
          type:'font-awesome',
          name: 'bars',
          size: 20,
          color: 'white',
        }}
      />
    </View>
  );
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="FirstScreen">
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          title: 'First Screen', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#3498DB', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="SecondScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3498DB', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{
          title: 'Second Screen', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function thirdScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="ThirdScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3498DB', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{
          title: 'Third Screen', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#3498DB',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="FirstScreen"
          options={{drawerLabel: 'First Screen Option'}}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondScreen"
          options={{drawerLabel: 'Second Screen Option'}}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="ThirdScreen"
          options={{drawerLabel: 'Third Screen Option'}}
          component={thirdScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
