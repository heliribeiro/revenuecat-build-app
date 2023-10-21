import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-red-500 justify-center items-center'>
      <Text className='text-white'>Open up App.tsx to start working on your app!</Text>
      <StatusBar/>
    </SafeAreaView>
  );
}

