import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('funcionario'); // 'funcionario' | 'empresa'

    const handleLogin = () => {
        console.log('Login:', { email, password, userType });
        // TODO: Implementar lógica de autenticação
    };

    const handleForgotPassword = () => {
        console.log('Esqueci minha senha');
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a2e',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#a0a0b0',
    },
    formContainer: {
        backgroundColor: '#16213e',
        marginHorizontal: 20,
        padding: 24,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    typeSelector: {
        flexDirection: 'row',
        backgroundColor: '#0f3460',
        borderRadius: 12,
        padding: 4,
        marginBottom: 24,
    },
    typeButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    typeButtonActive: {
        backgroundColor: '#e94560',
    },
    typeText: {
        color: '#a0a0b0',
        fontWeight: '600',
    },
    typeTextActive: {
        color: '#fff',
    },
    label: {
        color: '#fff',
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#1a1a2e',
        color: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#0f3460',
    },
    loginButton: {
        backgroundColor: '#e94560',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    forgotButton: {
        alignItems: 'center',
        marginTop: 16,
    },
    forgotButtonText: {
        color: '#a0a0b0',
        fontSize: 14,
    },
});
