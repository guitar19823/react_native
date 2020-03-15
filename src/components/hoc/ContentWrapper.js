import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { theme } from '../../theme';

export const ContentWrapper = ({ children, style }) => {
  const [ keyboardHeight, setKeyboardHeight ] = useState(0);

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hide = Keyboard.addListener('keyboardDidHide', e => {
      setKeyboardHeight(e.endCoordinates.height);
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }); 

  return (
    <View style={{
      ...styles.wrapper,
      ...style,
      bottom: keyboardHeight
    }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 45,
    backgroundColor: theme.WHITE_COLOR,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
});