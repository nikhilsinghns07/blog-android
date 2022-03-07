
import React from 'react'
import { ScrollView, Text,KeyboardAvoidingView, View ,StyleSheet} from 'react-native'
import { Button,TextInput } from 'react-native-paper'
const Login = () => {

    return (
        <ScrollView style={{padding:10}}>
            <KeyboardAvoidingView>
                <View style={styles.loginContainer}>
                    <Text style={styles.text}>Welcome</Text>
                    <Text style={styles.text}>Login to your account</Text>
                    <Text style={styles.txt2}></Text>
                    <TextInput label="Email" mode="outlined" style={styles.textInput}  onChangeText={(text) => {setEmail(text)}}/>
                    <TextInput label="Password" mode="outlined" secureTextEntry={true} style={styles.textInput}   onChangeText={(text) => {setPassword(text)}} />
                    <Button style={styles.btn} mode="contained" color="yellow" onPress={() => login() }>Login</Button>                
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        padding: 10,
        backgroundColor : 'black'
    },
    btn: {
        margin: 10
    },
    text:{
        color: 'white',
        textAlign : 'center',
        fontSize : 30
    }
})