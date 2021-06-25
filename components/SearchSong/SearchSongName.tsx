import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import style from './style';
import { useNavigation } from '@react-navigation/native';
import { SongbySongNames } from '../../types';


export type SongbySongNameProps = {
    soqbysongname: SongbySongNames,
}
const SongbySongName = (props: SongbySongNameProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('DetailSongScreen', { id: props.soqbysongname.songId })
    }
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={style.container} >
                <Image source={{ uri: props.soqbysongname.image }} style={style.image} />
                <View>
                    <Text style={style.text} >{props.soqbysongname.song_name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SongbySongName;