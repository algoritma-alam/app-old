import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { tailwind } from "@resources/tailwind"
import { MoreIcon, MerchIcon, AlgoritmaAlamNoBackground, SearchIcon } from "@resources/icons"


export default function FloatingMenu() {

  const [ activeMenu, setActiveMenu ] = useState(0)

  const menuItems = [
    {
      text: '',
      icon: AlgoritmaAlamNoBackground,
      isMainMenu: true
    },
    {
      text: 'Merch',
      icon: MerchIcon,
      isMainMenu: false
    },
    {
      text: 'Search',
      icon: SearchIcon,
      isMainMenu: false
    },
    {
      text: 'More',
      icon: MoreIcon,
      isMainMenu: false
    },
  ]

  const MainMenuInactive = (menu, key) => {

    return (

      <TouchableOpacity onPress={() => setActiveMenu(0) } key={key}>
        <View style={[ tailwind() ]}  >
          <View style={ tailwind('p-0.5') }>
            <AlgoritmaAlamNoBackground style={[ tailwind('h-10 w-10'), { resizeMode: 'center' }]} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }


  const MainMenuActive = (menu, key) => {

    return (
      <View style={[ tailwind() ]} key={key} >
        <View style={[ tailwind('bg-brand p-0.5 ')]}>
          <AlgoritmaAlamNoBackground style={[ tailwind('h-10 w-10'), { resizeMode: 'center' }]} />
        </View>
      </View>
    )
  }

  return (<>
      <View
        style={[tailwind(' border-t border-white border-opacity-30  absolute bottom-0 z-30  left-0 right-0 bg-brand-dark overflow-hidden '), { height: '8%'}]}
      >

      <View style={[ tailwind(''), { height: '100%' } ]}>
        <View style={[ tailwind('flex mx-5 items-start flex-row justify-between my-2')]}>

            {
              menuItems.map((menu, index) => {
                const { text, icon, isMainMenu } = menu

                const RenderableIcon = icon

                return (index == activeMenu)
                  ? (
                     ( isMainMenu )
                      ? <MainMenuActive menu={menu} key={index}/>
                      : <>
                          <View style={[ tailwind('w-28 px-5 flex  items-center justify-center h-4/5') ]} key={index} >
                              <RenderableIcon style={ tailwind('text-white h-6 w-6') } />
                              <Text style={ tailwind('text-white text-xxs mt-1') }>{ text }</Text>
                          </View>
                        </>
                  )
                  : (

                     ( isMainMenu )
                      ? <MainMenuInactive menu={menu} key={index}/>
                      : <>
                          <TouchableOpacity onPress={() => setActiveMenu(index) } key={index}>
                            <View style={[ tailwind('w-28 px-5  flex  items-center justify-center h-4/5') ]}  >
                                <RenderableIcon style={ tailwind('text-white opacity-50 h-6 w-6') } />
                                <Text style={ tailwind('text-white opacity-50 text-xxs mt-1') }>{ text }</Text>
                            </View>
                          </TouchableOpacity>
                        </>
                )
              })
            }

        </View>
      </View>


      </View>
    </>)
}
