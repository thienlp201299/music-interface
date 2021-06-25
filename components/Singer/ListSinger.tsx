import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import style from './style';
import { Singers } from '../../types';
import { useNavigation } from '@react-navigation/native';


export type SingersProps = {
  singers: Singers,
}
const ListSinger = (props: SingersProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('DetailSingerScreen', { id: props.singers.id })
  }
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={style.container} >
        <Image source={{ uri: props.singers.avatar_singer }} style={style.image} />
        <View style={{ alignItems: "center", paddingTop: 30, paddingLeft: 20, paddingRight: 1 }}>
          <Text style={{ color: '#F6CED8', fontSize: 20 }} >{props.singers.singer}</Text>
          <Text style={style.text} >{props.singers.date_of_birth}</Text>
        </View>

      </View>
    </TouchableWithoutFeedback>
  )
}

export default ListSinger;