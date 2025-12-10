import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '../../layout'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../../contexts/ThemeContext'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const mock = [
    {
        id: 1,
        title: "Notificação de atribuição de proposta de trabalho",
        description: "Notificacao",
        date: "2025-12-10",
        visualized: false,
        type: "group"
    },
    {
        id: 2,
        title: "Notificação de atribuição de proposta de trabalho",
        description: "Notificacao",
        date: "2025-12-10",
        visualized: false,
        type: "group"
    },
    {
        id: 3,
        title: "Notificação de atribuição de proposta de trabalho",
        description: "Notificacao",
        date: "2025-12-10",
        visualized: false,
        type: "group"
    },
    {
        id: 4,
        title: "Notificação de atribuição de proposta de trabalho",
        description: "Notificacao",
        date: "2025-12-10",
        visualized: false,
        type: "group"
    },
]
import { ScrollView } from 'react-native'

export default function Notificacao() {
    const navigation = useNavigation();
    const { theme } = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            <Header buttonLeft={{ name: "arrow-back", color: "#3b82f6", bg_active: "bg-slate-100", onPress: () => navigation.goBack() }}>
                <Text className="text-2xl font-bold" style={{ color: theme.text }}>
                    Notificações
                </Text>
            </Header>
            <ScrollView>
                {mock.map((item) => (
                    <NotificacaoComponent key={item.id} theme={theme} item={item} />
                ))}
            </ScrollView>
        </View>
    );
}

function NotificacaoComponent({ theme, item }) {
    return (
        <View className="flex-row w-full items-center justify-between p-5" style={{ backgroundColor: theme.background }}>
            <View className="flex-row items-center justify-center" style={{ backgroundColor: theme.secondary, borderRadius: 10, padding: 10 }}>
                <MaterialIcons name={item.type === "group" ? "group" : "person"} size={24} color={theme.text} />
            </View>
            <View className="flex-1 mx-5">
                <Text numberOfLines={1} style={{ color: theme.text, fontWeight: "bold" }}>{item.title}</Text>
                <Text numberOfLines={1} style={{ color: theme.textSecondary }}>{item.description}</Text>
            </View>
            <View>
                <Ionicons name="chevron-forward" size={24} color={theme.text} />
            </View>
        </View>
    );
}