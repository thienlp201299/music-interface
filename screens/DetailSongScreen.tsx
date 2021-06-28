import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Sound } from "expo-av/build/Audio/Sound";
import { getNewSong, getSongDetail } from '../config/API';
import { RotationGestureHandler } from 'react-native-gesture-handler';
/* import { RetweetOutlined } from '@ant-design/icons' */


const DetailSongScreen = () => {

    const route = useRoute();
    const parms: any = route.params;
    const [detailsongs, setDetailSongs] = useState(null);
    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);
    const [listsong, setListSong] = useState([]);
    const [current, setcurrent] = useState(0);



    const Playsong = async () => {
        const { sound: newSound } = await Sound.createAsync(
            { uri: detailsongs && detailsongs.music },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate

        )
        setSound(newSound)
    }

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);


    useEffect(() => {
        (async () => {
            const detailsongs = await getSongDetail(parms.id);
            setDetailSongs(detailsongs);

        })();
    }, [parms.id]);


    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }


    useEffect(() => {
        if (detailsongs) {
            Playsong();
        }
    }, [detailsongs])






    /*   useEffect(() => {
          (async () => {
              setListSong(x => [...x, detailsongs])
              const newsongs = await getNewSong(1);
              console.log('newsong', newsongs)
  
              newsongs.map(y => setListSong(x => [...x, y]));
          });
      }, []);
  
      const next = async (list, stt) => {
          if (sound) {
              await sound.unloadAsync();
          }
          const { sound: newSound } = await Sound.createAsync(
              { uri: list[stt] && list[stt].music },
              { shouldPlay: isPlaying },
              onPlaybackStatusUpdate
          )
          setSound(newSound)
      }
      useEffect(() => {
          if (listsong) {
              next(listsong, current);
          }
      }, [listsong]) */



    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.pauseAsync();
        }
        else {
            await sound.playAsync();
        }

    }


    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }

        return (position / duration) * 100;
    }

    if (!detailsongs) {
        return null;
    }

    /*  const renderItem = ({ item }) => {
         return (
 
             <View><Text>{item.song_name}</Text></View>
 
         );
     }; */


    return (
        <View style={{ backgroundColor: '#EFF2FB', width: '100%' }}>
            <View style={[styles.progress, { width: `${getProgress()}%` }]} />
            <Image source={{ uri: detailsongs && detailsongs.image }} style={styles.img} />
            <Text style={styles.title} >{detailsongs && detailsongs.song_name}</Text>
            <View style={styles.row}>
                <View style={styles.nexts}>
                    <TouchableOpacity /* onPress={ReplayPress}onPress={() => next(listsong, setcurrent(current - 1))} */ >
                        <AntDesign name="stepbackward" size={45} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.play}>
                    <TouchableOpacity onPress={onPlayPausePress} >
                        <MaterialIcons name={isPlaying ? "pause-circle-filled" : "play-circle-filled"} size={60} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.next}>
                    <TouchableOpacity /* onPress={() => { next(listsong, setcurrent(current + 1)) }} */ >
                        <AntDesign name="stepforward" size={45} color="black" />
                    </TouchableOpacity>
                </View>



            </View>
            {/* <FlatList
                style={{ width: '100%', height: 200, }}
                data={listsong}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            /> */}
        </View>
    )
}
export default DetailSongScreen;

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    img: {
        width: 300,
        height: 300,
        marginLeft: 55,
        marginTop: 30,
        borderRadius: 150,
        borderColor: "black",
        backgroundColor: '#F781D8',
        alignItems: "center"
    },
    row: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 85
    },
    play: {
        alignItems: 'center'

    },
    next: {
        top: 7,
        marginLeft: 40
    },
    nexts: {
        top: 7,
        marginRight: 40,

    },
    progress: {
        height: 3,
        backgroundColor: '#bcbcbc'
    },

});