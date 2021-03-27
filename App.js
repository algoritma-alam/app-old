import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import HomePage from './components/HomePage'
import FloatingMenu from './components/FloatingMenu'
import NewHomePage from '@components/NewHomePage';

export default function App() {

    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {

    })


    return (
        <>
            <View>
                {
                    isLoaded
                    ? <>
                        <HomePage>
                            <FloatingMenu />
                        </HomePage>
                      </>
                    : <>
                        <NewHomePage>
                            <FloatingMenu />
                        </NewHomePage>
                      </>
                }
            </View>
        </>
    )
}
