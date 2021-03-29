import React from 'react';
import { Image, ImageBackground, View, Text, TouchableOpacity} from 'react-native'
import { tailwind } from "@resources/tailwind"
import Svg, {
  Path
} from 'react-native-svg';

export default function WatchedVideoCard({ video: { item } }) {


  const { thumbnailStatic, id } = item

  const LogoRibbon = require('@assets/images/logo-ribbon.png')
    return (
        <View style={tailwind('flex relative')}>
          <View style={[tailwind('absolute left-1 top-0  z-20')]}>
            <Image source={LogoRibbon} style={[tailwind('h-8 w-8'), { resizeMode: 'center' }]}/>
          </View>

          <ImageBackground source={thumbnailStatic} style={tailwind('h-40 w-28 relative')}>
            <TouchableOpacity>
              <Svg style={[tailwind('w-16 h-16 absolute  inset-7')]}  viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M47.5 87.0833C69.3613 87.0833 87.0834 69.3613 87.0834 47.5C87.0834 25.6387 69.3613 7.91666 47.5 7.91666C25.6387 7.91666 7.91669 25.6387 7.91669 47.5C7.91669 69.3613 25.6387 87.0833 47.5 87.0833Z" fill-opacity="0.1" stroke="white" stroke-opacity="0.9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M39.5833 31.6667L63.3333 47.5L39.5833 63.3333V31.6667Z" stroke="white" stroke-opacity="0.9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </Svg>
            </TouchableOpacity>
            <View style={[tailwind('absolute bottom-0 w-full h-0.5 mb-7 z-30'), { backgroundColor: '#8E1013', width: Math.floor(Math.random() * 100) }]} />
            <View style={[tailwind('absolute bottom-0 w-full h-0.5 mb-7 z-20 bg-opacity-40'), { backgroundColor: '#fff' }]} />
            <View style={[tailwind('absolute bottom-0 w-full h-7 flex items-start justify-center px-2'), { backgroundColor: '#101010' }]}>
              <Text style={tailwind('text-white text-sm text-opacity-50')}> {Math.floor(Math.random() * 3) + 1 }j {Math.floor(Math.random() * 59)}m</Text>
            </View>
          </ImageBackground>

        </View>
    )
}
