import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../../css/login/index.js';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function EsqueciSenha() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const { theme, isDark } = useTheme();

    const handleRecuperarSenha = () => {
        console.log('Login:', { email, password, userType });
        // TODO: Implementar lógica de autenticação
    };


    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                style={{ ...styles.container, backgroundColor: theme.background }}
            >
                <View className="flex-1 justify-center">
                    <StatusBar style={isDark ? 'light' : 'dark'} />

                    <View style={{ ...styles.header, backgroundColor: theme.background }}>
                        <Text style={{ ...styles.title, color: theme.text }}>Escala Dev</Text>
                        <Text style={{ ...styles.subtitle, color: theme.text }}>Gestão Inteligente de Turnos</Text>
                    </View>

                    <View style={{ ...styles.formContainer, backgroundColor: theme.surface }}>
                        <Text style={{ ...styles.label, color: theme.text }}>Email</Text>
                        <TextInput
                            style={{ ...styles.input,borderColor: theme.border, backgroundColor: theme.input, color: theme.text }}
                            placeholder="seu@email.com"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />


                        <TouchableOpacity style={{ ...styles.loginButton, ...theme.components.loginButton }} onPress={handleRecuperarSenha}>
                            <Text style={{ ...styles.loginButtonText, color: theme.components.loginButton.text }}>Recuperar Senha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ ...styles.forgotButton, backgroundColor: theme.surface }} onPress={() => navigation.navigate('Login')}>
                            <Text style={{ ...styles.forgotButtonText, color: theme.textSecondary }}>Voltar para Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}