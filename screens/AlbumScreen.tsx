import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import albDetails from '../data/albDetails';
import Songlist from '../components/Songlist';
import Albumheader from '../components/Albumheader';

const AlbumScreen = () => {
  const route = useRoute();


  useEffect(() => {
    console.log(route);
  }, []
  )

  return (
    <View>
      {/*  <FlatList
          data={albDetails.songs}
          renderItem={({item})=> <Songlist song={item}/>}
          keyExtractor= {(item)=> item.id}
          ListHeaderComponent={()=> <Albumheader album={albDetails} />}
        /> */}
      <Text style={{ color: "#F6CEEC" }}>Heelovvvvvvvvvvvvvvvvvvvvvvvvvvv</Text>
    </View>
  )
}
export default AlbumScreen;