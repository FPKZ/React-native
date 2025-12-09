import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from '../../layout';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';

export default function DetalhesTurno() {
    const route = useRoute();
    const { day } = route.params || {};
    const navigation = useNavigation();
    const { theme, isDark } = useTheme();
    
    return (
        <View className='flex-1' style={{ backgroundColor: theme.background }}>
            <StatusBar style={isDark ? 'light' : 'dark'} />
            <Header buttonLeft={{
                name: "arrow-back-sharp",
                color: theme.text,
                bg_active: "bg-blue-100",
                onPress: () => navigation.goBack()
            }}>
                <Text style={{ color: theme.text }}>Turno</Text>
            </Header>
            <ScrollView>
                <View className='p-4'>
                    <Text className='text-2xl font-bold mb-4' style={{ color: theme.text }}>Detalhes do Turno</Text>
                    {day && (
                        <View className='p-4 rounded-lg' style={{ backgroundColor: theme.background }}>
                            <Text className='text-lg' style={{ color: theme.text }}>Data selecionada:</Text>
                            <Text className='text-xl font-semibold' style={{ color: theme.text }}>{day.dateString}</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}