import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Pressable, View } from 'react-native';
import { ComponentProps } from 'react';

interface HeaderProps {
    buttonLeft?: {
        name: ComponentProps<typeof Ionicons>['name']; // qualquer nome de icone valido do Ionicons
        color: string | "black" | "white" | "blue"; // cor do icone
        bg_active: string | "bg-slate-100" | "bg-blue-100"; // cor do icone quando ativo
        onPress?: () => void; // funcao para quando o icone for pressionado
    };
    buttonRight?: {
        name: ComponentProps<typeof Ionicons>['name']; // qualquer nome de icone valido do Ionicons
        color: string | "black" | "white" | "blue"; // cor do icone
        bg_active: string | "bg-slate-100" | "bg-blue-100"; // cor do icone quando ativo
        onPress?: () => void; // funcao para quando o icone for pressionado
    };
    children: React.ReactNode;
}

export default function Header({buttonLeft, buttonRight, children }: HeaderProps) {
    const navigation = useNavigation()
    const statusBarHeight = Constants.statusBarHeight;
    return (
        <View className='flex-row justify-between items-center p-5 border-b border-gray-300 position-relative' style={{ marginTop: statusBarHeight }}>
            {buttonLeft && (
                <View className='flex-row items-center absolute left-4'>
                    <Pressable className={`p-2 rounded-full active:${buttonLeft.bg_active}`} onPress={() => {buttonLeft?.onPress ? buttonLeft.onPress() : navigation.goBack()}}>
                        <Ionicons name={buttonLeft.name} size={24} color={buttonLeft.color} />
                    </Pressable>
                </View>
            )}
            <View className='flex-1 items-center'>
                {children}
            </View>
            {buttonRight && (
                <View className='flex-row items-center absolute right-4'>
                    <Pressable className={`p-2 rounded-full active:${buttonRight.bg_active}`} onPress={() => buttonRight?.onPress ? buttonRight.onPress() : navigation.goBack()}>
                        <Ionicons name={buttonRight.name} size={24} color={buttonRight.color} />
                    </Pressable>
                </View>
            )}
        </View>
    );
}