import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a2e',
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
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },
    loginButtonText: {
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

export default styles;