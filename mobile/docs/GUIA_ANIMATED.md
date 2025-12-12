Aqui está um guia focado exclusivamente na **Animated API** do React Native. Ele foi estruturado para servir como um manual de consulta rápida com exemplos práticos, indo do básico ao avançado.


---


# 🎬 Guia Mestre: React Native Animated API

A API `Animated` é a biblioteca padrão do React Native para criar animações fluidas e de alta performance.

## 🧠 Os 3 Pilares da Animação

Para criar qualquer animação, você sempre seguirá estes 3 passos:

1.  **Valor Inicial:** Criar uma variável de referência (`new Animated.Value(0)`).
2.  **Componente Animado:** Usar um componente especial (ex: `<Animated.View>`) e ligar o valor a um estilo (ex: `opacity`).
3.  **Execução:** Chamar uma função que altera o valor ao longo do tempo (ex: `Animated.timing(...).start()`).

---

## ⚡ O Segredo da Performance: `useNativeDriver`

Sempre que possível, use `useNativeDriver: true`. Isso envia a animação para a thread nativa da UI, evitando que a animação trave se o JavaScript estiver ocupado.

*   **Suporta:** `transform` (scale, rotate, translate), `opacity`.
*   **Não Suporta:** `width`, `height`, `backgroundColor` (cores), `top`, `left`.

---

## 📦 Exemplo 1: O Básico (Fade In)
*Conceito: Alterar opacidade de 0 a 1.*

```javascript
import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

const FadeInExample = () => {
  // 1. Valor Inicial (Opacidade 0)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 3. Execução
    Animated.timing(fadeAnim, {
      toValue: 1,           // Destino final (Opacidade 1)
      duration: 2000,       // Duração (2 segundos)
      useNativeDriver: true // Performance nativa
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* 2. Componente Animado */}
      <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
        <Text style={styles.text}>Olá Mundo!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  box: { width: 200, height: 100, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center', borderRadius: 10 },
  text: { color: 'white', fontWeight: 'bold' }
});

export default FadeInExample;
```

---

## 🏀 Exemplo 2: Física e Movimento (Spring)
*Conceito: Efeito de mola (bounciness) para movimentos naturais.*

```javascript
import React, { useRef } from 'react';
import { Animated, View, Button, StyleSheet } from 'react-native';

const SpringExample = () => {
  // Começa deslocado 200px para cima (-200)
  const positionY = useRef(new Animated.Value(-200)).current;

  const dropBox = () => {
    Animated.spring(positionY, {
      toValue: 0,           // Vai para posição original
      bounciness: 20,       // Quão "elástica" é a mola
      speed: 10,            // Velocidade
      useNativeDriver: true
    }).start();
  };

  const resetBox = () => {
    positionY.setValue(-200); // Reseta instantaneamente sem animação
  };

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.ball, 
          { transform: [{ translateY: positionY }] } 
        ]} 
      />
      <View style={{ marginTop: 50 }}>
        <Button title="Soltar Bola" onPress={dropBox} />
        <Button title="Resetar" onPress={resetBox} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  ball: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#3498db' }
});

export default SpringExample;
```

---

## 🔄 Exemplo 3: Interpolação (Rotação e Cor)
*Conceito: Mapear números (0 a 1) para strings (graus ou cores).*

> **Nota:** Interpolação de cor não suporta `useNativeDriver: true`.

```javascript
import React, { useRef } from 'react';
import { Animated, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const RotateExample = () => {
  const animValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false // False pois vamos animar cor
    }).start(() => {
      // Callback: roda quando termina. Reseta para 0 para poder clicar de novo
      animValue.setValue(0); 
    });
  };

  // Mapeando 0 -> 0 graus, 1 -> 360 graus
  const rotateInterp = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  // Mapeando 0 -> Azul, 1 -> Roxo
  const colorInterp = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#3498db', '#8e44ad']
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View style={[
          styles.box, 
          { 
            backgroundColor: colorInterp,
            transform: [{ rotate: rotateInterp }] 
          }
        ]}>
          <Text style={styles.text}>Girar!</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  box: { width: 150, height: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 15 },
  text: { color: 'white', fontSize: 20 }
});

export default RotateExample;
```

---

## 💓 Exemplo 4: Loops e Sequências (Pulse Effect)
*Conceito: Animações infinitas e encadeadas.*

```javascript
import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const PulseExample = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Cria a sequência: Aumenta -> Diminui
    const pulse = Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      })
    ]);

    // Repete a sequência infinitamente
    Animated.loop(pulse).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.heart, { transform: [{ scale: scaleAnim }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heart: { width: 50, height: 50, backgroundColor: '#e74c3c', borderRadius: 25 }
});

export default PulseExample;
```

---

## 📶 Exemplo 5: Animação em Lista (Stagger)
*Conceito: Animar vários itens um após o outro com um pequeno atraso.*

```javascript
import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

const DATA = ['Item A', 'Item B', 'Item C', 'Item D'];

const StaggerList = () => {
  // Cria um array de Animated.Values, um para cada item
  const animValues = useRef(DATA.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = animValues.map(anim => 
      Animated.timing(anim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      })
    );

    // Stagger dispara as animações com intervalo de 200ms entre elas
    Animated.stagger(200, animations).start();
  }, []);

  return (
    <View style={styles.container}>
      {DATA.map((item, index) => (
        <Animated.View 
          key={index} 
          style={[
            styles.listItem, 
            { 
              opacity: animValues[index],
              // Move de baixo (50px) para cima (0px)
              transform: [{ 
                translateY: animValues[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0]
                }) 
              }] 
            }
          ]}
        >
          <Text style={styles.text}>{item}</Text>
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20 },
  listItem: { height: 60, backgroundColor: '#2ecc71', marginBottom: 10, justifyContent: 'center', paddingLeft: 15, borderRadius: 8 },
  text: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});

export default StaggerList;
```

---

## 🛠️ Resumo das Funções de Controle

| Função | Descrição |
| :--- | :--- |
| `Animated.timing` | Animação baseada em tempo (mais comum). |
| `Animated.spring` | Baseada em física (mola). Ótimo para interações táteis. |
| `Animated.decay` | Começa com velocidade e desacelera (ex: jogar uma carta). |
| `Animated.sequence` | Executa um array de animações em ordem (uma termina, outra começa). |
| `Animated.parallel` | Executa várias animações ao mesmo tempo. |
| `Animated.stagger` | Executa em ordem, mas com um "delay" sobreposto entre elas. |
| `Animated.loop` | Repete uma animação indefinidamente. |

```