import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { AppTextInput } from './uiElements/AppTextInput';
import { AppButton } from './uiElements/AppButton';

export const AppForm = ({ placeholders, goTo }) => (
  <View style={styles.form}>
    <View style={styles.inputs}>
      {
        Object.keys(placeholders).map((placeholder, key) => (
          <AppTextInput
            key={key + placeholder}
            keyName={placeholder}
            placeholder={placeholders[placeholder]}
          />
        ))
      }
    </View>

    <AppButton
      style={styles.button}
      title="Войти"
      goTo={goTo}
    />
  </View>
);

const styles = StyleSheet.create({
  form: {
    width: '100%',
    alignItems: 'center'
  },
  inputs: {
    width: '100%',
    marginVertical: 15
  },
  button: {
    width: '70%',
    backgroundColor: theme.DANGER_COLOR,
    borderRadius: 7,
    color: theme.WHITE_COLOR
  }
});