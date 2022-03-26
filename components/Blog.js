import React from 'react'

import {  ScrollView} from 'react-native'
import {Card,Title,Paragraph} from 'react-native-paper'

const Blog = ({data}) => {
    
    return (
        
        <ScrollView>
            {
                data.map( (post,idx) => 
                    <Card style={{margin:10,padding:5,backgroundColor:'#8bc6f0',borderRadius:20}} key={idx}>
                        <Card.Content>
                            <Title style={{padding:10}}>{post.title} by {post.author}</Title>
                            <Card.Cover source={{ uri: post.imageUrl }} style={{borderRadius:10}}/>
                            <Paragraph style={{padding:10}}>{post.content}</Paragraph>
                        </Card.Content>
                    </Card>
                
            )
        }
        </ScrollView>
    )
}

export default Blog 