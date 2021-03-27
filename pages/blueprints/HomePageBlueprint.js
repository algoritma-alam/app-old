import React, { useState, useEffect } from 'react';
import {  View,SafeAreaView} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { tailwind } from "@resources/tailwind"

export default function( { children } ) {

  return (
    <>
      <SafeAreaView style={ tailwind('flex relative h-full bg-brand-dark items-center') }>
        <View  style={[  tailwind('bg-brand-darker  mt-5 flex items-center justify-between flex-col') , { width: '90%', height: '50%' } ]}>

          <View style={[ { width: '100%' }, tailwind('mt-10 flex flex-row items-center justify-evenly') ]}>
            <View style={[  tailwind('bg-brand-darkest h-3 mb-2'), {width: '20%'}  ]} />
            <View style={[  tailwind('bg-brand-darkest h-3 mb-2'), {width: '20%'}  ]} />
            <View style={[  tailwind('bg-brand-darkest h-3 mb-2'), {width: '40%'}  ]} />
          </View>

          <View style={[{ width: '100%' }, tailwind('flex flex-col justify-end items-center')]}>
            <View style={[  tailwind('bg-brand-darkest h-6 mb-2'), {width: '80%'}  ]} />
            <View style={[ { width: '95%' }, tailwind('flex mb-2 flex-row items-center justify-evenly') ]}>
              <View style={[  tailwind('bg-brand-darkest h-2 '), {width: '10%'}  ]} />
              <View style={[  tailwind('bg-brand-darkest h-2 '), {width: '30%'}  ]} />
              <View style={[  tailwind('bg-brand-darkest h-2 '), {width: '25%'}  ]} />
              <View style={[  tailwind('bg-brand-darkest h-2 '), {width: '15%'}  ]} />
            </View>
            <View style={[  tailwind('bg-brand-darkest h-4 mb-10'), {width: '60%'}  ]} />
          </View>


        </View>
        <View  style={[  tailwind('bg-brand-darker  mt-3') , { width: '60%', height: '4%' } ]}/>

        <View style={[ { width: '95%' }, tailwind('flex mb-2 mt-5  flex-row items-center justify-evenly overflow-hidden') ]}>
          <View style={[  tailwind('bg-brand-darker h-28 w-20 relative') ]}>
            <View style={ tailwind('absolute bottom-0 h-5 w-full bg-brand-darkest') } />
          </View>
          <View style={[  tailwind('bg-brand-darker h-28 w-20 relative') ]}>
            <View style={ tailwind('absolute bottom-0 h-5 w-full bg-brand-darkest') } />
          </View>
          <View style={[  tailwind('bg-brand-darker h-28 w-20 relative') ]}>
            <View style={ tailwind('absolute bottom-0 h-5 w-full bg-brand-darkest') } />
          </View>
          <View style={[  tailwind('bg-brand-darker h-28 w-20 relative') ]}>
            <View style={ tailwind('absolute bottom-0 h-5 w-full bg-brand-darkest') } />
          </View>
        </View>

        <View style={[ { width: '95%' }, tailwind('flex mb-2 mt-5  flex-row items-center justify-evenly overflow-hidden') ]}>
          <View style={[  tailwind('bg-brand-darker h-28 w-20') ]} />
          <View style={[  tailwind('bg-brand-darker h-28 w-20') ]} />
          <View style={[  tailwind('bg-brand-darker h-28 w-20') ]} />
          <View style={[  tailwind('bg-brand-darker h-28 w-20') ]} />
        </View>
      </SafeAreaView>




      { children }
    </>
  )

}
