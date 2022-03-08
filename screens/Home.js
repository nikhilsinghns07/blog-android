import React from 'react'
import { ScrollView,View,StyleSheet } from 'react-native'
import Blog from './Blog'
import {Card,Title,Text,Button} from 'react-native-paper'

const Home = ({navigation}) => {
    
    return (
        <ScrollView>
            
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.title}>Welcome</Title>
                    <Text style={styles.text}>Write something about your specality.😊</Text>

                    <View style={styles.topView}>
                        <Text style={styles.text2}>Login to create a Post</Text> 
                        <Button mode="contained" style={styles.btn} onPress={() => navigation.navigate('Login')}>Login</Button>
                    </View>

                    <View style={styles.view}>
                        <Text style={styles.text3}>New? Create an Account</Text> 
                        <Button mode="contained" style={styles.btn} onPress={() => navigation.navigate('Signup')}>Signup</Button>
                    </View>

                </Card.Content>
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
    text : {textAlign:'center',color:'red',fontSize:15},
    topView : {flexDirection:'row',justifyContent:'space-between',padding:20},
    text2 : {color:'blue',fontSize:15},
    btn : {borderRadius:10},
    view : {flexDirection:'row',justifyContent:'space-between',padding:10},
    text3 : {color:'blue',fontSize:15}
})