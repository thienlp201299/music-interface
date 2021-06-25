import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { getDetailSinger, getSongbySinger } from '../config/API';
import SongbySinger from '../components/GetSongbySinger/SongbySinger';
import { useRoute } from '@react-navigation/native';


export default function DetailSingerScreen() {

    const route = useRoute();
    const parms: any = route.params;
    const [detailsingers, setDetailSingers] = React.useState(null);
    const [soqbysingers, setSoqbySingers] = React.useState([])
    const [pageNum, setPageNum] = React.useState(1);

    React.useEffect(() => {
        (async () => {
            const detailsingers = await getDetailSinger(parms.id);
            setDetailSingers(detailsingers);

            const soqbysingers = await getSongbySinger(parms.id, pageNum);
            setSoqbySingers(soqbysingers);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={{ uri: detailsingers && detailsingers.avatar_singer }} style={styles.img} />
            <Text style={styles.text}> {detailsingers && detailsingers.story} </Text>
            <FlatList
                data={soqbysingers}
                renderItem={({ item, index }) => (
                    <SongbySinger soqbysingers={item} />
                )}
                keyExtractor={(item, index
                ) => item.presentedBy.toString()}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    img: {
        width: "100%",
        height: 200,
        borderRadius: 5
    },
    text: {
        color: "white"
    }
});
