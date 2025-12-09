import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';
import CalendarComponent from '../../components/Calendar';

export default function Home() {

    const [selectedDay, setSelectedDay] = useState({});
    const navigation = useNavigation();
    const { theme, isDark } = useTheme();

    
    
    return (
        <>
            <StatusBar style={isDark ? 'light' : 'dark'}/>
            <ScrollView
                style={{ backgroundColor: theme.background }}
            >
                <View className='p-4'>
                    <CalendarComponent />
                </View>
            </ScrollView>
        </>
    );
}