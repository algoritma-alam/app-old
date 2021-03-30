import React, { useState, useEffect } from 'react';
import {  View, SafeAreaView, Image, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { tailwind, getColor } from "@resources/tailwind"
import BackButtonX from '@components/BackButtonX';
import {FlatList} from 'react-native-gesture-handler';
import CategoryCoverBlueprint from '@components/CategoryCoverBlueprint';

export default function( { children, navigation } ) {

  const LogoRibbon = require('@assets/images/logo-ribbon-long.png')

  return (
    <>
      <StatusBar style="light" />
        <SafeAreaView style={ tailwind('flex relative h-full bg-brand-dark  pt-10') }>
          <View style={[tailwind('absolute inset-0  z-20  ')]}>
            <View style={tailwind('flex flex-row justify-between items-center w-full')}>
              <Image source={LogoRibbon} style={[tailwind('ml-5 w-12 h-24'), {resizeMode: 'cover'}]} />
              <BackButtonX style={tailwind('mt-8 mr-5')} onPress={() => navigation.goBack()}/>
            </View>

            <Text style={tailwind('text-white mt-5 ml-5 font-bold text-3xl')}>KATEGORI</Text>
            <FlatList
              style={[tailwind('mt-5 z-50 mb-5 w-full')]}
              columnWrapperStyle={[tailwind('flex flex-row items-center justify-evenly  w-full mb-5')]}
              numColumns={2}
              data={[{}, {}, {}, {}]}
              renderItem={() => <CategoryCoverBlueprint />}
              keyExtractor={() => Math.random()}
          />

        </View>



      </SafeAreaView>



      { children }
    </>
  )

}