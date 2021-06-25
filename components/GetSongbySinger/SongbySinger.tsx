import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import style from './style';
import { SongbySingers } from '../../types';
import { useNavigation } from '@react-navigation/native';


export type SongbySingerProps = {
  soqbysingers: SongbySingers,
}
const SongbySinger = (props: SongbySingerProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('DetailSongScreen', { id: props.soqbysingers.songId })
  }
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={style.container} >
        <Image source={{ uri: props.soqbysingers.image }} style={style.image} />
        <View>
          <Text style={style.text} >{props.soqbysingers.song_name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SongbySinger;