import { View, Text, ScrollView, KeyboardAvoidingView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <StatusBar style="auto" />
                <View className='flex-1 flex-row justify-between items-center p-5 h-fit border-b border-gray-300' style={{ marginTop: statusBarHeight }}>
                    <Pressable className='bg-gray-200 p-2 rounded-full'>
                        <Ionicons name="menu" size={24} color="#color-blue-900" />
                    </Pressable>
                    <Text className='text-2xl font-bold'>Home</Text>
                    <Pressable className='bg-gray-200 p-2 rounded-full active:bg-gray-300'>
                        <Ionicons name="home" size={24} color="#color-blue-900" />
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView> 
    );
}