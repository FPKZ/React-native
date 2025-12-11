import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState, useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';

import data from '../app/data';

const mockData = {
    '2025-12-10': { marked: true, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
    '2025-12-12': { marked: true, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
    '2025-12-14': { marked: true, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
    '2025-12-16': { marked: true, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
    '2025-12-18': { marked: true, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
    '2025-12-20': { marked: true, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
    '2025-12-22': { marked: false, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
    '2025-12-24': { marked: false, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
    '2025-12-26': { marked: false, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
    '2025-12-28': { marked: false, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
    '2025-12-30': { marked: false, selected: true, selectedColor: 'green', data: { turno: 'Turno A Diurno', funcionarios: data.funcionarios} },
}

export default function CalendarComponent() {

    const [selectedDay, setSelectedDay] = useState(mockData);

    const navigation = useNavigation();

    const { theme, isDark } = useTheme();

    const handleDayPress = (day) => {
        navigation.navigate('DetalhesTurno', { day, data: selectedDay[day.dateString]  });
        console.log(selectedDay[day.dateString]);
        // setSelectedDay({... selectedDay, [day.dateString]: {marked: true, selected: true, selectedColor: 'blue'}});
    }

    const calendarTheme = useMemo(() => {
        return {
            monthTextColor: theme.text,
            backgroundColor: theme.background,
            calendarBackground:  theme.background,
            textSectionTitleColor: theme.text,
            todayTextColor: theme.text,
            textDisabledColor: theme.textSecondary,
            dayTextColor: theme.text,
            dayBackgroundColor: theme.error,
            selectedDayTextColor: theme.text,
            selectedDayBackgroundColor: theme.primary,
            arrowColor: theme.text,
            disabledArrowColor: theme.textSecondary,
            textMonthFontWeight: 'bold',
        }
    }, [theme]);
    

    LocaleConfig.locales['pt'] = {
      monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
      today: "Hoje"
    };
    LocaleConfig.defaultLocale = 'pt';

    return (
        <Calendar 
        key={isDark ? 'dark' : 'light'}
            // onDayPress={day => handleDayPress(day)}
            // markedDates={selectedDay}
            // theme={calendarTheme}
        />
    );
}
