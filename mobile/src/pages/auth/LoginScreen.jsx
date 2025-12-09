import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../css/login/index.js';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../app/api';
import { useTheme } from '../../contexts/ThemeContext';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('funcionario'); // 'funcionario' | 'empresa'

    const { theme, isDark } = useTheme();

    const handleLogin = () => {
        api.signIn(email, password)
        console.log('Login:', { email, password, userType });
        navigation.navigate('HomeTabs');
        // TODO: Implementar lógica de autenticação
    };

    const handleForgotPassword = () => {    
        console.log('Esqueci minha senha');
        navigation.navigate('Register');
        // TODO: Implementar lógica de recuperação de senha
    };

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                style={{ backgroundColor: theme.background }}
            >
                <View className="flex-1 justify-center">

                    <StatusBar style={isDark ? 'light' : 'dark'} />

                    <View style={styles.header}>
                        <Text style={{...styles.title, color: theme.text}}>Escala Dev</Text>
                        <Text style={{...styles.subtitle, color: theme.text}}>Gestão Inteligente de Turnos</Text>
                    </View>

                    <View style={{...styles.formContainer, backgroundColor: theme.surface}}>
                        <View style={{...styles.typeSelector, backgroundColor: theme.components.typeSelector.backgroundColor}}>
                            <TouchableOpacity
                                style={[styles.typeButton, userType === 'funcionario' && styles.typeButtonActive]}
                                onPress={() => setUserType('funcionario')}
                            >
                                <Text style={[styles.typeText, userType === 'funcionario' && styles.typeTextActive]}>Funcionário</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.typeButton, userType === 'empresa' && styles.typeButtonActive]}
                                onPress={() => setUserType('empresa')}
                            >
                                <Text style={[styles.typeText, userType === 'empresa' && styles.typeTextActive]}>Empresa</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={{...styles.label, color: theme.text}}>Email</Text>
                        <TextInput
                            style={{...styles.input, borderColor: theme.border, backgroundColor: theme.input, color: theme.text}}
                            placeholder="seu@email.com"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />

                        <Text style={{...styles.label, color: theme.text}}>Senha</Text>
                        <TextInput
                            style={{...styles.input, borderColor: theme.border, backgroundColor: theme.input, color: theme.text}}
                            placeholder="********"
                            placeholderTextColor="#999"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={{...styles.loginButtonText, color: theme.text}}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.forgotButton} onPress={handleForgotPassword}>
                            <Text style={{...styles.forgotButtonText, color: theme.text}}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

