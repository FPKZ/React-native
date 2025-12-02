import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../css/login/index.js';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('funcionario'); // 'funcionario' | 'empresa'

    const handleLogin = () => {
        console.log('Login:', { email, password, userType });
        // TODO: Implementar lógica de autenticação
    };

    const handleForgotPassword = () => {    
        console.log('Esqueci minha senha');
        navigation.navigate('Register');
        // TODO: Implementar lógica de recuperação de senha
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <StatusBar style="light" />

            <View style={styles.header}>
                <Text style={styles.title}>Escala Dev</Text>
                <Text style={styles.subtitle}>Gestão Inteligente de Turnos</Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.typeSelector}>
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

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="seu@email.com"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="********"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotButton} onPress={handleForgotPassword}>
                    <Text style={styles.forgotButtonText}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

