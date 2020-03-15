import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { TextRegular } from '../hoc/TextRegular';

export const AppButton = ({ title, style, goTo }) => (
  <TouchableOpacity
    style={{...styles.button, ...style}}
    activeOpacity={0.7}
    onPress={() => goTo()}
  >
    <TextRegular
      style={{
        color: style.color,
        fontSize: style.fontSize
      }}
    >
      {title}
    </TextRegular>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  }
});