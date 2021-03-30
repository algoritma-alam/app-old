import React, { useState, useEffect } from 'react';
import {  View, SafeAreaView, Image} from 'react-native'
import { tailwind, getColor } from "@resources/tailwind"

export default function() {
  return (
    <View style={[tailwind('h-64 rounded-lg bg-brand-darker w-44 flex  justify-end')]}>
      <View style={[tailwind('w-full h-28 bg-brand-darkest mb-5'), {alignSelf: 'flex-start'}]} />
      <View style={[tailwind('flex flex-col justify-between mb-5'), {width: '100%', height: '40%'}]}>
        <View  style={[tailwind('  bg-brand-darkest h-5'), {width: '85%', marginLeft: '5%'}]}/>
        <View style={[tailwind('w-full  flex flex-row items-center  justify-center'), {height: '70%'}]}>
          <View  style={[tailwind('flex flex-row items-start justify-evenly h-5 w-1/2 h-full')]}>
            <View style={[tailwind('ml-5 bg-brand-darkest w-full h-full')]}/>
          </View>
          <View  style={[tailwind('flex flex-row items-end justify-evenly w-1/2 h-full ')]}>
            <View  style={tailwind('bg-brand-darkest rounded-full w-12 h-12')}/>
          </View>
        </View>
      </View>
    </View>
  )
}
