import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Perfil() {
  const navigation = useNavigation();
  const { theme, isDark, setIsDark } = useTheme();
  const insets = useSafeAreaInsets();

  const InfoItem = ({ icon, label, value }) => (
    <View className="flex-row items-center py-3 px-3">
      <View
        className="w-10 h-10 items-center justify-center mr-4"
      >
        <MaterialIcons name={icon} size={20} color={theme.textSecondary} />
      </View>
      <View className="flex-1 pb-2">
        <Text
          style={{ color: theme.profile.sectionTitle }}
          className="text-xs mb-1"
        >
          {label}
        </Text>
        <Text style={{ color: theme.text }} className="font-medium text-base">
          {value}
        </Text>
      </View>
    </View>
  );

  const ConfigItem = ({ icon, label, onPress, rightElement }) => (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      className="flex-row items-center py-3 px-3"
      style={{ minHeight: 70 }}
    >
      <View className="w-8 items-center mr-3">
        <MaterialIcons name={icon} size={22} color={theme.textSecondary} />
      </View>
      <Text
        style={{ color: theme.text }}
        className="flex-1 font-medium text-base"
      >
        {label}
      </Text>
      {rightElement || (
        <Ionicons
          name="chevron-forward"
          size={20}
          color={theme.textSecondary}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.background }}
      contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header / Avatar Section */}
      <View className="items-center pt-8 pb-8">
        <View className="relative mb-4">
          <View className="w-28 h-28 rounded-full overflow-hidden border-4" style={{ borderColor: theme.profile.avatarBorder }}>
            <Image
              source={{ uri: "https://i.pravatar.cc/300?img=5" }}
              className="w-full h-full"
            />
          </View>
          <TouchableOpacity
            style={{ backgroundColor: theme.profile.avatarEdit, borderColor: theme.profile.btnAvatarBorder }}
            className="absolute bottom-0 right-0 p-2 rounded-full border-4"
          >
            <Ionicons name="pencil" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={{ color: theme.text }} className="text-2xl font-bold mb-1">
          Ana Oliveira
        </Text>
        <Text style={{ color: theme.textSecondary }} className="text-sm">
          Desenvolvedora Sênior
        </Text>
      </View>

      {/* Personal Info Section */}
      <View className="px-4 mb-8">
        <Text
          style={{ color: theme.profile.sectionTitle }}
          className="text-xs font-bold ms-2 mb-6 uppercase tracking-wider"
        >
          Informações Pessoais
        </Text>
        <View className="rounded-lg" style={{ backgroundColor: theme.profile.contaners }}>
          <InfoItem icon="badge" label="Matrícula" value="987654" />
          
          <View style={{ borderBottomWidth: 1, borderColor: theme.border }}></View>

          <InfoItem
            icon="email"
            label="E-mail"
            value="ana.oliveira@empresa.com"
          />

          <View style={{ borderBottomWidth: 1, borderColor: theme.border }}></View>

          <InfoItem icon="phone" label="Telefone" value="+55 (11) 98765-4321" />
        </View>
      </View>

      {/* Settings Section */}
      <View className="px-4" >
        <Text
          style={{ color: theme.profile.sectionTitle }}
          className="text-xs font-bold ms-2 mb-4 uppercase tracking-wider"
        >
          Configurações
        </Text>
        <View className="mb-4 rounded-lg" style={{ backgroundColor: theme.profile.contaners }}>
          <ConfigItem
            icon="lock-outline"
            label="Alterar Senha"
            onPress={() => {}}
          />
          <View style={{ borderBottomWidth: 1, borderColor: theme.border }}></View>
          <ConfigItem
            icon="dark-mode"
            label="Modo Escuro"
            rightElement={
              <Switch
                trackColor={{ false: "#767577", true: theme.primary }}
                thumbColor={isDark ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setIsDark(!isDark)}
                value={isDark}
              />
            }
          />
        </View>

        <View className="mt-8">
          <TouchableOpacity className="flex-row items-center justify-center py-4 px-3 rounded-xl" style={{ backgroundColor: theme.profile.logout }}>
            <MaterialIcons
              name="logout"
              size={20}
              color={theme.profile.logouText}
              style={{ marginRight: 8 }}
            />
            <Text
              style={{ color: theme.profile.logouText }}
              className="font-bold text-base"
            >
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
