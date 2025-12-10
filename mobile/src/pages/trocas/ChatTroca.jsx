import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const MOCK_MESSAGES = [
  {
    id: 1,
    text: "Oi, tudo bem? Vi que você está querendo trocar seu turno de terça. Tenho interesse!",
    sender: "other",
    time: "10:30",
  },
  {
    id: 2,
    text: "Olá, Maria! Tudo ótimo. Que bom! Eu estava olhando suas escalas, seu turno de sexta me interessa.",
    sender: "me",
    time: "10:32",
  },
  {
    id: 3,
    text: "Perfeito! Para mim funciona. Podemos formalizar a proposta então?",
    sender: "other",
    time: "10:35",
  },
  { id: 4, text: "Sim, vou confirmar aqui.", sender: "me", time: "10:36" },
];

export default function ChatTroca() {
  const navigation = useNavigation();
  const route = useRoute();
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const [message, setMessage] = useState("");

  // Dados recebidos da navegação ou mock
  const { item } = route.params || {
    item: {
      name: "Maria Silva",
      userInitials: "MS",
      userColor: "bg-yellow-100",
    },
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {/* Header */}
      <View
        style={{
          paddingTop: insets.top + 10,
          paddingBottom: 15,
          paddingHorizontal: 20,
          backgroundColor: theme.surface,
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
        }}
        className="flex-row items-center justify-between shadow-sm z-10"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 -ml-2"
        >
          <Ionicons name="chevron-back" size={28} color={theme.text} />
        </TouchableOpacity>

        <View className="items-center">
          <Text style={{ color: theme.text }} className="font-bold text-lg">
            Troca de Turno
          </Text>
          <Text style={{ color: theme.textSecondary }} className="text-xs">
            com {item.name}
          </Text>
        </View>

        <View style={{ width: 40 }} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          className="flex-1 px-4 pt-4"
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Data Label */}
          <View className="items-center mb-6">
            <View className="bg-gray-200 dark:bg-slate-700 px-3 py-1 rounded-full">
              <Text className="text-xs text-gray-500 dark:text-gray-300 font-medium">
                Hoje
              </Text>
            </View>
          </View>

          {/* Messages */}
          {MOCK_MESSAGES.map((msg, index) => {
            const isMe = msg.sender === "me";
            const showAvatar =
              !isMe &&
              (index === 0 || MOCK_MESSAGES[index - 1].sender === "me");

            return (
              <View
                key={msg.id}
                className={`flex-row mb-4 ${isMe ? "justify-end" : "justify-start"}`}
              >
                {!isMe && (
                  <View className="mr-2 justify-end">
                    {showAvatar ? (
                      <View
                        className={`w-8 h-8 rounded-full items-center justify-center ${item.userColor || "bg-gray-300"}`}
                      >
                        <Text className="text-xs font-bold text-gray-700">
                          {item.userInitials}
                        </Text>
                      </View>
                    ) : (
                      <View className="w-8" />
                    )}
                  </View>
                )}

                <View style={{ maxWidth: "80%" }}>
                  {!isMe && showAvatar && (
                    <Text
                      style={{ color: theme.textSecondary }}
                      className="text-xs mb-1 ml-1"
                    >
                      {item.name}
                    </Text>
                  )}
                  <View
                    style={{
                      backgroundColor: isMe
                        ? theme.chat.bubbleSent
                        : theme.chat.bubbleReceived,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: isMe ? 20 : 4,
                      borderBottomRightRadius: isMe ? 4 : 20,
                    }}
                    className="p-4 shadow-sm"
                  >
                    <Text
                      style={{
                        color: isMe
                          ? theme.chat.textSent
                          : theme.chat.textReceived,
                      }}
                      className="text-base leading-5"
                    >
                      {msg.text}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}

          {/* Proposal Card */}
          <View
            style={{ backgroundColor: theme.chat.proposalCard }}
            className="mt-4 mb-6 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <Text
              style={{ color: theme.text }}
              className="font-bold text-base mb-4"
            >
              Proposta de Troca
            </Text>

            <View className="flex-row items-center justify-between mb-6">
              <View className="flex-1">
                <Text
                  style={{ color: theme.textSecondary }}
                  className="text-xs mb-1"
                >
                  Seu turno
                </Text>
                <Text style={{ color: theme.text }} className="font-medium">
                  Ter, 14 Mai, 09:00-17:00
                </Text>
              </View>

              <Ionicons
                name="swap-horizontal"
                size={20}
                color="#3b82f6"
                style={{ marginHorizontal: 10 }}
              />

              <View className="flex-1">
                <Text
                  style={{ color: theme.textSecondary }}
                  className="text-xs mb-1"
                >
                  Turno da {item.name.split(" ")[0]}
                </Text>
                <Text style={{ color: theme.text }} className="font-medium">
                  Sex, 17 Mai, 14:00-22:00
                </Text>
              </View>
            </View>

            <View className="flex-row gap-3">
              <TouchableOpacity
                style={{ backgroundColor: theme.chat.actionButton.reject }}
                className="flex-1 py-3 rounded-lg items-center justify-center bg-opacity-20"
              >
                <Text style={{ color: "#7f1d1d" }} className="font-bold">
                  Recusar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ backgroundColor: theme.chat.actionButton.suggest }}
                className="flex-1 py-3 rounded-lg items-center justify-center"
              >
                <Text
                  style={{ color: theme.chat.actionButton.textSuggest }}
                  className="font-bold"
                >
                  Sugerir ...
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ backgroundColor: theme.chat.actionButton.accept }}
                className="flex-1 py-3 rounded-lg items-center justify-center"
              >
                <Text className="text-white font-bold">Aceitar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Input Area */}
        <View
          style={{
            backgroundColor: theme.surface,
            paddingBottom: insets.bottom + 10,
          }}
          className="p-4 border-t border-gray-100 dark:border-gray-800 flex-row items-center"
        >
          <View className="flex-1 bg-gray-100 dark:bg-slate-800 rounded-full px-4 py-2 mr-3 border border-gray-200 dark:border-gray-700">
            <TextInput
              placeholder="Digite sua mensagem..."
              placeholderTextColor={theme.textSecondary}
              value={message}
              onChangeText={setMessage}
              style={{ color: theme.text, height: 40 }}
            />
          </View>

          <TouchableOpacity
            style={{ backgroundColor: theme.chat.bubbleSent }}
            className="w-12 h-12 rounded-full items-center justify-center shadow-md"
          >
            <Ionicons
              name="send"
              size={20}
              color="white"
              style={{ marginLeft: 2 }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
