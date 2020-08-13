import React, { Component } from 'react';
import MusicPlayer from '../../components/musicPlayer'
import { View, Text, Slider, ActivityIndicator, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";
import Video from "react-native-video";
import styles from "./styles";

export default class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paused: true,
            currentTime:0,
            rate: 1,
            duration: 1,
            loader:false
        }
    }

    onLoad = (data) => {
        console.log('data',data);
        this.setState({
            duration: Math.floor(data.duration),
            loading: false,
            paused: true
        });
    };

    onProgress = (data) => {
        this.setState({ currentTime: Math.floor(data.currentTime) });
    };
    render() {
        const iconFont = this.props.iconFontSize ? 42 : 24
        return (

            <View style={{ flex: 1 }}>
                <Video
                    ref={(ref) => {
                        this.player = ref;
                    }}
                    source={{
                        uri: this.props.url
                    }}
                    paused={this.state.paused}
                    playInBackground={true}
                    playWhenInactive={true}
                    controls={false}
                />
                {this.state.loading ?
                    <ActivityIndicator size="large" color="#fff" />
                    :
                    <View style={{ height: 40 }}>
                        {!this.state.paused ?
                            <Button
                                transparent
                                large
                                style={styles.btnSection}
                                color="white"
                                onPress={() => this.setState({ paused: !this.state.paused })}
                            >
                                <Icon name="md-pause" style={styles.iconBlack, { fontSize: iconFont, color: '#000' }} />
                            </Button>
                            :
                            <Button
                                transparent
                                large
                                style={styles.btnSection}
                                color="white"
                                onPress={() => this.setState({ paused: !this.state.paused })}
                            >
                                <Icon name="md-play" style={styles.iconBlack, { fontSize: iconFont, color: '#000' }} />
                            </Button>
                        }
                    </View>
                }
            </View>

        )
    }
}