import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';

export default function Home() {
    
    const [selectedDay, setSelectedDay] = useState({});
    const navigation = useNavigation();
    const { theme, isDark } = useTheme();
    
    const handleDayPress = (day) => {
        navigation.navigate('DetalhesTurno', { day });
        console.log(day);
        // setSelectedDay({... selectedDay, [day.dateString]: {marked: true, selected: true, selectedColor: 'blue'}});
    }
    
    return (
        <>
            <StatusBar style={isDark ? 'light' : 'dark'}/>
            <ScrollView
                style={{ backgroundColor: theme.background }}
            >
                <View className='p-4'>
                    <Calendar 
                        onDayPress={day => handleDayPress(day)}
                        markedDates={selectedDay}
                    />
                </View>
            </ScrollView>
        </>
    );
}