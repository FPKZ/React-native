import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeContext";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Perfil() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={{ paddingBottom: insets.bottom }}
    >
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4" style={{ color: theme.text }}>
          Perfil do Usuário
        </Text>
        {/* Adicione o conteúdo do perfil aqui */}
      </View>
    </ScrollView>
  );
}
