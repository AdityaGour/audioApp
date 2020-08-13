/**
 * Audrix (https://www.enappd.com/audrix)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

const React = require("react-native");
const { Dimensions } = React;
const deviceWidth = Dimensions.get("window").width;

export default {
    container: {
        backgroundColor: "#121212",
        flex: 1,
        zIndex: 50
    },
    center: {
        flex: 1,
        alignItems: "center",
    },
    trackView: {
        paddingTop: 24,
        flexDirection: "row",
        paddingLeft: 20,
        alignItems: "center",
        paddingRight: 20,
        marginTop: 320
    },
    detailsWrapper: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    artist: {
        color: "grey",
        fontSize: 12,
        marginTop: 4,
    },
    slider: {
        flex: 1,
        alignItems: "center",
        marginBottom: 30
    },
    seekView: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },
    seekBar: {
        width: deviceWidth - 20,
        marginTop: 25
    },
    controls: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 50,
        marginLeft: 50,
    },
    play: {
        height: 55,
        width: 55,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 55 / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    time: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: -20,
    },
    timeChildView:{ 
        alignItems: "center",
        flex: 0.15 
    },
    timeChildViewText:{ 
        color: "white",
        fontSize: 12
    },
    iconBlack:{
        color:"#000"
    },
    btnSection:{
        backgroundColor: "transparent",
        alignItems: "center",
        height: 40,
        alignSelf: 'center'
    },
    btnTransparent:{
        backgroundColor: "transparent"
    },
    width10:{
        width: 10
    },
    width30:{
        width: 30
    }
};
