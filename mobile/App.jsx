import StackRoutes from "./src/routers/stack.routes";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { ThemeProvider, useTheme } from "./src/contexts/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

function AppContent() {
  const { theme } = useTheme();

  return (
    <NavigationContainer
      className="h-full"
      style={{ backgroundColor: theme.background }}
    >
      <View
        className="h-full"
        style={{ flex: 1, backgroundColor: theme.background }}
      >
        <StackRoutes />
      </View>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
/*
NavigationBar.setBackgroundColorAsync('#ffffff'); // Cor branca
NavigationBar.setButtonStyleAsync('dark'); // Ícones escuros

Opções de Personalização:
1. Cor de Fundo (setBackgroundColorAsync)

// Branco
NavigationBar.setBackgroundColorAsync('#ffffff');

// Preto
NavigationBar.setBackgroundColorAsync('#000000');

// Azul
NavigationBar.setBackgroundColorAsync('#3b82f6');

// Transparente (mostra o wallpaper)
NavigationBar.setBackgroundColorAsync('#00000000');

2. Estilo dos Botões (setButtonStyleAsync)

// Ícones escuros (para fundos claros)
NavigationBar.setButtonStyleAsync('dark');

// Ícones claros (para fundos escuros)
NavigationBar.setButtonStyleAsync('light');

3. Visibilidade (Esconder a barra)

// Esconder a navigation bar
NavigationBar.setVisibilityAsync('hidden');

// Mostrar a navigation bar
NavigationBar.setVisibilityAsync('visible');

4. Comportamento (Modo imersivo)

// Modo imersivo - barra aparece ao deslizar
NavigationBar.setBehaviorAsync('overlay-swipe');

// Modo normal
NavigationBar.setBehaviorAsync('inset-swipe');

Exemplo: Mudar cor dinamicamente por tela
Se você quiser cores diferentes para cada tela:

// Em LoginScreen.jsx
useEffect(() => {
    if (Platform.OS === 'android') {
        NavigationBar.setBackgroundColorAsync('#1a1a2e'); // Escuro
        NavigationBar.setButtonStyleAsync('light');
    }
}, []);

// Em HomeTabs
useEffect(() => {
    if (Platform.OS === 'android') {
        NavigationBar.setBackgroundColorAsync('#ffffff'); // Branco
        NavigationBar.setButtonStyleAsync('dark');
    }
}, []);
*/
