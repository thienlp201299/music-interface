import * as React from "react";
import { Searchbar } from "react-native-paper";
import { useRoute } from '@react-navigation/native';
import { getSongBySongName } from "../config/API";
import SearchSongName from '../components/SearchSong/SearchSongName';
import { SafeAreaView, TextInput, View, Text, StyleSheet, Button, FlatList,  } from 'react-native'
import {SearchBar} from 'react-native-elements'

const SearchScreen = () => {

  const route = useRoute();
    const[search, setSearch] = React.useState('')
    const [soqbysongname, setSongbySongName] = React.useState([]);
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);
  
  
 React.useEffect(() => {
   (async () => {
      const soqbysongname = await getSongBySongName(search, pageNum);
      setSongbySongName(soqbysongname)  
 
   })();
 }, [search]);
 console.log("search",search)

  const searchFilterFunction = (text) => {
      setSearch(text)
      setFilteredDataSource(search);
     
    }
 
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <SearchBar
              onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction('')}
                placeholder="Nhập bài hát bạn cần tìm"
                value={search}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <FlatList
                data={soqbysongname}
                renderItem={({ item, index }) => (
                    <SearchSongName soqbysongname={item} />
                )}
                keyExtractor={(item, index) => item.songId.toString()}
            />
        </View>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
      },
      itemStyle: {
        padding: 10,
      },
    });
export default SearchScreen;
