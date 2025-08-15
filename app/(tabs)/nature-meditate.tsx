import AppGradient from '@/components/AppGradient'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import { MEDITATION_DATA } from '@/constants/meditationData'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, ImageBackground, Pressable, Text, View } from 'react-native'


const natureMeditate = () => {
  
  return (
    <View className='flex-1'>
        <AppGradient 
            colors={["#161b2e", "#0a4d4a", "#766e67"]}
        >
            <View className='mb-6'>
                <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome Adedeji</Text>
                <Text className='text-indigo-100 text-xl font-medium'>Start you meditation practice today</Text>
            </View>
            <View>
              <FlatList 
                className='mb-20'
                data={MEDITATION_DATA}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <Pressable 
                    className='h-48 my-3 rounded-md overflow-hidden'
                    onPress={() => router.push(`/meditate/${item.id}` as any)}
                  >
                    <ImageBackground
                      source={MEDITATION_IMAGES[item.id - 1]}
                      resizeMode='cover'
                      className='flex-1 rounded-lg justify-center'
                    >
                      <LinearGradient 
                        colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
                        className='flex-1 justify-center items-center'
                        >
                           <Text className='text-gray-100 text-3xl text-center font-bold'>{item.title}</Text>
                      </LinearGradient>
                    </ImageBackground>
                  </Pressable>
                )}
          
              />
            </View>
        </AppGradient>
        <StatusBar style="light" />
    </View>
  )
}

export default natureMeditate