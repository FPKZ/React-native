import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from '../../layout';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function DetalhesTurno() {
    const route = useRoute();
    const { day } = route.params || {};
    const navigation = useNavigation();
    
    return (
        <View className='flex-1 bg-white'>
            <StatusBar style="auto" />
            <Header buttonLeft={{
                name: "arrow-back-sharp",
                color: "blue",
                bg_active: "bg-blue-100",
                onPress: () => navigation.goBack()
            }}>
                <Text>Turno</Text>
            </Header>
            <ScrollView>
                <View className='p-4'>
                    <Text className='text-2xl font-bold mb-4'>Detalhes do Turno</Text>
                    {day && (
                        <View className='bg-gray-100 p-4 rounded-lg'>
                            <Text className='text-lg'>Data selecionada:</Text>
                            <Text className='text-xl font-semibold'>{day.dateString}</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}