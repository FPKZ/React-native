import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Trocas() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View className='p-4'>
                <Text className='text-lg'>Página de Trocas</Text>
                {/* Adicione o conteúdo da página aqui */}
            </View>
        </ScrollView>
    );
}