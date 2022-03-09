import React from 'react'
import { useState } from 'react'
import { ScrollView,KeyboardAvoidingView ,StyleSheet,Alert, NativeModules} from 'react-native'
import {Card,Title,Button,TextInput,Text} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native-paper';

const Signup = ({navigation}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    let error , token

    const signup = () => {

        if(!email || !password || !name ){
            Alert.alert('Provide Credentials')
            return 
        }

        setIsLoading(true)

        fetch("https://blogbackend7.herokuapp.com/signup",{
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "name" : name,
                "email":email,
                "password":password
            })
        })
        .then(res => res.json())
        .then( data => {
            token = data.token
            error = data.error
            setIsLoading(false)
            if(error){
                Alert.alert(
                    "Invalid Credentials",error,
                    [{text: "Okay",style: "cancel"}],
                    {cancelable: true,}
                  );
                return
            }
            AsyncStorage.setItem('SIGNUP_TOKEN',token)
            navigation.replace('Login')
        })
    }


    return (
        <ScrollView style={styles.main}>
            <KeyboardAvoidingView>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.title}>Create An Account</Title>
                        <TextInput label="Name" mode="outlined"   onChangeText={(text) => {setName(text)}}/>
                        <TextInput label="Email" mode="outlined"   onChangeText={(text) => {setEmail(text)}}/>
                        <TextInput label="Password" mode="outlined" secureTextEntry={true}    onChangeText={(text) => {setPassword(text)}} />
                        <Button style={styles.btn} mode="contained" color="yellow" onPress={() => signup()}>SignUp</Button>
                        <Text style={styles.spinner}>{isLoading ? <ActivityIndicator size="large" color="#FFA500"/> : null}</Text>                
                    </Card.Content>
                </Card>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Signup

const styles = StyleSheet.create({
    main : {padding:10,backgroundColor:'black'},
    card : {margin:10,padding:5,backgroundColor:'lightgrey',borderRadius:20},
    title : {padding:10,textAlign:'center',fontSize:18},
    btn: {margin: 10},
    spinner : {textAlign:'center'}
})


// return fetch(url)
// .then(processResponse)
// .then(res => {
//     const { statusCode, data } = res;
//     console.log("statusCode",statusCode);
//     console.log("data",data);
// }) .catch(error => {
// console.error(error);
// return { name: "network error", descriptiron: "" };
// });