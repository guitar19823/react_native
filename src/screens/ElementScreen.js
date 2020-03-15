import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../theme';
import { TextBold } from '../components/hoc/TextBold';
import { TextRegular } from '../components/hoc/TextRegular';
import { AppButton } from '../components/uiElements/AppButton';
import { ContentWrapper } from '../components/hoc/ContentWrapper';
import { userLogout } from '../store/actions/user';

export const ElementScreen = ({ route, navigation }) => {
  const { isLogin } = useSelector(state => state.user);
  const dispatch = useDispatch();

  isLogin || navigation.navigate('Auth');

  const { title, description } = route.params.element;

  const goBack = () => navigation.goBack();

  const goToStatrSreen = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <ContentWrapper style={styles.wrapper}>
        <ScrollView>
          <TextBold style={styles.title}>
            {title}
          </TextBold>
          
          <TextRegular style={styles.description}>
            {description}
          </TextRegular>
        </ScrollView>
      </ContentWrapper>

      <View style={styles.buttons}>
        <AppButton
          style={{...styles.button, ...styles.buttonBack}}
          title="Назад"
          goTo={goBack}
        />

        <AppButton
          style={{...styles.button, ...styles.buttonExit}}
          title="Выйти из аккаунта"
          goTo={goToStatrSreen}
        />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 18
  },
  title: {
    fontSize: 16,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row'
  },
  button: {
    width: '50%',
    borderWidth: 2,
    borderColor: theme.DANGER_COLOR,
    fontSize: 16,
  },
  buttonBack: {
    backgroundColor: theme.WHITE_COLOR,
    color: theme.DANGER_COLOR
  },
  buttonExit: {
    backgroundColor: theme.DANGER_COLOR,
    color: theme.WHITE_COLOR
  }
});