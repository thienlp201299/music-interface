import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { DetailSongs } from '../../types';
import styles from './style';

export type DetailSongProps = {
    detailsongs: DetailSongs,
}
const DetailSongs = (props: DetailSongProps) => {

    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback>
            <View style={styles.container} >
                <Image source={{ uri: props.detailsongs.image }} style={styles.image} />
                <View>
                    <Text style={styles.text} >{props.detailsongs.song_name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}