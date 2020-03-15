import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import { theme } from '../../theme';
import { TextRegular } from '../hoc/TextRegular';

const userImage = require('../../../assets/user.png');

export const User = () => {
  const { name } = useSelector(state => state.user);

  return (
    <View style={styles.user}>
      <TextRegular
        style={styles.userName}
      >
        {name}
      </TextRegular>

      <Image
        style={styles.userImage}
        source={userImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    color: theme.WHITE_COLOR,
    fontSize: 16,
    marginRight: 10
  },
  userImage: {
    width: 15,
    height: 21
  }
});