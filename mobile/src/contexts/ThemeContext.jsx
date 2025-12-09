import { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme, Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";

// Cria o contexto
const ThemeContext = createContext({
  theme: darkTheme,
  isDark: false,
  colorScheme: "light",
});

// Hook para usar o tema em qualquer componente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return context;
};

// Provider do tema
export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");
  const theme = isDark ? darkTheme : lightTheme;

  // Sincroniza com o tema do sistema quando ele muda
  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  // Configura a navigation bar quando o tema muda
  useEffect(() => {
    if (Platform.OS === "android") {
      // Com edge-to-edge habilitado, apenas o estilo dos botões pode ser alterado
      // setBackgroundColorAsync não é suportado com edge-to-edge
      NavigationBar.setButtonStyleAsync(theme.navigationButtons);
    }
  }, [isDark, theme]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, colorScheme, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
