🌓 Guia de Dark Mode
Implementação Completa
O app agora suporta dark mode automático baseado no tema do sistema!

Como Funciona
1. ThemeContext (
src/contexts/ThemeContext.jsx
)
Gerencia o tema em todo o app com:

✅ Detecção automática do tema do sistema
✅ Cores predefinidas para light e dark mode
✅ Configuração automática da navigation bar
✅ Hook 
useTheme()
 para fácil acesso
2. Cores Disponíveis
Light Mode
{
  background: '#ffffff',
  surface: '#f5f5f5',
  primary: '#3b82f6',
  secondary: '#6b7280',
  text: '#1f2937',
  textSecondary: '#6b7280',
  border: '#e5e7eb',
  error: '#ef4444',
  success: '#10b981',
}
Dark Mode
{
  background: '#1a1a2e',
  surface: '#16213e',
  primary: '#60a5fa',
  secondary: '#9ca3af',
  text: '#f9fafb',
  textSecondary: '#d1d5db',
  border: '#374151',
  error: '#f87171',
  success: '#34d399',
}
Como Usar nos Componentes
Exemplo Básico
import { View, Text } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
export default function MyComponent() {
  const { theme, isDark } = useTheme();
  return (
    <View style={{ backgroundColor: theme.background }}>
      <Text style={{ color: theme.text }}>
        Olá! Tema atual: {isDark ? 'Dark' : 'Light'}
      </Text>
    </View>
  );
}
Exemplo com Estilos Dinâmicos
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
export default function Card() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.surface,
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 8,
      padding: 16,
    },
    title: {
      color: theme.text,
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      color: theme.textSecondary,
      fontSize: 14,
    },
  });
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Título do Card</Text>
      <Text style={styles.description}>Descrição do card</Text>
    </View>
  );
}
Exemplo com Tailwind CSS (NativeWind)
import { View, Text } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
export default function MyComponent() {
  const { isDark } = useTheme();
  return (
    <View className={isDark ? 'bg-gray-900' : 'bg-white'}>
      <Text className={isDark ? 'text-white' : 'text-gray-900'}>
        Texto adaptável
      </Text>
    </View>
  );
}
Atualizar Componentes Existentes
Header
import { useTheme } from '../../contexts/ThemeContext';
export default function Header({ buttonLeft, buttonRight, children }) {
  const { theme } = useTheme();
  
  return (
    <View style={{ 
      backgroundColor: theme.background,
      borderBottomColor: theme.border,
    }}>
      {/* ... resto do código */}
    </View>
  );
}
Footer
import { useTheme } from '../../contexts/ThemeContext';
export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <View style={{ 
      backgroundColor: theme.background,
      borderTopColor: theme.border,
    }}>
      {/* ... resto do código */}
    </View>
  );
}
Personalizar Cores
Edite 
src/contexts/ThemeContext.jsx
:

const lightTheme = {
  background: '#ffffff',
  primary: '#3b82f6', // Mude para sua cor primária
  // ... outras cores
};
const darkTheme = {
  background: '#1a1a2e',
  primary: '#60a5fa', // Versão mais clara para dark mode
  // ... outras cores
};
Testar Dark Mode
No Simulador/Emulador:
iOS:

Settings → Developer → Dark Appearance
Android:

Settings → Display → Dark theme
Programaticamente (para testes):
import { Appearance } from 'react-native';
// Forçar dark mode
Appearance.setColorScheme('dark');
// Forçar light mode
Appearance.setColorScheme('light');
// Voltar ao padrão do sistema
Appearance.setColorScheme(null);
Benefícios
✅ Automático - Detecta e muda com o tema do sistema
✅ Consistente - Cores centralizadas em um único lugar
✅ Fácil de usar - Hook simples 
useTheme()

✅ Navigation Bar - Atualiza automaticamente no Android
✅ Personalizável - Fácil adicionar/modificar cores
✅ Performance - Usa Context API do React (eficiente)