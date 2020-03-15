import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
import { theme } from '../theme';
import { AppForm } from '../components/AppForm';
import { TextBold } from '../components/hoc/TextBold';
import { TextRegular } from '../components/hoc/TextRegular';
import { ContentWrapper } from '../components/hoc/ContentWrapper';
import { userLogin } from '../store/actions/user';

export const AuthorizationScreen = ({ navigation }) => {
  const { isLogin, name, password } = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  isLogin && navigation.navigate('List');
  
  const goToList = () => {
    if (name.length > 5 && password.length > 5) {
      dispatch(userLogin());
    }
  };

  return (
    <ContentWrapper>
      <ScrollView>
        <TextBold style={styles.title}>
          Вход
        </TextBold>

        <TextRegular style={styles.text}>
          Идейные соображения высшего порядка, а также дальнейшее развитие различных форм
          деятельности влечет за собой процесс  внедрения и модернизации системы обучения кадров,
          соответствует насущным потребностям.
        </TextRegular>

        <AppForm
          placeholders={{
            name: 'Логин',
            password: 'Пароль'
          }}
          goTo={goToList}
        />
      </ScrollView>
    </ContentWrapper>
  )
};

const styles = StyleSheet.create({
  title: {
    color: theme.DANGER_COLOR,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  text: {
    textAlign: 'center',
    color: theme.GREY_COLOR,
    marginBottom: 20
  }
});