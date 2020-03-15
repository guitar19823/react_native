import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, StyleSheet, View } from 'react-native';
import { theme } from '../../theme';
import { TextRegular } from '../hoc/TextRegular';
import { setUserName, setUserPassword } from '../../store/actions/user';

export const AppTextInput = ({ keyName, placeholder }) => {
  const value = useSelector(state => state.user[keyName]);
  const dispatch = useDispatch();
  
  const handleChange = text => {
    keyName === 'name' && dispatch(setUserName(text.trim()));
    keyName === 'password' && dispatch(setUserPassword(text.trim()));
  };

  return (
    <View style={styles.inputWrap}>
      <TextRegular
        style={value.length > 5 ? styles.label : styles.labelDanger}
      >
        {value && placeholder}
      </TextRegular>

      <TextInput
        value={value}
        maxLength={25}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.input}
        onChangeText={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrap: {
    width: '100%'
  },
  label: {
    fontSize: 12,
    color: theme.SUCCESS_COLOR,
    paddingHorizontal: 15
  },
  labelDanger: {
    fontSize: 12,
    color: theme.DANGER_COLOR,
    paddingHorizontal: 15
  },
  input: {
    width: '100%',
    paddingTop: 0,
    paddingBottom: 4,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.GREY_COLOR,
    marginBottom: 10
  }
});