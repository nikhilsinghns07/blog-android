import React,{useState} from 'react'
import { ScrollView,KeyboardAvoidingView, View ,StyleSheet, Alert} from 'react-native'
import {Card,Title,Text,Button,TextInput} from 'react-native-paper'

const CreatePost = ({navigation}) => {
    const [author,setAuthor] = useState('')
    const [title,setTitle] = useState('')
    const [imageurl,setImageUrl] = useState('')
    const [content,setContent] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const createpost = () => {
        if(!author || !title || !imageurl || !content){
            Alert.alert('Provide all the required details in order to create a post.')
            return;
        }

        setIsLoading(true)
        fetch("https://blogbackend7.herokuapp.com/createpost",{
            method: "POST",
            headers : {
                "Content-Type"  : "application/json"
            },
            body:JSON.stringify({
                "author" : author,
                "title" : title,
                "content" : content,
                "imageUrl" : imageurl
            })
        }).then(res => res.json())
        .then(data => {
            let error = data.error
            setIsLoading(false)

            if(error){
                Alert.alert(error)
            }
            return;
        })
        navigation.navigate('Home')
    }

    return (
        <ScrollView style={{backgroundColor:'black'}}>
            <KeyboardAvoidingView>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Create Post</Title>
                        <TextInput label="Author" mode="outlined" onChangeText={(text) => {setAuthor(text)}}/>
                        <TextInput label="Title" mode="outlined" onChangeText={(text) => {setTitle(text)}}/>
                        <TextInput label="ImageUrl (Optional)" mode="outlined" onChangeText={(text) => {setImageUrl(text)}}/>
                        <TextInput label="Content" multiline={true} mode="outlined" style={{height:200}} onChangeText={(text) => {setContent(text)}}/>
                    </Card.Content>
                    <Card.Actions style={styles.action}>
                        <Button mode='contained' color="orange" onPress={() => createpost()}>Post</Button>
                        <Button mode='contained' color="red" onPress={() => navigation.navigate('Home')}>Cancel</Button>
                    </Card.Actions>
                </Card>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default CreatePost

const styles = StyleSheet.create({
    action:{
        padding: 15,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    card:{
        margin: 10,
        borderRadius :20,
        backgroundColor : '#b985ed'

    }
})