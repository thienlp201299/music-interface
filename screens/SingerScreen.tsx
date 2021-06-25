import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getAllSinger } from '../config/API';
import ListSinger from '../components/Singer/ListSinger';


export default function SingerScreen() {
  const [singers, setSingers] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);

  React.useEffect(() => {
    (async () => {
      const singers = await getAllSinger(pageNum);
      setSingers(singers);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={singers}
        renderItem={({ item }) => (
          <ListSinger
            singers={item}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  }
});
