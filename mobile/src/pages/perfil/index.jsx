import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View className='p-4'>
                <Text className='text-2xl font-bold mb-4'>Perfil do Usuário</Text>
                {/* Adicione o conteúdo do perfil aqui */}
            </View>
        </ScrollView>
    );
}