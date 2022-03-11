import React ,{ useState } from 'react'
import { useEffect } from 'react';
import { ScrollView} from 'react-native'
import {Card,Title,Paragraph,Text,Button} from 'react-native-paper'

const Blog = () => {
    const [isLoading, setLoading] = useState(true);
    const [posts,setPosts] = useState({})
    const [error,setError] = useState({})

    const fetchData = async () => {
        try {
            const response = await fetch("https://blogbackend7.herokuapp.com/getPost")
            const json = await response.json()
            setPosts(json.data)
            setError(json.error)        
        }catch(err){
            Alert.alert(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        fetchData()
    },[])
    

    return (
        <ScrollView>
            {posts.map((posts,idx) =>
            <Card style={{margin:10,padding:5,backgroundColor:'#8bc6f0',borderRadius:20}} key={idx}>
            <Card.Content>
                <Title style={{padding:10}}>{posts.title}</Title>
                <Card.Cover source={{ uri: posts.imageUrl }} style={{borderRadius:10}}/>
                <Paragraph style={{padding:10}}>{posts.content}</Paragraph>
                <Text style={{paddingLeft:10}}> {posts.author}</Text>
                </Card.Content>
            </Card>
            )
        }
            
            
        </ScrollView>
    )
}

export default Blog 