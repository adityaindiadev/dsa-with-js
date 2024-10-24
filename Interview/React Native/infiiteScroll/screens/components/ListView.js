import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'

const ListView = ({ email,
    first_name,
    last_name,
    avatar }) => {
    return (
        <View style={styles.listContainer}>
            <Image style={styles.avatar} source={{ uri: avatar }} />
            <Text>{first_name} {" "}{last_name} {'\n'}{email}</Text>
        </View>
    )
}


export default ListView


const styles = StyleSheet.create({
    listContainer: {
        width: Dimensions.get('screen').width,
        height: 400,
        flexDirection: 'row'
    },
    avatar: {
        width: 100,
        height: 100,
        marginRight: 10
    }
})
