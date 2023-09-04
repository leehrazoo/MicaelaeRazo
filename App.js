import { StatusBar } from "expo-status-bar";
import React from 'react';
import { SafeAreaView,StyleSheet } from "react-native-web";

import LoginScreen from './src/LoginScreen';

const App = () => {
    return (
      <SafeAreaView> 
      <LoginScreen/>
      </SafeAreaView>   
    );
};

const style = StyleSheet.create({
  container : {
    flex:1
  },
});



