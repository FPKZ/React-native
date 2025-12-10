import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/auth/LoginScreen";
import EsqueciSenha from "../pages/auth/EsqueciSenha";
import DetalhesTurno from "../pages/detalhesTurno";
import Notificacao from "../pages/notificacao";
import TabRoutes from "./tab.routes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      className="h-full"
    >
      {/* Rotas de autenticação - animação fade */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          animation: "fade",
          animationDuration: 300,
        }}
      />
      <Stack.Screen
        name="Register"
        component={EsqueciSenha}
        options={{
          animation: "fade",
          animationDuration: 300,
        }}
      />

      {/* Tab Navigator - Home, Trocas, Perfil (sem animação entre tabs) */}
      <Stack.Screen
        name="HomeTabs"
        component={TabRoutes}
        options={{
          animation: "slide_from_right",
          animationDuration: 400,
        }}
      />

      {/* Outras rotas - animação slide from bottom */}
      <Stack.Screen
        name="DetalhesTurno"
        component={DetalhesTurno}
        options={{
          animation: "slide_from_bottom",
          animationDuration: 500,
        }}
      />
      <Stack.Screen
        name="ChatTroca"
        component={require("../pages/trocas/ChatTroca").default}
        options={{
          animation: "slide_from_right",
          animationDuration: 300,
        }}
      />
      <Stack.Screen
        name="Notificacao"
        component={Notificacao}
        options={{
          animation: "slide_from_right",
          animationDuration: 300,
        }}
      />
    </Stack.Navigator>
  );
}
