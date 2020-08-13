import React from 'react';
import { View, Text, Slider, ActivityIndicator, Image, H3 } from "react-native";
import styles from "./styles";
import Play from '../../components/play';
import Spinner from 'react-native-loading-spinner-overlay';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


export default SongDetailsView = (props) => {
    const { item, spinner,goBack } = props;
    return (
        <View style={styles.container}>
            <Spinner
                visible={spinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <View style={styles.cardSection}>
                <View style={{flexDirection:'row', width: '100%'}}>
                    <TouchableOpacity style={{ marginLeft: 5, width: 50,height:30}} onPress={goBack}>
                    <Icon name="arrow-back"   />
                    </TouchableOpacity>
                    
                    <Text style={styles.authorName}>{item.artistName}</Text>
                </View>

                <Image
                    style={styles.image}
                    source={{ uri: item.artworkUrl60 }}
                />
                <View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text numberOfLines={1} style={styles.songTitle}>{item.trackName}</Text>
                        <Text numberOfLines={1} style={styles.collectionName}>{item.collectionName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text numberOfLines={3} style={styles.desc}>{item.artistName}</Text>
                        <Text numberOfLines={3} style={styles.time}>{(millisToMinutesAndSeconds(item.trackTimeMillis))} min</Text>
                    </View>
                </View>

                <View style={styles.player}>
                    <Play url={item.previewUrl} iconFontSize={true} />
                </View>

            </View>

        </View>
    )
}
