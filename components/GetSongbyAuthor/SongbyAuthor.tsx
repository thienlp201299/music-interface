import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import style from './style';
import { SongbyAuthors } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


export type SongbyAuthorProps = {
    soqbyauthors: SongbyAuthors,
}
const SongbyAuthor = (props: SongbyAuthorProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('DetailSongScreen', { id: props.soqbyauthors.songId })
    }
    return (
        <TouchableWithoutFeedback onPress={onPress} >

            <View style={style.container} >
                <Image source={{ uri: props.soqbyauthors.image }} style={style.image} />
                <View>
                    <Text style={style.text} >{props.soqbyauthors.song_name}</Text>
                </View>
            </View>


        </TouchableWithoutFeedback>
    )
}

export default SongbyAuthor;