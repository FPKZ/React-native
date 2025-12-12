import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Easing } from 'react-native';

/**
 * 
 * @param children - Conteudo do Slide
 * @param buttonOpen - Botão que abre o slide
 * @param buttonClose - Botão que fecha o slide
 * @param style - Estilo do container
 * @returns 
 */

const AnimateSlideDown = ({children, buttonOpen, buttonClose, style}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0); // Armazena a altura real
  
  // O valor da animação
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleOpen = () => {

    const toValue = isOpen ? 0 : 1; // Se aberto, esconde (-altura). Se fechado, mostra (0).

    Animated.timing(animationController, {
      toValue,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: false,
    }).start();

    setIsOpen(!isOpen);
  };

  const heightInterpolate = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight], // Adjust max height as needed
    extrapolate: 'clamp',
  });

  const translateYInterpolate = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: [-contentHeight, 0], // Começa negativo (subido) e vai para 0
    extrapolate: 'clamp',
  });

  const opacityInterpolate = animationController.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.container, style]}>
        {/* Botão que fica POR CIMA do conteúdo (z-index maior visualmente) */}
      <TouchableOpacity onPress={toggleOpen}>
        {isOpen ? buttonClose : buttonOpen}
      </TouchableOpacity>
      <Animated.View style={
        [
          styles.maskContainer,
          {
            height: heightInterpolate,
          },
        ]
      }>
        {/* 
          ANIMATED VIEW:
          Essa é a caixa que vai se mover.
          Inicialmente, nós não sabemos a altura, então deixamos o translate controlar.
        */}
        <Animated.View 
          style={[
            styles.innerContent,
            { 
                transform: [{ translateY: translateYInterpolate }],
            } 
          ]}
          // O SEGREDO ESTÁ AQUI:
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            if (height > 0 && Math.abs(contentHeight - height) > 1) {
              setContentHeight(height);
            }
          }}
        >
            {children}
        </Animated.View>
      </Animated.View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden', // Garante que nada vaze
  },
  btnContainer: {
    zIndex: 10, // Garante que o botão fique acima da animação visualmente
    backgroundColor: '#fff', // Opcional: para o texto não passar por trás transparente
  },
  maskContainer: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent', // Transparente para ver o efeito
  },
  innerContent: {
    width: '100%',
    position: 'absolute', // O PULO DO GATO: Absolute permite medir e animar independente da altura do pai
    top: 0,
    left: 0,
  },
});

export default AnimateSlideDown;