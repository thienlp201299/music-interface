import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import style from './style';
import { Views } from '../../types';
import { useNavigation } from '@react-navigation/native';


export type TopViews = {
  view: Views,
}
const TopView = (props: TopViews) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('DetailSongScreen', { id: props.view.songId })
  }
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={style.container} >
        <Image source={{ uri: props.view.image }} style={style.image} />
        <Text style={style.text} >{props.view.song_name}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TopView;
