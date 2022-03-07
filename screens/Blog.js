import React from 'react'
import { ScrollView } from 'react-native'
import {Card,Title,Paragraph,Text,Button} from 'react-native-paper'

const Blog = ({navigation}) => {

    

    return (
        <ScrollView>
            
            <Card style={{paddingTop:20,padding:10}}>
            
            <Card.Content>
                <Title style={{padding:10}}>Blog</Title>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{borderRadius:10}}/>
                <Paragraph style={{padding:10}}>Blog Content</Paragraph>
                <Text style={{paddingLeft:10}}> User Name </Text>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

export default Blog 
