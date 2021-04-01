import React from "react";
import {View, Dimensions, Text, StyleSheet, ViewStyle, FlatList, TouchableOpacity} from 'react-native';

//=========================== Screens ========================
import NewsScreen from '../components/screens/News';
import HomeScreen from '../components/screens/HomeScreen';
import EducationScreen from '../components/screens/Education';
import ProgrammingScreen from '../components/screens/TechScreen';
//===================================================================

import {Ionicons} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const CategoryTabs = createMaterialBottomTabNavigator();

interface Props {

}
const CategoriesTab = (props: Props) => {
    return(
        <CategoryTabs.Navigator screenOptions={{
            tabBarColor: "#171717",
        }}>
            <CategoryTabs.Screen options={{
                tabBarIcon: () => (
                    <Ionicons name="ios-home" color={'rebeccapurple'} size={25} />
                )
            }} name='Home' component={HomeScreen} />

            <CategoryTabs.Screen options={{
                tabBarIcon: () => (
                    <Ionicons name="md-newspaper-outline" color={'rebeccapurple'} size={25} />
                )
             }} name='News' component={NewsScreen} />

            <CategoryTabs.Screen options={{
                tabBarIcon: () => (
                    <Ionicons name="md-logo-windows" color={'rebeccapurple'} size={25} />
                )
             }} name='Tech' component={ProgrammingScreen} />

            <CategoryTabs.Screen options={{
                tabBarIcon: () => (
                    <Ionicons name="school" color={'rebeccapurple'} size={25} />
                )
             }} name='Education' component={EducationScreen} />

        </CategoryTabs.Navigator>
    );
};


export default CategoriesTab;