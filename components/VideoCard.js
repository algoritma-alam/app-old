import React from 'react';
import { Image, ImageBackground, View, Text, TouchableOpacity} from 'react-native'
import { tailwind } from "@resources/tailwind"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Svg, {
  Path
} from 'react-native-svg';

export default function VideoCard(props) {

  const { video: { item } } = props
  const { thumbnailStatic, id } = item

  const { style } = props

  const EmptyVideoCard = () => {
      return (
          <View style={[tailwind('h-40  relative'), { width: wp(86/3) }]} />
      )
  }

  const LogoRibbon = require('@assets/images/logo-ribbon.png')
  return (id !== undefined)
    ? (
        <View style={[tailwind('flex relative'), { width: wp(87/3), marginBottom: hp(1) }]} {...style}>
          <View style={[tailwind('absolute left-1 top-0  z-20')]}>
            <Image source={LogoRibbon} style={[tailwind('h-8 w-8'), { resizeMode: 'center' }]}/>
          </View>

          <ImageBackground source={thumbnailStatic} style={[tailwind('h-40 relative w-full')]}  />

        </View>
    )
    : <EmptyVideoCard />
}
