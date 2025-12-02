import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../../css/login/index.js';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function EsqueciSenha() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

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
                style={styles.container}
            >
                <View className="flex-1 justify-center">
                    <StatusBar style="light" />

                    <View style={styles.header}>
                        <Text style={styles.title}>Escala Dev</Text>
                        <Text style={styles.subtitle}>Gestão Inteligente de Turnos</Text>
                    </View>

                    <View style={styles.formContainer}>
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


                        <TouchableOpacity style={styles.loginButton} onPress={handleRecuperarSenha}>
                            <Text style={styles.loginButtonText}>Recuperar Senha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.forgotButtonText}>Voltar para Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}