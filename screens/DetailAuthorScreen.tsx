import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDetailAuthor, getSongbyAuthor, getSongDetail } from '../config/API';
import SongbyAuthor from '../components/GetSongbyAuthor/SongbyAuthor';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailAuthorScreen() {

    const route = useRoute();
    const parms: any = route.params;
    const [detailauthors, setDetailAuthors] = React.useState(null);
    const [soqbyauthors, setSoqbyAuthors] = React.useState([]);
    const [detailsongs, setDetailSongs] = React.useState(null)
    const [pageNum, setPageNum] = React.useState(1);

    React.useEffect(() => {
        console.log(route);
        (async () => {
            const detailauthors = await getDetailAuthor(parms.id);
            setDetailAuthors(detailauthors);


            const soqbyauthors = await getSongbyAuthor(parms.id, pageNum);
            setSoqbyAuthors(soqbyauthors);

        })();
    }, []);

    return (

        <View style={{ paddingHorizontal: 10 }}>
            <Image style={{ width: '100%', height: '30%' }} source={{ uri: detailauthors && detailauthors.avatar }} />
            <Text style={{ color: '#E3CEF6', fontWeight: 'normal', borderBottomColor: '#6E6E6E' }}> {detailauthors && detailauthors.story} </Text>
            <FlatList
                data={soqbyauthors}
                renderItem={({ item, index }) => (
                    <SongbyAuthor soqbyauthors={item} />
                )}
                keyExtractor={(item, index) => item.composedBy.toString()}
            />


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        paddingTop: 20,
        flexDirection: "row",
        paddingVertical: 200,
        marginLeft: 5

    }
});