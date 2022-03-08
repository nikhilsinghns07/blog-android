import React from 'react'
import { ScrollView,KeyboardAvoidingView, View ,StyleSheet} from 'react-native'
import {Card,Title,Text,Button,TextInput} from 'react-native-paper'

const Login = ({navigation}) => {

    return (
        <ScrollView style={styles.main}>
            <KeyboardAvoidingView>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.title}>Create An Account</Title>
                    <TextInput label="Name" mode="outlined"   onChangeText={(text) => {setEmail(text)}}/>
                    <TextInput label="Email" mode="outlined"   onChangeText={(text) => {setEmail(text)}}/>
                    <TextInput label="Password" mode="outlined" secureTextEntry={true}    onChangeText={(text) => {setPassword(text)}} />
                    <Button style={styles.btn} mode="contained" color="yellow" >Login</Button>                
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
    btn: {
        margin: 10
    },
    btn2:{margin:5}
})