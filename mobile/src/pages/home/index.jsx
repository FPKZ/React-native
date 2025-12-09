import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeContext";
import CalendarComponent from "../../components/Calendar";

import { useSafeAreaInsets } from "react-native-safe-area-context";

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
          <CalendarComponent />
        </View>
      </ScrollView>
    </>
  );
}
