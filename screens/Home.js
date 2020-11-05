import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';

import { COLORS, FONTS, icons, SIZES, images } from '../constants'


const ScrollableTab = ({ tabList, selectedTab, onPress }) => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ marginHorizontal: SIZES.padding }}
                onPress={() => onPress(item)}
            >
                <Text style={{ color: COLORS.secondary, ...FONTS.body2 }}>{item.name}</Text>
                {item.id == selectedTab.id &&
                    <View style={{ alignItems: 'center' }}>
                        <View style={{
                            width: 10,
                            height: 10,
                            backgroundColor: COLORS.blue,
                            borderRadius: SIZES.radius
                        }}>
                        </View>
                    </View>}
            </TouchableOpacity>)
    }

    return (

        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tabList}
                renderItem={renderItem}
                keyExtractor={item => String(item.id)}
            />

        </View>
    )

}
const ScrollableCard = ({ navigation, productList }) => {


    const renderCard = ({ item }) => {
        return (

            <TouchableOpacity style={{ marginLeft: SIZES.padding }}
                onPress={() => { navigation.navigate('ItemDetail', { 'iteminfo': item }) }}
            >
                <View style={{ width: SIZES.width / 2 }}>
                    <Image
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: SIZES.radius * 2
                        }}
                        source={item.image}
                        resizeMode='cover' />
                    <View style={{
                        position: 'absolute',
                        top: 15,
                        left: '10%',
                        right: '10%'
                    }}>
                        <Text style={{
                            color: COLORS.lightGray2, ...FONTS.h3
                        }}>Furtine</Text>
                        <Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}>{item.productName}</Text>
                    </View>
                    <View style={{
                        position: 'absolute',
                        bottom: 20,
                        paddingVertical: 15,
                        paddingHorizontal: 10,
                        left: 20,

                        backgroundColor: COLORS.
                            transparentLightGray, borderRadius: 15,

                    }}>
                        <Text style={{ ...FONTS.h3 }}> ₺ {item.price.toFixed(2)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={item => String(item.productId)}
            />
        </View>
    )

}


const Home = ({ navigation }) => {

    const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.whiteChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.whiteChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Chair",
        title: 'chairs',
        productList: [
            {
                productId: 1,
                productName: 'Chair Green Colour',
                price: 10.00,
                image: images.greenChair,
            },
            {
                productId: 2,
                productName: 'Chair Peach Colour',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 3,
                productName: 'Chair White Colour',
                price: 10.00,
                image: images.whiteChair,
            },

        ]
    })

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, marginTop: SIZES.padding }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => { console.log("Menu") }}>
                        <Image
                            source={icons.menu}
                            resizeMode='contain'
                            style={{ width: 25, height: 25 }}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }} onPress={() => { console.log("Basked") }}>
                        <Image
                            source={icons.cart}
                            resizeMode='contain'
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderTitle(title) {
        return (
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>Collection of</Text>
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>{title}</Text>
            </View>
        )

    }

    function renderPromotionCard() {
        return (
            <View style={[styles.shadow, {
                flexDirection: 'row',
                marginHorizontal: SIZES.padding,
                padding: SIZES.radius,
                height: 110,
                borderRadius: 20,
                backgroundColor: COLORS.white,

            }]}>
                <View style={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.lightGray2,
                    borderRadius: 20,

                }}>
                    <Image
                        source={images.sofa}
                        resizeMode='contain'
                        style={{ width: '50%', height: '50%' }}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginLeft: SIZES.padding}}>
                    <Text style={{ ...FONTS.h2 }}>Special Offer</Text>
                    <Text style={{ ...FONTS.body4 }}>Add your card</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',marginRight:SIZES.radius}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor:COLORS.primary,
                            height:'70%',
                            width:40,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:10

                        
                        }}>

                            <Image 
                            source={icons.chevron}
                            resizeMode={'contain'}
                            style={{
                                width:'50%',
                                height:'50%'
                            }}
                            />

                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderTitle(selectedTab.name)}
            <ScrollableTab
                tabList={tabList}
                selectedTab={selectedTab}
                onPress={(item) => { setSelectedTab(item) }}
            />
            <View style={{ flex: 1 }}>
                <ScrollableCard
                    navigation={navigation}
                    productList={selectedTab.productList}

                />
            </View>
            <View style={{ height: '19%', justifyContent: 'center' }}>
                {renderPromotionCard()}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,

        },
        shadowOpacity: 0.32,
        shadowRadius: 6,
        elevation: 5,



    }
})
export default Home;