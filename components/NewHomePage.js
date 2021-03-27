import React, { useState, useEffect } from 'react';
import { Animated, ScrollView, View, Text, SafeAreaView, useWindowDimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { tailwind } from "@resources/tailwind"
import HomePageBlueprint from '@pages/blueprints/HomePageBlueprint'


export default function( { children } ) {

  return (
    <>
      <StatusBar style="light" />

      <HomePageBlueprint />

      { children }
    </>
  )

}
