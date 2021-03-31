import React, { useState, useEffect } from 'react';
import {  View, SafeAreaView, Image} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { tailwind, getColor } from "@resources/tailwind"
import { TimesIcon } from '@resources/icons'
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function({ onPress, style }) {

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View  style={[tailwind('rounded-full bg-brand-darker bg-opacity-50 w-7 h-7 flex items-center justify-center'), {...style}]}>
          <TimesIcon style={[tailwind('h-6 w-6 text-white opacity-70 ')]} fill={getColor('brand-darkest')} />
      </View>
    </TouchableOpacity>
  )

}
