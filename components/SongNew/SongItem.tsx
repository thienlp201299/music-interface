import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import style from './style';
import { Songs } from '../../types';
import { useNavigation } from '@react-navigation/native';


export type SongsProps = {
  song: Songs,
}
const SongItem = (props: SongsProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('DetailSongScreen', { id: props.song.songId })
  }
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={style.container} >
        <Image source={{ uri: props.song.image }} style={style.image} />
        <Text style={style.text} >{props.song.song_name}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SongItem;
