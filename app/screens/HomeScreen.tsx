import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-100 relative'>
      <ScrollView>
        <TouchableOpacity className='absolute z-50 top-5 right-10  items-center'>
          <Ionicons name='person-circle' size={24} color='#e5962d' />
          <Text className='text-center text-[#e5962d]'>PRO</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://i.imgur.com/e14NE49.png' }}
          className='w-full h-64'
        />
        <View></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen