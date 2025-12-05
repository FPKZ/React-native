import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { useState } from 'react';
import HomeScreen from '../pages/home';
import Perfil from '../pages/perfil';
import Trocas from '../pages/trocas';
import { Header, Footer } from '../layout';

import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    const [currentTab, setCurrentTab] = useState('Home');

    const insets = useSafeAreaInsets();

    // Função para obter o título baseado na tab ativa
    const getTabTitle = (routeName) => {
        switch (routeName) {
            case 'HomeTab':
                return 'Home';
            case 'TrocasTab':
                return 'Trocas';
            case 'PerfilTab':
                return 'Perfil';
            default:
                return 'Home';
        }
    };

    return (
        <View className="flex-1 bg-white">
            {/* Header fixo */}
            <Header 
                buttonLeft={{
                    name: "menu",
                    color: "blue",
                    bg_active: "bg-blue-100",
                    onPress: () => {}
                }} 
                buttonRight={{
                    name: "settings-outline",
                    color: "blue",
                    bg_active: "bg-blue-100",
                    onPress: () => {}
                }}
            >
                <Text className='text-2xl font-bold'>{currentTab}</Text>
            </Header>

            {/* Conteúdo das tabs */}
            <View className="flex-1">
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'HomeTab') {
                                iconName = focused ? 'home' : 'home-outline';
                            } else if (route.name === 'TrocasTab') {
                                iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline';
                            } else if (route.name === 'PerfilTab') {
                                iconName = focused ? 'person' : 'person-outline';
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: '#3b82f6', // azul quando ativo
                        tabBarInactiveTintColor: '#6b7280', // cinza quando inativo
                        tabBarStyle: {
                            backgroundColor: '#ffffff',
                            borderTopWidth: 1,
                            borderTopColor: '#e5e7eb',
                            height: 70,
                            paddingBottom: insets.bottom,
                            paddingTop: 8,
                        },
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: '600',
                        },
                        // Remove animação de transição entre tabs
                        animation: 'none',
                    })}
                    screenListeners={{
                        state: (e) => {
                            // Atualiza o título quando a tab muda
                            const currentRoute = e.data.state.routes[e.data.state.index];
                            setCurrentTab(getTabTitle(currentRoute.name));
                        },
                    }}
                >
                    <Tab.Screen 
                        name="HomeTab" 
                        component={HomeScreen}
                        options={{
                            tabBarLabel: 'Home',
                        }}
                    />
                    <Tab.Screen 
                        name="TrocasTab" 
                        component={Trocas}
                        options={{
                            tabBarLabel: 'Trocas',
                        }}
                    />
                    <Tab.Screen 
                        name="PerfilTab" 
                        component={Perfil}
                        options={{
                            tabBarLabel: 'Perfil',
                        }}
                    />
                </Tab.Navigator>
            </View>

            {/* Footer fixo */}
            {/* <Footer /> */}
        </View>
    );
}
