import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
    const navigation = useNavigation();
    return (
        <View className='flex-row justify-between items-center p-5 border-t border-gray-300'>
            <View className='flex-row justify-between items-center w-full px-5'>
                <Pressable className='flex justify-center items-center' onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="calendar" size={24} color="#1a1a2e" />
                    <Text>Escalas</Text>
                </Pressable>
                <Pressable className='flex justify-center items-center' onPress={() => navigation.navigate('Trocas')}>
                    <Ionicons name="swap" size={24} color="#1a1a2e" />
                    <Text>Trocas</Text>
                </Pressable>
                <Pressable className='flex justify-center items-center' onPress={() => navigation.navigate('Perfil')}>
                    <Ionicons name="person" size={24} color="#1a1a2e" />
                    <Text>Perfil</Text>
                </Pressable>
            </View>
        </View>
    );
}