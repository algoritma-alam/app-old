import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity, Text, Keyboard} from 'react-native';
import NewHomePage from '@components/NewHomePage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePageBlueprint from '@pages/blueprints/HomePageBlueprint';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tailwind } from "@resources/tailwind"
import SearchPage from '@pages/SearchPage'
import TabNavigation from '@components/TabNavigation'

export default function App() {

    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 1000)
    })

    const HomePageLoader = ({ navigation }) => isLoaded ? <NewHomePage navigation={navigation} /> : <HomePageBlueprint navigation={navigation}/>

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();


    const HomeStack = createStackNavigator();
    const HomeStackScreen = () => {
        return (
            <HomeStack.Navigator
                screenOptions={{
                    headerShown: false}}
            >
                <HomeStack.Screen name="home" component={HomePageLoader}/>
            </HomeStack.Navigator>
        );
    }


    return (
        <NavigationContainer>

            <Tab.Navigator
                tabBar={props => <TabNavigation {...props} />}
                tabBarOptions={{
                    keyboardHidesTabBar: true
                }}
            >
                <Tab.Screen name="home" component={HomeStackScreen}  options={{ title: 'Beranda' }}/>
                <Tab.Screen name="search" component={SearchPage} options={{ title: 'Pencarian' }}/>
                <Tab.Screen name="merch" component={HomePageBlueprint} optionas={{ title: 'Merch' }}/>
                <Tab.Screen name="more" component={HomePageBlueprint}  options={{ title: 'Lainya' }}/>
            </Tab.Navigator>

        </NavigationContainer>
    )
}
