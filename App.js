import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import {COLORS} from './constants'


//Screens
import {Home,ItemDetail}  from './screens'



const theme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        border : 'transparent'

    }
};

const Stack = createStackNavigator();



const App= () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{
                headerShown:false
            }}
            initialRouteName={'Home'}
            >
                <Stack.Screen  name='Home' component={Home}  />
                <Stack.Screen  name='ItemDetail' component={ItemDetail}  />
               
            </Stack.Navigator>

        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white
    },
})
export default App;