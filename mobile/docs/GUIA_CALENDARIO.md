Aqui está um arquivo `README.md` completo e formatado especificamente para ser lido no VS Code (ou GitHub). Ele cobre desde a instalação do calendário até a integração com a API `Animated` do React Native.

**Para visualizar:**
1. Copie o código abaixo.
2. Crie um arquivo chamado `GUIA_CALENDARIO.md` no seu projeto.
3. Cole o conteúdo.
4. No VS Code, pressione `Ctrl + Shift + V` (Windows/Linux) ou `Cmd + Shift + V` (Mac) para abrir o modo de leitura.

---

```markdown
# 📅 Guia Completo: React Native Calendars + Animated API

Este guia aborda a implementação da biblioteca `react-native-calendars`, sua customização, internacionalização (PT-BR) e como animar sua exibição utilizando a `Animated` API nativa.

---

## 🚀 1. Instalação

Adicione a dependência ao seu projeto:

```bash
# Usando npm
npm install react-native-calendars

# Usando yarn
yarn add react-native-calendars
```

> **Nota:** Nas versões atuais do React Native (>0.60), não é necessário fazer linkagem manual.

---

## ⚙️ 2. Configuração Básica (Locale PT-BR)

Por padrão, o calendário é inglês. Para traduzir os dias e meses, configuramos o `LocaleConfig`. Recomenda-se fazer isso em um arquivo separado ou no topo do seu componente principal.

```javascript
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';
```

---

## 🎨 3. Estilização e Temas

A estilização do calendário não usa o objeto `style` tradicional para seus elementos internos, mas sim a prop `theme`.

### Principais chaves do Theme:

| Chave | Descrição |
| :--- | :--- |
| `calendarBackground` | Cor de fundo do calendário |
| `textSectionTitleColor` | Cor dos dias da semana (Seg, Ter...) |
| `selectedDayBackgroundColor` | Cor da bolinha de seleção |
| `selectedDayTextColor` | Cor do texto do dia selecionado |
| `todayTextColor` | Cor do dia atual |
| `dayTextColor` | Cor dos dias comuns |
| `arrowColor` | Cor das setas de navegação |

### Exemplo de código de tema:

```javascript
<Calendar
  theme={{
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    arrowColor: 'orange',
    monthTextColor: 'blue',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}
/>
```

---

## ✨ 4. Utilizando a API `Animated` do React Native

A API `Animated` permite criar animações fluidas e performáticas. Vamos focar em criar um efeito de **Fade In (Aparecer suavemente)** e **Slide Up (Subir)** para o calendário.

### Conceitos Chave:
1.  **`Animated.Value`**: Onde o valor da animação é armazenado (começa em 0, vai até 1, por exemplo).
2.  **`Animated.View`**: Um componente especial (pode ser Text, Image, ScrollView) que entende as mudanças do Value.
3.  **`Animated.timing`**: A função que muda o valor ao longo do tempo.

### Passo a Passo da Animação:

#### A. Importação e Refs
```javascript
import { Animated, Easing } from 'react-native';
import { useRef, useEffect } from 'react';

// Dentro do componente
const fadeAnim = useRef(new Animated.Value(0)).current; // Opacidade inicial 0
const slideAnim = useRef(new Animated.Value(50)).current; // Posição Y inicial (50px para baixo)
```

#### B. Executando a Animação (`useEffect`)
```javascript
useEffect(() => {
  // Animated.parallel executa múltiplas animações ao mesmo tempo
  Animated.parallel([
    Animated.timing(fadeAnim, {
      toValue: 1, // Vai para opacidade 100%
      duration: 1000, // Demora 1 segundo
      useNativeDriver: true, // OBRIGATÓRIO para performance (roda na UI thread)
    }),
    Animated.timing(slideAnim, {
      toValue: 0, // Vai para posição 0
      duration: 800,
      easing: Easing.out(Easing.exp), // Efeito de desaceleração suave
      useNativeDriver: true,
    })
  ]).start(); // .start() inicia a animação
}, []);
```

#### C. Renderizando
```javascript
<Animated.View 
  style={{
    opacity: fadeAnim, // Liga o valor animado à opacidade
    transform: [{ translateY: slideAnim }] // Liga o valor animado à posição Y
  }}
>
  {/* O Calendário vai aqui dentro */}
</Animated.View>
```

---

## 🏆 5. Exemplo Completo: Calendário Animado

Abaixo, um componente completo que une a configuração do calendário com a animação de entrada.

```javascript
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// --- 1. Configurar Locale (PT-BR) ---
LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

const CalendarioAnimado = () => {
  const [selected, setSelected] = useState('');
  
  // --- 2. Preparar Valores Animados ---
  const fadeAnim = useRef(new Animated.Value(0)).current; // Opacidade
  const scaleAnim = useRef(new Animated.Value(0.9)).current; // Escala (Zoom)

  // --- 3. Disparar Animação ao Montar ---
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5, // Controla o "bounciness"
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Agenda</Text>
      
      {/* --- 4. Componente Animado --- */}
      <Animated.View 
        style={[
          styles.calendarContainer, 
          { 
            opacity: fadeAnim, 
            transform: [{ scale: scaleAnim }] 
          }
        ]}
      >
        <Calendar
          // Marcar data selecionada
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
          }}
          
          // Estilização
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#4F46E5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#4F46E5',
            dayTextColor: '#2d4150',
            arrowColor: '#4F46E5',
            monthTextColor: '#4F46E5',
            textDayFontWeight: 'bold',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14
          }}
          
          style={styles.calendar}
        />
      </Animated.View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {selected ? `Data selecionada: ${selected}` : 'Selecione uma data'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center'
  },
  calendarContainer: {
    // Sombras para dar destaque (Card Style)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  calendar: {
    borderRadius: 15,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center'
  },
  footerText: {
    fontSize: 16,
    color: '#555'
  }
});

export default CalendarioAnimado;
```

---

## 📝 Dicas Finais

1.  **MarkedDates Imutável:** Ao atualizar o `markedDates`, certifique-se de passar um novo objeto. O React Native Calendars é sensível à imutabilidade para re-renderizar corretamente.
2.  **useNativeDriver:** Sempre tente usar `useNativeDriver: true` nas suas animações (`transform` e `opacity`) para garantir que a animação não trave mesmo se o JS estiver ocupado.
3.  **Performance:** Se for renderizar uma lista pesada abaixo do calendário, considere usar o componente `<Agenda />` que já é otimizado para isso.
```