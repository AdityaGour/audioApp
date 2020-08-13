import React, { Component } from 'react';
import { AudioData } from '../../constants/constantData';
import AudioView from './audioView';

export default class AudioListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            loading: true,
            loadingMore: false,
            error: null,
            dataFetch: true,
            data: AudioData.results,
            spinner: true
        }
    }

    componentDidMount() {
        this.loaderSpinner()
    }

    loaderSpinner = () => {
        setTimeout(() => { this.setState({ spinner: false }) }, 3000)
    }

    nextScreen = (index) => {
        this.props.navigation.navigate('Profile',{index:index});
    }

    render() {
        return (
            <AudioView
                spinner={this.state.spinner}
                songsList={this.state.data}
                nextScreen={this.nextScreen}
            />
        )
    }
}
