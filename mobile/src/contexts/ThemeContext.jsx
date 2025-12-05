import { createContext, useContext, useEffect } from 'react';
import { useColorScheme, Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { lightTheme } from '../themes/light';
import { darkTheme } from '../themes/dark';

// Cria o contexto
const ThemeContext = createContext({
  theme: lightTheme,
  isDark: false,
  colorScheme: 'light',
});

// Hook para usar o tema em qualquer componente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
};

// Provider do tema
export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const isDark = colorScheme === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    // Configura a navigation bar quando o tema muda
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync(theme.navigationBar);
      NavigationBar.setButtonStyleAsync(theme.navigationButtons);
    }
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, colorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
