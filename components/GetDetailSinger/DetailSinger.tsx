import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import {DetailSingers} from '../../types';
import { useNavigation } from '@react-navigation/native';


export type DetailSingerProps = {
  detailsingers: DetailSingers,
}
const DetailSinger = (props: DetailSingerProps) => {

  const navigation = useNavigation();

  const onPress =() => {
    navigation.navigate('DetailSingerScreen', { id: props.detailsingers.id })
  }
  return (
    <TouchableWithoutFeedback onPress ={onPress} >
    <View style={styles.container} >
        <Image source={{ uri: props.detailsingers.avatar_singer }} style={styles.image} />
        <View>
        <Text style={styles.text} >{props.detailsingers.story}</Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}


export default DetailSinger;