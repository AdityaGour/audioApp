import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AudioData } from '../../constants/constantData';
import SongDetailsView from './songDetailsView';

export default class SongDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paused: true,
            item: AudioData.results[0], // index,
            spinner: true,
            index: this.props.navigation.getParam('index'),
        }
    }
    componentDidMount() {
        this.loaderSpinner()
    }

    loaderSpinner = () => {
        setTimeout(() => { this.setState({ spinner: false , item:AudioData.results[parseInt(this.state.index) -1] }) }, 3000)
    }
    goBack = () => {
        this.props.navigation.goBack();
    }


    render() {
        return (
            <SongDetailsView
                spinner={this.state.spinner}
                item={this.state.item}
                goBack={this.goBack}
            />
        )
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});