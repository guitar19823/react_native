import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { TextBold } from '../hoc/TextBold';

export const ListItem = ({ element, openElement }) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => openElement(element)}
  >
    <TextBold style={styles.title}>{element.title}</TextBold>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: theme.GREY_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 12
  },
  title: {
    fontSize: 16,
    color: theme.BLACK_COLOR
  }
});