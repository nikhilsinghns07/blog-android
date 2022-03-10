import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{useState}from 'react'
import { ScrollView,KeyboardAvoidingView,StyleSheet, Alert, ActivityIndicator} from 'react-native'
import {Card,Title,Button,TextInput,Text} from 'react-native-paper'

const Login = ({navigation}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    let error , token

    const login = () => {

        if(!email || !password) {
            Alert.alert('Enter Credentials')
            return;
        }
        setIsLoading(true)

        fetch("https://blogbackend7.herokuapp.com/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "email" : email,
                "password" : password
            })
        }).then(res => res.json())
        .then(data => {
            token = data.token
            error = data.error
            setIsLoading(false)
            if(error){
                Alert.alert(
                    "Invalid Credentials",error,
                    [{text: "Okay",style: "cancel"}],
                    {cancelable: true,}
                )
                return
            }
            
            navigation.replace('Home')
        })
    }

    return (
        <ScrollView style={styles.main}>
            <KeyboardAvoidingView>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.title}>Create An Account</Title>
                    
                    <TextInput label="Email" mode="outlined"   onChangeText={(text) => {setEmail(text)}}/>
                    <TextInput label="Password" mode="outlined" secureTextEntry={true}    onChangeText={(text) => {setPassword(text)}} />
                    <Button style={styles.btn} mode="contained" color="yellow" onPress={() => login()} >Login</Button>                
                    <Text style={styles.spinner}>{isLoading ? <ActivityIndicator size="large" color="#FFA500"/> : null}</Text>                
                    <Button style={styles.btn2} mode="text" color="red" >Forgot Password</Button>   
                    <Button style={styles.btn2} mode="text" color="blue" onPress={() => navigation.navigate('Signup')}>New? Create An Account</Button>   
                </Card.Content>
            </Card>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    main :{padding:10,backgroundColor:'black'},
    card : {margin:10,marginTop:20,padding:5,backgroundColor:'lightgrey',borderRadius:20},
    title : {padding:10,textAlign:'center',fontSize:18},
    btn: {margin: 10},
    btn2:{margin:5},
    spinner : {textAlign:'center'}

})