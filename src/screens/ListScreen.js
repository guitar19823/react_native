import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, FlatList } from 'react-native';
import { ListItem } from '../components/uiElements/ListItem';
import { ContentWrapper } from '../components/hoc/ContentWrapper';
import { loadElements } from '../store/actions/element';

export const ListScreen = ({ navigation }) => {
  useSelector(state => state.user.isLogin) || navigation.navigate('Auth');

  const allElements = useSelector(state => state.list.allElements);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadElements());
  }, [dispatch]);

  const openElement = element => {
    navigation.navigate('Element', {
      element
    });
  };

  return (
    <ContentWrapper style={styles.wrapper}>
      <FlatList
        data={allElements.list}
        keyExtractor={key => key.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            element={item}
            openElement={openElement}
          />
        )}
      />
    </ContentWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 18,
    paddingHorizontal: 7
  }
});