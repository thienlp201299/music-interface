import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import { DetailAuthors } from '../../types';
import { useNavigation } from '@react-navigation/native';


export type DetailAuthorProps = {
    detailauthors: DetailAuthors,
}
const DetailAuthors = (props: DetailAuthorProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('DetailAuthorScreen', { id: props.detailauthors.id })
    }
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.container} >
                <Image source={{ uri: props.detailauthors.avatar }} style={styles.image} />
                <View>
                    <Text style={styles.text} >{props.detailauthors.story}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default DetailAuthors;