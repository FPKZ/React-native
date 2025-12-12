import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../layout";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeContext";
import {
  FontAwesome6,
  SimpleLineIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function DetalhesTurno() {
  const route = useRoute();
  const { day, data } = route.params || {};
  const navigation = useNavigation();
  const { theme, isDark } = useTheme();

  console.log(data);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const formatted = date.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <View className="flex-1" style={{ backgroundColor: theme.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Header
        buttonLeft={{
          name: "arrow-back-sharp",
          color: theme.text,
          bg_active: "bg-blue-100",
          onPress: () => navigation.goBack(),
        }}
      >
        <Text style={{ color: theme.text }}>Detalhes do Turno</Text>
      </Header>
      <ScrollView>
        <View className="flex items-start justify-between p-4 gap-3">
          <Text className="text-lg font-medium " style={{ color: theme.text }}>
            {formatDate(day?.dateString)}.
          </Text>

          <View className="flex-1 flex-row items-center justify-between">
            <View
              className="p-3 rounded-lg"
              style={{
                backgroundColor: theme.components.icons.backgroundColor,
              }}
            >
              <FontAwesome6
                name="clock"
                size={20}
                color={theme.components.icons.color}
              />
            </View>
            <View className="flex-1">
              <Text
                className="ml-2 text-base font-medium"
                style={{ color: theme.text }}
              >
                Turno da Manhã
              </Text>
              <Text
                className="ml-2 text-sm font-medium"
                style={{ color: theme.textSecondary }}
              >
                08:00 - 12:00
              </Text>
            </View>
          </View>

          <View className="flex-1 flex-row items-center justify-between">
            <View
              className="p-3 rounded-lg"
              style={{
                backgroundColor: theme.components.icons.backgroundColor,
              }}
            >
              <SimpleLineIcons
                name="location-pin"
                size={20}
                color={theme.components.icons.color}
              />
            </View>
            <View className="flex-1">
              <Text
                className="ml-2 text-base font-medium"
                style={{ color: theme.text }}
              >
                Local de Trabalho
              </Text>
              <Text
                className="ml-2 text-sm font-medium"
                style={{ color: theme.textSecondary }}
              >
                Rua dos Trabalhadores, 123
              </Text>
            </View>
          </View>
          <View className="flex-1 flex-row items-center justify-between">
            <View
              className="p-3 rounded-lg"
              style={{
                backgroundColor: theme.components.icons.backgroundColor,
              }}
            >
              <MaterialIcons
                name="date-range"
                size={20}
                color={theme.components.icons.color}
              />
            </View>
            <View className="flex-1">
              <Text
                className="ml-2 text-base font-medium"
                style={{ color: theme.text }}
              >
                Escala do Turno
              </Text>
              <Text
                className="ml-2 text-sm font-medium"
                style={{ color: theme.textSecondary }}
              >
                Escala padrão
              </Text>
            </View>
          </View>
        </View>

        <View className="p-4">
          <Text className="text-lg font-medium" style={{ color: theme.text }}>
            Equipe do Turno
          </Text>
          {data?.data?.funcionarios?.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center py-2 gap-3"
            >
              <View>
                <Image
                  source={{ uri: item.avatar }}
                  className="w-12 h-12 rounded-full"
                />
              </View>
              <View>
                <Text
                  className="text-md font-medium"
                  style={{ color: theme.text }}
                >
                  {item.nome}
                </Text>
                <Text
                  className="text-sm font-medium"
                  style={{ color: theme.textSecondary }}
                >
                  {item.cargo}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
