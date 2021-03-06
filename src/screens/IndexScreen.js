import React,{useContext,useState} from 'react';
import {Text,View,FlatList,Button} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = ()=>{
    const {state,addBlogPost} = useContext(Context);
    return(
        <View>
            <Button title="Add post" onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={blogPost=>blogPost.title}
                renderItem={({item})=>{
                    return <Text>{item.title}</Text>;
                }}

            />
        </View>
    );
};

export default IndexScreen;