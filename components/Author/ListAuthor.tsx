import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import style from './style';
import { Authors } from '../../types';
import { useNavigation } from '@react-navigation/native';


export type AuthorsProps = {
  authors: Authors,
}
const ListAuthor = (props: AuthorsProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('DetailAuthorScreen', { id: props.authors.id })
  }
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={style.container} >
        <Image source={{ uri: props.authors.avatar }} style={style.image} />

        <View style={{ alignItems: "center", paddingTop: 30, paddingLeft: 20, paddingRight: 1 }}>
          <Text style={{ color: '#F6CED8', fontSize: 20 }} >{props.authors.name}</Text>
          <Text style={style.text} >{props.authors.date_of_birth}</Text>
        </View>

      </View>
    </TouchableWithoutFeedback>
  )
}

export default ListAuthor;