import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const ItemDetail = (props) => {
    const {iteminfo} = props.route.params
    return (
  
        <View style={styles.container}>
            <Image
                style={{ width: '100%', height: '100%' }}
                source={iteminfo.image}
                resizeMode='cover' />
            <Text>ItemDetail Page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
export default ItemDetail;