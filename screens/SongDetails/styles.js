import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        // paddingTop: 22,
        borderWidth: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: height
    },
    authorName: {
        fontSize: 20,
        textAlign:'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    spinnerTextStyle: {
        color: '#fff',
    },
    cardSection: {
        paddingTop: 5,
        width: 300,
        height: 340,
        elevation: 8,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        width: 150,
        height: 150,
        margin: 5,
        borderWidth: 0.7,
        borderColor: '#696969',
        borderRadius: 3,
        marginTop: 15
    },
    textSection: {
        // alignSelf: 'flex-end',
        paddingBottom: 10,
        position: 'relative'
    },
    songTitle: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 4,
        marginLeft: 2,
        width: 160
    },
    collectionName: {
        color: '#000',
        fontSize: 12,
        width: 160,
        marginLeft: 2,
    },
    desc: {
        color: '#000',
        marginTop: 3,
        marginLeft: 3,
        fontSize: 12,
        fontWeight: '400'
    },
    time: {
        color: '#000',
        marginTop: 3,
        marginLeft: 8,
        fontSize: 12,
        fontWeight: '400'
    },
    buttonStyle: {
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green'
    },
    player: {
        position: 'absolute',
        bottom: 20,
        borderWidth: 0.7,
        borderRadius: 3,
        borderColor: '#000'
    }
});
export default styles;