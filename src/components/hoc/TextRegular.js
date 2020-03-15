import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const TextRegular = props => (
  <Text style={{...styles.textRegular, ...props.style}}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textRegular: {
    fontFamily: 'open-regular'
  }
});