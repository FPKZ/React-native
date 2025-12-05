# 🌓 Guia de Dark Mode

## Implementação Completa

O app agora suporta **dark mode automático** baseado no tema do sistema!

## 🚀 Como Funciona

### 1. Estrutura de Arquivos

Os temas agora estão separados em arquivos próprios para melhor organização:

- 📁 `src/themes/light.js` - Definições do tema claro
- 📁 `src/themes/dark.js` - Definições do tema escuro
- 📁 `src/contexts/ThemeContext.jsx` - Gerenciador do tema

### 2. ThemeContext

Gerencia o tema em todo o app com:

- ✅ Detecção automática do tema do sistema
- ✅ Importação dos arquivos de tema
- ✅ Atualização automática da navigation bar
- ✅ Hook `useTheme()` para acesso rápido

## 🎨 Cores Disponíveis

### Light Mode (`src/themes/light.js`)

```javascript
export const lightTheme = {
  background: "#f3f4f6",
  surface: "#ffffff",
  primary: "#e94560",
  secondary: "#e5e7eb",
  text: "#111827",
  textSecondary: "#6b7280",
  border: "#d1d5db",
  input: "#ffffff",
  error: "#ef4444",
  success: "#10b981",
  navigationBar: "#ffffff",
  navigationButtons: "dark",

  // Estilos de Componentes
  components: {
    typeSelector: { backgroundColor: "#e5e7eb" },
    typeButton: {
      activeBackgroundColor: "#e94560",
      inactiveBackgroundColor: "transparent",
    },
    typeText: { activeColor: "#ffffff", inactiveColor: "#6b7280" },
    loginButton: { backgroundColor: "#e94560", text: "#ffffff" },
    forgotButton: { text: "#6b7280" },
  },
};
```

### Dark Mode (`src/themes/dark.js`)

```javascript
export const darkTheme = {
  background: "#1a1a2e",
  surface: "#16213e",
  primary: "#e94560",
  secondary: "#0f3460",
  text: "#ffffff",
  textSecondary: "#a0a0b0",
  border: "#0f3460",
  input: "#1a1a2e",
  error: "#f87171",
  success: "#34d399",
  navigationBar: "#1a1a2e",
  navigationButtons: "light",

  // Estilos de Componentes
  components: {
    typeSelector: { backgroundColor: "#0f3460" },
    typeButton: {
      activeBackgroundColor: "#e94560",
      inactiveBackgroundColor: "transparent",
    },
    typeText: { activeColor: "#ffffff", inactiveColor: "#a0a0b0" },
    loginButton: { backgroundColor: "#e94560", text: "#ffffff" },
    forgotButton: { text: "#a0a0b0" },
  },
};
```

## 🧩 Como Usar

### Exemplo Básico

```jsx
import { View, Text } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function MyComponent() {
  const { theme, isDark } = useTheme();

  return (
    <View style={{ backgroundColor: theme.background }}>
      <Text style={{ color: theme.text }}>
        Tema: {isDark ? "Dark" : "Light"}
      </Text>
    </View>
  );
}
```

### Usando Estilos de Componentes

```jsx
import { TouchableOpacity, Text, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function LoginButton() {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.components.loginButton.backgroundColor,
        padding: 16,
        borderRadius: 12,
      }}
    >
      <Text style={{ color: theme.components.loginButton.text }}>Entrar</Text>
    </TouchableOpacity>
  );
}
```

## 🧪 Testar Dark Mode

```javascript
import { Appearance } from "react-native";

Appearance.setColorScheme("dark");
Appearance.setColorScheme("light");
Appearance.setColorScheme(null);
```
