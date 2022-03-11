import React from 'react'
import { ScrollView,View,StyleSheet } from 'react-native'
import Blog from './Blog'
import {Card,Title,Text,Button} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({navigation}) => {
    const logout = () => {
        const token = AsyncStorage.getItem('LOGIN_TOKEN')
        if(token == null){
            Alert.alert("Not LoggedIn")  
        }
        AsyncStorage.removeItem('LOGIN_TOKEN')
        navigation.replace('Login')
    }
    
    return (
        <ScrollView>           
            <Card style={styles.card}>
                
                <Card.Content>
                    <Title style={styles.title}>Welcome</Title>
                    <View style={styles.topView}>
                        <Text style={styles.text}>Write something</Text>
                        <Button mode="contained" style={styles.btn} onPress={() => {navigation.navigate('CreatePost')}}>Create Post</Button>
                    </View>
                </Card.Content>
                <Button style={{flexDirection:'row',justifyContent:'flex-end'}} color='red' onPress={() => logout()}>Logout</Button>
            </Card>
            <Blog />
            
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    card : {
        margin:10,padding:5,backgroundColor:'lightgrey',borderRadius:20
    },
    title : {padding:10,textAlign:'center',fontSize:18},
    text : {textAlign:'center',color:'#ff8000',fontSize:16,},
    topView : {flexDirection:'row',justifyContent:'space-between',padding:20},
    text2 : {color:'blue',fontSize:15},
    btn : {borderRadius:10},
    view : {flexDirection:'row',justifyContent:'space-between',padding:10},
    text3 : {color:'blue',fontSize:15}
})