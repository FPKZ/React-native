import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';

export default function Footer() {

    const { theme } = useTheme();
    const navigation = useNavigation();
    return (
        <View className='flex-row justify-between items-center p-5' style={{ backgroundColor: theme.background, borderColor: theme.border, borderTopWidth: 1, borderWidth: 0 }}>
            <View className='flex-row justify-between items-center w-full px-5'>
                <Pressable className='flex justify-center items-center' onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="calendar" size={24} color={theme.text} />
                    <Text>Escalas</Text>
                </Pressable>
                <Pressable className='flex justify-center items-center' onPress={() => navigation.navigate('Trocas')}>
                    <Ionicons name="swap" size={24} color={theme.text} />
                    <Text>Trocas</Text>
                </Pressable>
                <Pressable className='flex justify-center items-center' onPress={() => navigation.navigate('Perfil')}>
                    <Ionicons name="person" size={24} color={theme.text} />
                    <Text>Perfil</Text>
                </Pressable>
            </View>
        </View>
    );
}