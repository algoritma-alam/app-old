import React, { useState, useEffect } from 'react';
import {  View, SafeAreaView, Image, ImageBackground, Text} from 'react-native'
import { tailwind, getColor } from "@resources/tailwind"
import { LinearGradient } from 'expo-linear-gradient';
import videos from '@resources/videos'
import VideoCard from './VideoCard';
import { PlayIcon } from '@resources/icons';

export default function({ category: { item } }) {

  const { name, slug, illustration} = item

  let randomVideos = videos.sort(() => .5 - Math.random()).slice(0,3);


  const SmallVideoCover = ({ style, video: { thumbnailStatic } }) => {

    return (
      <View {...style} style={[tailwind('bg-brand-darkest h-16 w-11 '), {
        shadowColor: getColor('brand-darker'),
        shadowRadius: 5,
        shadowOffset: {
          width: -5,
          height: 3
        },
        shadowOpacity: .90
      }]}  >
          <ImageBackground source={thumbnailStatic} style={tailwind('h-full w-full ')}  />
        </View>
      )
    }

  return (
    <View style={[tailwind('h-64 rounded-lg relative bg-brand-darker w-44 flex  justify-end overflow-hidden')]}>
        <ImageBackground source={illustration}  style={tailwind('w-full h-full')}>
          <LinearGradient colors={['transparent', getColor('brand-dark opacity-80'), getColor('brand-darker')]} style={tailwind('absolute top-0  left-0 right-0 h-full w-full')}>
            <View style={[ tailwind('absolute bottom-0 w-full'), { height: '40%' } ]}>
              <View style={ tailwind('flex justify-between w-full  h-full') }>
                <Text numberOfLines={1} style={ tailwind('text-white font-bold text-sm mx-3') }>{ name.toUpperCase() }</Text>
                <View style={tailwind('flex flex-row items-start justify-between w-full h-full  ')}>
                  <View style={ tailwind('flex flex-row items-start mx-3 h-full w-1/2 mt-2 ml-3') }>
                    {
                      randomVideos.map((v, i) => {
                        return <SmallVideoCover video={v} style={tailwind(`${i !== 0 ? '-ml-7' : ''}`)}/>
                      })
                    }
                  </View>
                  <View style={tailwind(' h-full w-1/2 flex items-center justify-start flex-row')}>
                    <PlayIcon style={tailwind('h-14 w-14 mb-3')}/>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
    </View>
  )
}
