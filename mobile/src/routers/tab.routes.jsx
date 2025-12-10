import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { useState } from "react";
import HomeScreen from "../pages/home";
import Perfil from "../pages/perfil";
import Trocas from "../pages/trocas";
import { Header, Footer } from "../layout";
import { useTheme } from "../contexts/ThemeContext";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const [currentTab, setCurrentTab] = useState("Home");

  const { theme, isDark, setIsDark } = useTheme();

  const insets = useSafeAreaInsets();

  // Função para obter o título baseado na tab ativa
  const getTabTitle = (routeName) => {
    switch (routeName) {
      case "HomeTab":
        return "Home";
      case "TrocasTab":
        return "Trocas";
      case "PerfilTab":
        return "Perfil";
      default:
        return "Home";
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, paddingBottom: insets.bottom }}>
      {/* Header fixo */}
      <Header
        buttonLeft={{
          name: "menu",
          color: theme.text,
          bg_active: isDark ? "bg-blue-100" : "bg-slate-800",
          onPress: () => {},
        }}
        buttonRight={{
          name: "settings-outline",
          color: theme.text,
          bg_active: "bg-blue-100",
          onPress: () => setIsDark(!isDark),
        }}
      >
        <Text className="text-2xl font-bold" style={{ color: theme.text }}>
          {currentTab}
        </Text>
      </Header>

      {/* Conteúdo das tabs */}
      <View className="flex-1">
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "HomeTab") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "TrocasTab") {
                iconName = focused
                  ? "swap-horizontal"
                  : "swap-horizontal-outline";
              } else if (route.name === "PerfilTab") {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#3b82f6", // azul quando ativo
            tabBarInactiveTintColor: "#6b7280", // cinza quando inativo
            tabBarStyle: {
              backgroundColor: theme.background,
              borderTopWidth: 1,
              borderBottomWidth: 0,
              borderTopColor: theme.border,
              height: 70,
              paddingBottom: 0,
              paddingTop: 8,
              elevation: 0, // Remove sombra no Android
              shadowOpacity: 0, // Remove sombra no iOS
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "600",
            },
            // Remove animação de transição entre tabs
            animation: "none",
          })}
          screenListeners={{
            state: (e) => {
              // Atualiza o título quando a tab muda
              const currentRoute = e.data.state.routes[e.data.state.index];
              setCurrentTab(getTabTitle(currentRoute.name));
            },
          }}
        >
          <Tab.Screen
            name="HomeTab"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
            }}
          />
          <Tab.Screen
            name="TrocasTab"
            component={Trocas}
            options={{
              tabBarLabel: "Trocas",
            }}
          />
          <Tab.Screen
            name="PerfilTab"
            component={Perfil}
            options={{
              tabBarLabel: "Perfil",
            }}
          />
        </Tab.Navigator>
      </View>

      {/* Footer fixo */}
      {/* <Footer /> */}
    </View>
  );
}
