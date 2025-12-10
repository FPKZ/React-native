import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// Mock Data
const MOCK_DATA = [
  {
    id: 1,
    name: "João Souza",
    status: "accepted",
    date: "30 de Setembro",
    userInitials: "JS",
    userColor: "bg-blue-100",
  },
  {
    id: 2,
    name: "Maria Silva",
    status: "pending",
    date: "02 de Outubro",
    userInitials: "MA",
    userColor: "bg-yellow-100",
  },
  {
    id: 3,
    name: "Carlos Pereira",
    status: "rejected",
    date: "05 de Outubro",
    userInitials: "CP",
    userColor: "bg-red-100",
  },
  {
    id: 4,
    name: "Lúcia Santos",
    status: "waiting",
    date: "11 de Outubro",
    userInitials: "LA",
    userColor: "bg-purple-100",
  },
];

export default function Trocas() {
  const navigation = useNavigation();
  const { theme, isDark } = useTheme();
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState("minhas"); // 'minhas' | 'para_mim'

  const StatusBadge = ({ status }) => {
    const statusConfig = theme.status[status];
    return (
      <View
        style={{ backgroundColor: statusConfig.background }}
        className="px-3 py-1 rounded-full"
      >
        <Text
          style={{ color: statusConfig.text }}
          className="text-xs font-bold"
        >
          {statusConfig.label}
        </Text>
      </View>
    );
  };

  const ExchangeCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ChatTroca", { item })}
      style={{ backgroundColor: theme.card }}
      className="p-4 rounded-2xl mb-3 flex-row items-center shadow-sm"
    >
      {/* Avatar */}
      <View
        className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${item.userColor}`}
      >
        <Text className="text-blue-600 font-bold text-lg">
          {item.userInitials}
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 mr-2">
        <Text
          style={{ color: theme.text }}
          className="font-bold text-base mb-1"
        >
          Troca com {item.name}
        </Text>
        <Text style={{ color: theme.textSecondary }} className="text-sm">
          Seu turno: {item.date}
        </Text>
      </View>

      {/* Badge */}
      <StatusBadge status={item.status} />
    </TouchableOpacity>
  );

  return (
    <View
      style={{ flex: 1, backgroundColor: theme.background, paddingTop: 20 }}
    >
      {/* <View 
        style={{ 
          paddingTop: insets.top + 20, 
          paddingHorizontal: 20,
          paddingBottom: 20,
          backgroundColor: theme.background,
        }}
        className="flex-row justify-between items-center"
      >
        <Text style={{ color: theme.text }} className="text-2xl font-bold">
          Solicitações de Troca
        </Text>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={24} color={theme.text} />
        </TouchableOpacity>
      </View> */}

      {/* Segment Control */}
      <View className="px-5 mb-6">
        <View className="flex-row bg-gray-200 dark:bg-slate-700 rounded-lg p-1 h-12">
          <TouchableOpacity
            onPress={() => setActiveTab("minhas")}
            className={`flex-1 items-center justify-center rounded-md ${activeTab === "minhas" ? "bg-blue-500 shadow-sm" : ""}`}
          >
            <Text
              className={`font-semibold ${activeTab === "minhas" ? "text-white" : "text-gray-500 dark:text-gray-300"}`}
            >
              Minhas Solicitações
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("para_mim")}
            className={`flex-1 items-center justify-center rounded-md ${activeTab === "para_mim" ? "bg-blue-500 shadow-sm" : ""}`}
          >
            <Text
              className={`font-semibold ${activeTab === "para_mim" ? "text-white" : "text-gray-500 dark:text-gray-300"}`}
            >
              Para Mim
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {MOCK_DATA.map((item) => (
          <ExchangeCard key={item.id} item={item} />
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 24,
          right: 24,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}
        className="bg-blue-500 w-14 h-14 rounded-full items-center justify-center"
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}
