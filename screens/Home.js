import React from 'react'
import { ScrollView } from 'react-native'
import Blog from './Blog'
import { Button } from 'react-native-paper'


const Home = ({navigation}) => {
    const login = () => {
        navigation.navigate('Login')
    }
    return (
        <ScrollView>
            <Button mode="contained" onPress={() => login() }>Login</Button>
            <Blog />
        </ScrollView>
    )
}

export default Home