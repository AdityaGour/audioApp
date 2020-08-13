import React, { Component } from 'react';
import {
    FlatList, StyleSheet,
    Text, View,
    Image,
    Button,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import Play from '../../components/play';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from "./styles";
import { Icon } from 'native-base';
const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const AudioView = (props) => {
    const { songsList, spinner, nextScreen } = props
    return (

        <View style={styles.container}>
            <Spinner
                visible={spinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            {!spinner && <FlatList
                data={songsList}

                keyExtractor={(item) => item.trackId.toString()}
                renderItem={({ item, index }) =>
                    <TouchableOpacity style={styles.cardSection} key={index} onPress={nextScreen}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.artworkUrl100 }}
                        />
                        <View style={styles.textSection}>
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
                            <Play url={item.previewUrl} />
                        </View>
                    </TouchableOpacity>}
            />}
        </View>

    )
}


export default AudioView;