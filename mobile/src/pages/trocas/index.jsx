import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';

export default function Trocas() {
    const navigation = useNavigation();
    const { theme } = useTheme();
    return (
        <ScrollView style={{ backgroundColor: theme.background }}>
            <View className='p-4'>
                <Text className='text-lg' style={{ color: theme.text }}>Página de Trocas</Text>
                {/* Adicione o conteúdo da página aqui */}
            </View>
        </ScrollView>
    );
}