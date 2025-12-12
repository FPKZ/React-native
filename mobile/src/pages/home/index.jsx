import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeContext";
import CalendarComponent from "../../components/Calendar";
import { Ionicons, FontAwesome6, SimpleLineIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import data from "../../app/data";

export default function Home() {
  const [selectedDay, setSelectedDay] = useState({});
  const navigation = useNavigation();
  const { theme, isDark } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <ScrollView
        style={{ backgroundColor: theme.background }}
        contentContainerStyle={{ paddingBottom: insets.bottom }}
      >
        <View className="p-4">
          <CalendarComponent legends selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
        </View>
        
        <View className="flex items-center justify-between p-4 gap-3">
          <Text className="text-lg font-medium" style={{ color: theme.text }}>{new Date().toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</Text>

          <View className="flex-1 flex-row items-center justify-between">
            <View className="p-3 rounded-lg" style={{ backgroundColor: theme.components.icons.backgroundColor }}>
              <FontAwesome6 name="clock" size={20} color={theme.components.icons.color} />
            </View>
            <View className="flex-1">
              <Text className="ml-2 text-base font-medium" style={{ color: theme.text }}>Turno da Manhã</Text>
              <Text className="ml-2 text-sm font-medium" style={{ color: theme.textSecondary }}>08:00 - 12:00</Text>
            </View>
          </View>

          <View className="flex-1 flex-row items-center justify-between">
            <View className="p-3 rounded-lg" style={{ backgroundColor: theme.components.icons.backgroundColor }}>
              <SimpleLineIcons name="location-pin" size={20} color={theme.components.icons.color} />
            </View>
            <View className="flex-1">
              <Text className="ml-2 text-base font-medium" style={{ color: theme.text }}>Local de Trabalho</Text>
              <Text className="ml-2 text-sm font-medium" style={{ color: theme.textSecondary }}>Rua dos Trabalhadores, 123</Text>
            </View>
          </View>
        </View>

        <View className="p-4">
          <Text className="text-lg font-medium" style={{ color: theme.text }}>Colegas de Equipe</Text>
          {data?.funcionarios?.map((item, index) => (
            <TouchableOpacity key={index} className="flex-row items-center py-4 gap-3">
              <View>
                <Image source={{ uri: item.avatar }} className="w-12 h-12 rounded-full" />
              </View>
              <View>
                <Text className="text-md font-medium" style={{ color: theme.text }}>{item.nome}</Text>
                <Text className="text-sm font-medium" style={{ color: theme.textSecondary }}>{item.cargo}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
