import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getNewSong, getTopViews } from '../config/API';
import SongItem from '../components/SongNew/SongItem'
import TopView from '../components/SongTopView/TopView';
export default function HomeScreen() {
  const [newsongs, setNewSongs] = React.useState([]);
  const [topviews, setTopView] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);

  React.useEffect(() => {
    (async () => {
      const newsongs = await getNewSong(pageNum);
      setNewSongs(newsongs);

      const topviews = await getTopViews(pageNum);
      setTopView(topviews);

    })();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight: 'normal', fontSize: 30, color: '#F6CED8' }}> Bài Hát Mới</Text>
        <FlatList
          horizontal
          data={newsongs}
          renderItem={({ item, index }) => (
            <SongItem
              song={item}
            />
          )}
          keyExtractor={(item) => item.songId.toString()}
          showsHorizontalScrollIndicator={true}
        />
      </View>

      <View style={styles.container}>
        <Text style={{ fontWeight: 'normal', fontSize: 30, color: '#F6CED8', textAlign: 'left' }}> Nghe Nhiều</Text>
        <FlatList
          horizontal
          data={topviews}
          renderItem={({ item, index }) => (
            <TopView
              view={item}
            />
          )}
          keyExtractor={(item) => item.songId.toString()}
          showsHorizontalScrollIndicator={true}
        />
      </View>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
