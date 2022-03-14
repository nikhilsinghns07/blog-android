import React from 'react'
import { useEffect ,useState ,useCallback} from 'react'
import {  ActivityIndicator, ScrollView ,StyleSheet ,Text,RefreshControl} from 'react-native'
import Blog from './Blog'

const Api = () => {
    const [refreshing,setRefreshing] = useState(false)
    const [posts , setPosts] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(5000).then(() => setRefreshing(false));
      }, []);
    

    const fetchData = () => {
        setIsLoading(true)
        fetch("https://blogbackend7.herokuapp.com/getPost")
        .then((res) => res.json()).then(data => {
            setPosts(data.posts)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
        return setPosts([])
    }, [])
    
    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            <Text style={styles.spinner}>{isLoading ? <ActivityIndicator size="large" color="#FFA500"/> : null}</Text>                
            <Blog data={posts}/>
        </ScrollView>
    )
}

export default Api

const styles = StyleSheet.create({
    spinner : {textAlign:'center'}

})