import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const TextBold = props => (
  <Text style={{...styles.textBold, ...props.style}}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'open-bold'
  }
});