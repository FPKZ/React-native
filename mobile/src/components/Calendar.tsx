import { Calendar, LocaleConfig } from "react-native-calendars";
import { useState, useMemo, useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import AnimateSlideDown from "./AnimateSlideDown";

import data from "../app/data";

// Define the param list for navigation
type RootStackParamList = {
  DetalhesTurno: { day: any; data: any };
  [key: string]: any; // Fallback for other routes
};

export default function CalendarComponent({ legends, selectedDay, setSelectedDay }: { legends?: boolean, selectedDay: any, setSelectedDay: (day: any) => void }) {

  const [showLegend, setShowLegend] = useState(legends);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { theme, isDark } = useTheme();

  useEffect(() => {
    const mockData = {
      "2025-12-10": {
        marked: true,
        selected: true,
        selectedColor: getDayColor("work"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
      "2025-12-12": {
        marked: true,
        selected: true,
        selectedColor: getDayColor("extra"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
      "2025-12-14": {
        marked: true,
        selected: true,
        selectedColor: getDayColor("exchange"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
      "2025-12-16": {
        marked: true,
        selected: true,
        selectedColor: getDayColor("noturno"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
      "2025-12-18": {
        marked: true,
        selected: true,
        selectedColor: getDayColor("extraNoturno"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
      "2025-12-20": {
        marked: true,
        selected: true,
        selectedColor: getDayColor("exchangeNoturno"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
      "2025-12-22": {
        marked: false,
        selected: true,
        selectedColor: getDayColor("noturno"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
      "2025-12-24": {
        marked: false,
        selected: true,
        selectedColor: getDayColor("noturno"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
      "2025-12-26": {
        marked: false,
        selected: true,
        selectedColor: getDayColor("noturno"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
      "2025-12-28": {
        marked: false,
        selected: true,
        selectedColor: getDayColor("work"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
      "2025-12-30": {
        marked: false,
        selected: true,
        selectedColor: getDayColor("work"),
        data: { turno: "Turno A Diurno", funcionarios: data.funcionarios },
      },
    };
    setSelectedDay(mockData);
  }, []);

  const getDayColor = (type: string) => {
    switch (type) {
      case "work":
        return theme.calendar.types.workDay;
      case "noturno":
        return theme.calendar.types.noturnoDay;
      case "extra":
        return theme.calendar.types.extraDay;
      case "extraNoturno":
        return theme.calendar.types.extraNoturnoDay;
      case "exchange":
        return theme.calendar.types.exchangeDay;
      case "exchangeNoturno":
        return theme.calendar.types.exchangeNoturnoDay;
      default:
        return theme.calendar.dayTextColor;

    }
  };

  const handleDayPress = (day: any) => {
    navigation.navigate("DetalhesTurno", {
      day,
      data: selectedDay[day.dateString],
    });
    // console.log(selectedDay[day.dateString]);
    // setSelectedDay({... selectedDay, [day.dateString]: {marked: true, selected: true, selectedColor: 'blue'}});
  };

  const calendarTheme = useMemo(() => {
    return {
      ...theme.calendar,
      // Ensure these are set if not present in theme.calendar, or override if needed
      textDayFontWeight: "300" as const,
      textMonthFontWeight: "bold" as const,
      textDayHeaderFontWeight: "300" as const,
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16,
    };
  }, [theme]);

  LocaleConfig.locales["pt"] = configCalendar;
  LocaleConfig.defaultLocale = "pt";

  return (
    <View>
      <Calendar
        key={isDark ? "dark" : "light"}
        onDayPress={day => handleDayPress(day)}
        markedDates={selectedDay}
        theme={calendarTheme}
        enableSwipeMonths={true}
        hideArrows={false}
        hideExtraDays={false}
        showWeekNumbers={false}
        markingType={"custom"}
      />
      {showLegend && (
        <View className="mt-4">
          <AnimateSlideDown
            buttonOpen={
              <View className="flex-row items-center justify-between w-full px-2">
                <Text style={{ color: theme.text }}>Legenda</Text>
                <Ionicons name="chevron-down" size={20} color={theme.text} />
              </View>
            }
            buttonClose={
              <View className="flex-row items-center justify-between w-full px-2">
                <Text style={{ color: theme.text }}>Fechar Legenda</Text>
                <Ionicons name="chevron-up" size={20} color={theme.text} />
              </View>
            }
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 10,
                marginVertical: 10,
                marginHorizontal: 10,
              }}
            >
              <View style={{ gap: 10 }}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <View
                    style={{
                      backgroundColor: theme.calendar.types.workDay,
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                  ></View>
                  <Text style={{ color: theme.calendar.dayTextColor }}>
                    Turno Diurno
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <View
                    style={{
                      backgroundColor: theme.calendar.types.extraDay,
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                  ></View>
                  <Text style={{ color: theme.calendar.dayTextColor }}>
                    Turno Extra Diurno
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <View
                    style={{
                      backgroundColor: theme.calendar.types.exchangeDay,
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                  ></View>
                  <Text style={{ color: theme.calendar.dayTextColor }}>
                    Turno Troca Diurno
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end", gap: 10 }}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Text style={{ color: theme.calendar.dayTextColor }}>
                    Turno Noturno
                  </Text>
                  <View
                    style={{
                      backgroundColor: theme.calendar.types.noturnoDay,
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                  ></View>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Text style={{ color: theme.calendar.dayTextColor }}>
                    Turno Extra Noturno
                  </Text>
                  <View
                    style={{
                      backgroundColor: theme.calendar.types.extraNoturnoDay,
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                  ></View>
                </View>

                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Text style={{ color: theme.calendar.dayTextColor }}>
                    Turno Troca Noturno
                  </Text>
                  <View
                    style={{
                      backgroundColor: theme.calendar.types.exchangeNoturnoDay,
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                  ></View>
                </View>
              </View>
            </View>
          </AnimateSlideDown>
        </View>
      )}
    </View>
  );
}

const configCalendar = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan.",
    "Fev.",
    "Mar.",
    "Abr.",
    "Mai.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Set.",
    "Out.",
    "Nov.",
    "Dez.",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab."],
  today: "Hoje",
};
