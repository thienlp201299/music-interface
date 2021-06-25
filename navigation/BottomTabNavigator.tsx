import {
  Ionicons,
  Entypo,
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import SingerScreen from '../screens/SingerScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabSearchParamList } from '../types';
import AlbumScreen from '../screens/AlbumScreen'
import AuthorScreen from '../screens/AuthorScreen';
import DetailSingerScreen from '../screens/DetailSingerScreen';
import DetailAuthorScreen from '../screens/DetailAuthorScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailSongScreen from '../screens/DetailSongScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Trang Chủ"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Tìm Kiếm"
        component={TabDetailSingerNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Ca Sĩ"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="user" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Nhạc sĩ"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="pencil" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator >
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'TRANG CHỦ' }}
      />

      <TabOneStack.Screen
        name="DetailSongScreen"
        component={DetailSongScreen}
        options={{ headerTitle: 'Bài Hát' }}
      />

    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SingerScreen"
        component={SingerScreen}
        options={{ headerTitle: 'Ca Sĩ' }}
      />

      <TabTwoStack.Screen
        name="DetailSingerScreen"
        component={DetailSingerScreen}
        options={{ headerTitle: 'Chi Tiết Ca Sĩ' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="AuthorScreen"
        component={AuthorScreen}
        options={{ headerTitle: 'Nhạc Sĩ' }}
      />

      <TabThreeStack.Screen
        name="DetailAuthorScreen"
        component={DetailAuthorScreen}
        options={{ headerTitle: 'Chi Tiết Nhạc Sĩ' }}
      />

    </TabThreeStack.Navigator>
  );
}

const TabSearchStack = createStackNavigator<TabSearchParamList>();

function TabDetailSingerNavigator() {
  return (
    <TabSearchStack.Navigator>
      <TabSearchStack.Screen
        name='Search'
        component={SearchScreen}
        options={{ headerTitle: 'Tìm Kiếm' }}
      />
    </TabSearchStack.Navigator>
  );
}



