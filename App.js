import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, useWindowDimensions, Button, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tailwind from 'tailwind-rn';
import { useResponsiveImageView } from 'react-native-responsive-image-view';
import LogoRibbon from './components/LogoRibbon';
import { videos } from './components/videos'

import Svg, {
  Path
} from 'react-native-svg';

export default function App() {


  const videos = [
      {
          "id": 0,
          "title": "ANTARA BENCANA ALAM DAN DARAH PERAWAN",
          "video_url": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/ANTARA%20BENCANA%20ALAM%20DAN%20DARAH%20PERAWAN_1080p.mp4",
          "thumbnail": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/thumbnails/with-watermark/bencana%20alam%20dan%20darah%20perwan.png",
          "thumbnailStatic": require('./assets/images/0.png'),
          "tags": [
              "Menegangkan", "Mencekam", "Hantuuuuuu", "Wkwkwkwk"
          ],
          "categories": [
              "mitos", "cerita-rakyat"
          ]
      },
      {
          "id": 1,
          "title": "MUNCULNYA SATRIO PININGIT",
          "video_url": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/MUNCULNYA%20SATRIO%20PININGIT_1080p.mp4",
          "thumbnail": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/thumbnails/with-watermark/satrio%20piningit.png",
          "thumbnailStatic": require('./assets/images/1.png'),
          "tags": [
              "Kisah Jawa", "Ramalan", "Anak Manusia"
          ],
          "categories": [
              "ramalan", "kisah-jawa"
          ]
      },
      {
          "id": 2,
          "title": "JIMAT POPOK WEWE",
          "video_url": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/JIMAT%20POPOK%20WEWE_1080p.mp4",
          "thumbnail": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/thumbnails/with-watermark/jimat-popok-wewe.png",
          "thumbnailStatic": require('./assets/images/2.png'),
          "tags": [
              "Pesugihan", "Karma", "Kisah", "Kematian"
          ],
          "categories": [
              "pesugihan", "kisah-nyata"
          ]
      },
      {
          "id": 3,
          "title": "DARAH KORBAN KECELAKAAN",
          "video_url": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/DARAH%20KORBAN%20KECELAKAAN_1080p.mp4",
          "thumbnail": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/thumbnails/with-watermark/DARAH%20KORBAN%20KECELAKAAN.png",
          "thumbnailStatic": require('./assets/images/3.png'),
          "tags": [
              "Menegangkan", "Kecelakaan", "Mitos"
          ],
          "categories": [
              "mitos"
          ]
      },
      {
          "id": 4,
          "title": "DENDAM ROH TABRAK LARI",
          "video_url": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/DENDAM%20ROH%20TABRAK%20LARI_1080p.mp4",
          "thumbnail": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/thumbnails/with-watermark/DENDAM%20ROH%20TABRAK%20LARI.png",
          "thumbnailStatic": require('./assets/images/4.png'),
          "tags": [
              "Menegangkan", "Mitos", "Setelah Mati", "Roh"
          ],
          "categories": [
              "mitos"
          ]
      },
      {
          "id": 5,
          "title": "SIMBAH PERNAH MENGALAMI SAKARATUL MAUT",
          "video_url": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/SIMBAH%20PERNAH%20MENGALAMI%20SAKARATUL%20MAUT%20Proses%20Keluarnya%20Roh%20dari%20Jasad%20PART%202_1080p.mp4",
          "thumbnail": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/thumbnails/with-watermark/SAKARATUL%20MAUT%20PT1.png",
          "thumbnailStatic": require('./assets/images/5.png'),
          "tags": [
              "Kematian", "Menegangkan", "Kisah Simbah", "Cerita"
          ],
          "categories": [
              "kisah-nyata", "simbah"
          ]
      },
      {
          "id": 6,
          "title": "SIMBAH vs. HANTU GUNUNG CIREMAI",
          "video_url": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/SIMBAH%20vs%20Hantu%20GUNUNG%20CIREMAI_1080p.mp4",
          "thumbnail": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/thumbnails/with-watermark/simbah%20vs%20gunung%20ciremai,%20eh%20hantu.png",
          "thumbnailStatic": require('./assets/images/6.png'),
          "tags": [
              "Cerita Simbah", "Pertarungan Sengit", "Hantuuuuuu", "Wkwkwkwk"
          ],
          "categories": [
              "kisah-nyata", "simbah"
          ]
      },
      {
          "id": 7,
          "title": "MENCARI ANAK HILANG DENGAN NYANYIAN TAMPAH",
          "video_url": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/MENCARI%20ANAK%20HILANG%20dengan%20NYANYIAN%20TAMPAH_1080p.mp4",
          "thumbnail": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/thumbnails/with-watermark/anak%20hilang%20vs%20tampah%20aowkaowka.png",
          "thumbnailStatic": require('./assets/images/7.png'),
          "tags": [
              "Kisah Rakyat", "Mencekam", "Hantu", "Gak tau apalagi wkwkw"
          ],
          "categories": [
              "mitor", "cerita-rakyat"
          ]
      },
      {
          "id": 8,
          "title": "TEROR ARWAH JANIN DI KOST WANITA",
          "video_url": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/TEROR%20ARWAH%20JANIN%20DI%20KOST%20WANITA_1080p.mp4",
          "thumbnail": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/thumbnails/with-watermark/TEROR%20ARWAH%20JANIN%20KOST%20WANITA.png",
          "thumbnailStatic": require('./assets/images/8.png'),
          "tags": [
              "Teror Ghaib", "Mencekam", "Hantu", "Pengalaman"
          ],
          "categories": [
              "ghaib", "roh"
          ]
      },
      {
          "id": 9,
          "title": "PERJALANAN MANUSIA DARI SEBELUM LAHIR HINGGA KEMATIAN",
          "video_url": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/PERJALANAN%20MANUSIA%20DARI%20SEBELUM%20LAHIR%20HINGGA%20KEMATIANNYA_1080p.mp4",
          "thumbnail": "https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/algoritma-alam/thumbnails/with-watermark/PERJALANAN%20MANUSIA%20DARI%20SEBELUM%20LAHR%20HINGGA%20KEMATIAN.png",
          "thumbnailStatic": require('./assets/images/8.png'),
          "tags": [
              "Kematian", "Setelah Mati", "Cerita", "Perjalananananananan"
          ],
          "categories": [
              "kisah-jawa"
          ]
      }
  ];

  const [ recomendedVideo, setRecomendedVideo ] = useState(videos[0])

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;


  useEffect(() => {
    const videoInterval = setInterval(() => {
      setRecomendedVideo(videos[Math.floor(Math.random() * videos.length)])
    }, 7000)


    randomizeVideo(videos)

    return () => clearInterval(videoInterval)
  }, [])

  const { getViewProps, getImageProps } = useResponsiveImageView({ source: recomendedVideo.thumbnailStatic });

  const recomendedVideoThumbnailHeight = (windowHeight > 800) ? hp('70%') : hp('80%')

  const randomizeVideo = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }



  /**
   * { marginBottom: `${(hp('13%')/recomendedVideoThumbnailHeight) * 100}%`  }
   */


  const renderWatchedVideoCard = ({ item }) => {

    const { thumbnailStatic } = item


    return (
      <View style={tailwind('flex relative')}>
        <View style={[tailwind('absolute inset-0 ml-2 w-6 z-20')]}>
          <Image source={LogoRibbon()} style={tailwind('h-12')}/>
        </View>

        <ImageBackground source={thumbnailStatic} style={tailwind('h-40 w-28 relative')}>
          <Svg style={[tailwind('w-16 h-16 absolute  inset-7')]}  viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M47.5 87.0833C69.3613 87.0833 87.0834 69.3613 87.0834 47.5C87.0834 25.6387 69.3613 7.91666 47.5 7.91666C25.6387 7.91666 7.91669 25.6387 7.91669 47.5C7.91669 69.3613 25.6387 87.0833 47.5 87.0833Z" fill-opacity="0.1" stroke="white" stroke-opacity="0.9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M39.5833 31.6667L63.3333 47.5L39.5833 63.3333V31.6667Z" stroke="white" stroke-opacity="0.9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </Svg>
          <View style={[tailwind('absolute bottom-0 w-full h-0.5 mb-7 z-30'), { backgroundColor: '#8E1013', width: Math.floor(Math.random() * 100) }]} />
          <View style={[tailwind('absolute bottom-0 w-full h-0.5 mb-7 z-20 bg-opacity-40'), { backgroundColor: '#fff' }]} />
          <View style={[tailwind('absolute bottom-0 w-full h-7 flex items-start justify-center px-2'), { backgroundColor: '#101010' }]}>
            <Text style={tailwind('text-white text-sm text-opacity-50')}> {Math.floor(Math.random() * 3) + 1 }j {Math.floor(Math.random() * 59)}m</Text>
          </View>
        </ImageBackground>

      </View>
    )
  }

  const renderVideoCard = ({ item }) => {

    const { thumbnailStatic } = item

    return (
      <View style={tailwind('flex relative')}>
        <View style={[tailwind('absolute inset-0 ml-2 w-6 z-20')]}>
          <Image source={LogoRibbon()} style={tailwind('h-12')}/>
        </View>


        <ImageBackground source={thumbnailStatic} style={tailwind('h-40 w-28 relative')} />

      </View>
    )
  }

  return (
    <>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#181818'}} style={{ backgroundColor: '#181818' }}>
        <View style={{  alignItems: 'center', position: 'relative', marginBottom: windowHeight + (20/100 * recomendedVideoThumbnailHeight) }}>
          <View style={[  styles.recomendedVideo, { height: recomendedVideoThumbnailHeight }  ]}>

            <View style={[tailwind('absolute inset-0 ml-4 w-10 z-20')]}>
              <Image source={LogoRibbon()} style={tailwind('h-20')}/>
            </View>

            <Image {...getImageProps()} />

            <View style={[tailwind('absolute bottom-0 left-0 right-0  flex items-center justify-center mt-2 ml-1 mr-1')]}>
              <Text style={[tailwind('text-white text-opacity-80 text-center font-bold'), { fontSize: 12 }]}>
                { recomendedVideo.tags.join('  •  ') }
              </Text>

              <TouchableOpacity activeOpacity={0.8} style={[tailwind('bg-white w-72 items-center  rounded-sm py-2 my-3 mb-4 '), { backgroundColor: '#8E1013' }]}>
                <View style={tailwind('flex flex-row items-center justify-center')}>
                    <View style={tailwind('w-1/2 h-4 ')}>
                      <Svg viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"  style={[tailwind('ml-12'), { color: '#8E1013' }]}>
                        <Path d="M2.5174 2.75L23.566 14L2.5174 25.25V2.75Z" fill="white" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                      </Svg>
                    </View>
                    <View style={tailwind('w-1/2 h-4')}>
                      <Text style={[tailwind('text-white -ml-2 font-bold')]}>Putar</Text>
                    </View>
                  </View>
              </TouchableOpacity>

            </View>

            <View style={tailwind('px-3 mt-5')}>
              <Text style={tailwind('text-white font-bold')}>Lanjutkan Menonton untuk Mr Shohaib</Text>
              <FlatList
                style={tailwind('mt-2 z-20')}
                horizontal={true}
                data={videos}
                renderItem={renderWatchedVideoCard}
                ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
                showsHorizontalScrollIndicator={false}
              />

              <Text style={tailwind('text-white font-bold mt-2')}>Mitos Atau Fakta</Text>
              <FlatList
                style={tailwind('mt-2 z-20')}
                horizontal={true}
                data={videos.filter((video) => {
                  const { categories } = video
                  return categories.indexOf('mitos') >= 0;
                })}
                renderItem={renderVideoCard}
                ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
              />

              <Text style={tailwind('text-white font-bold mt-2')}>Episode Baru</Text>
              <FlatList
                style={tailwind('mt-2 z-20')}
                horizontal={true}
                data={videos}
                renderItem={renderVideoCard}
                ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
              />

              <Text style={tailwind('text-white font-bold mt-2')}>Kisah Tanah Jawa</Text>
              <FlatList
                style={tailwind('mt-2 z-20')}
                horizontal={true}
                data={videos.filter((video) => {
                  const { categories } = video
                  return categories.indexOf('kisah-jawa') >= 0;
                })}
                renderItem={renderVideoCard}
                ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
              />

              <Text style={tailwind('text-white font-bold mt-2')}>Kisah Perjalanan Simbah</Text>
              <FlatList
                style={tailwind('mt-2 z-20')}
                horizontal={true}
                data={videos.filter((video) => {
                  const { categories } = video
                  return categories.indexOf('simbah') >= 0;
                })}
                renderItem={renderVideoCard}
                ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
              />


            </View>

          </View>

        </View>

      </ScrollView>

      <View style={[tailwind('bottom-0 border-t border-white border-opacity-30 '), { backgroundColor: '#202020', position: 'fixed', height: '7%' }]}>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  recomendedVideo: {
    borderColor: '#181818',
    borderWidth: 2,
    width: wp('100%'),
  },
  videoActions: {
    position: 'absolute',
    bottom: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
