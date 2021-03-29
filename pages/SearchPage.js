import React, { useState, useEffect } from 'react';
import {  View, TextInput, Text, TouchableWithoutFeedback, FlatList, Keyboard, useWindowDimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { tailwind, getColor } from "@resources/tailwind"
import VideoCardBlueprint from '@components/VideoCardBlueprint'
import VideoCardCover from '@components/VideoCardCover'
import { SearchIcon } from '@resources/icons'
import videos from '@resources/videos'

export default function({ navigation }) {

    const [ searchQuery, setSearchQuery ] = useState(null)

    const height = useWindowDimensions().height
    const containerPadding = height * 1.3

    const SearchResult = () => {

        const [ resultReady, setResultReady ] = useState(false)

        const resultVideos = videos.filter(v => v.title.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1)

        while(resultVideos.length != 0 && resultVideos.length < 3) {
            resultVideos.push(videos[Math.floor(Math.random() * videos.length)])
        }

        const ResultDescriptor = () => {
            return (resultVideos.length < 1 && resultReady)
                ? (
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={[ tailwind('w-full ') ]}>
                            <Text style={ tailwind('text-white font-semibold') }>Video tidak di temukann  🥺</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
                : (

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={ tailwind('flex flex-row items-start') }>
                        <Text style={ tailwind('text-white font-semibold') }>
                            Hasil pencarian untuk
                        </Text>
                        <Text style={ tailwind('mx-2 text-white font-bold') }>{`"${searchQuery}"`}</Text>
                    </View>
                </TouchableWithoutFeedback>
                )
        }

        useEffect(() => {
            setTimeout(() => setResultReady(true), 1500)
        }, [])

        return (
            <>

            <View style={[ { width: '95%' }, tailwind('flex mb-2 mt-5  flex-col  justify-between ') ]}>

                <ResultDescriptor />

                { resultReady
                       ? <FlatList
                            style={[tailwind('mt-5 z-50 mb-5')]}
                            columnWrapperStyle={[tailwind('flex flex-row justify-between items-start  w-full mb-2')]}
                            numColumns={3}
                            data={resultVideos}
                            renderItem={(item) => (<View><VideoCardCover  video={item} /></View>)}
                            keyExtractor={(item) => item.id}
                        />
                       : <View style={[ { width: '100%' }, tailwind('flex mb-2 mt-5  flex-row items-start justify-between overflow-hidden') ]}>
                            <VideoCardBlueprint />
                            <VideoCardBlueprint />
                            <VideoCardBlueprint />
                            <VideoCardBlueprint />
                        </View>
                }


            </View>

        </>
        )

    }

    return (
        <>
            <StatusBar style="light" />
            <View style={ tailwind('flex relative h-full bg-brand-dark items-center') }>
                <View  style={[  tailwind('bg-brand-darker flex justify-end items-center') , { width: '100%', height: '15%' } ]}>
                    <View style={[{width: '95%'}, tailwind('flex flex-row ')  ]}>
                        <View
                            style={[ tailwind('bg-brand-darkest h-10 rounded-l-lg flex items-center justify-center'), { width: '10%' } ]}
                        >
                            <SearchIcon style={tailwind('text-white text-sm h-5 w-5 opacity-60')}/>
                        </View>
                        <TextInput
                            style={[ tailwind('bg-brand-darkest  px-2 mb-5  h-10 rounded-r-lg text-white text-opacity-60 '), { width: '90%' } ]}
                            onChangeText={(q) => setSearchQuery(q)}
                            value={searchQuery}
                            placeholder="Cari Video"
                            placeholderTextColor={getColor('white opacity-40')}
                        />
                    </View>
                </View>

                {
                    searchQuery
                        ? <SearchResult />
                        : <TouchableWithoutFeedback onPress={Keyboard.dismiss}><View style={{height: '80%', width: '100%'}} /></TouchableWithoutFeedback>
                }

            </View>

        </>
    )

}
