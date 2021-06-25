import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getAllAuthor } from '../config/API';
import ListAuthor from '../components/Author/ListAuthor';

export default function AuthorScreen() {
  const [authors, setAuthors] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);

  React.useEffect(() => {
    (async () => {
      const authors = await getAllAuthor(pageNum);
      setAuthors(authors);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={authors}
        renderItem={({ item }) => (
          <ListAuthor
            authors={item}
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
  },
});
