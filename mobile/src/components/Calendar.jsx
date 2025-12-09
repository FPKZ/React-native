import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState, useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';

export default function CalendarComponent() {

    const [selectedDay, setSelectedDay] = useState({});

    const navigation = useNavigation();

    const { theme, isDark } = useTheme();

    const handleDayPress = (day) => {
        navigation.navigate('DetalhesTurno', { day });
        console.log(day);
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
            onDayPress={day => handleDayPress(day)}
            markedDates={selectedDay}
            theme={calendarTheme}
        />
    );
}
