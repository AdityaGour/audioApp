import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
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
        width: width - 10,
        height: 70,
        margin: 5,
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    image: {
        width: 50,
        height: 50,
        margin: 5,
        borderWidth: 0.7,
        borderColor: '#696969',
        borderRadius: 2
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
        top: 10,
        right: 0,
    }
});
export default styles;