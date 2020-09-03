import React from 'react'
import { View, Text, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native'
import {Feather} from '@expo/vector-icons'
import db from '../firebase/firebase'

const Todo = ({data,navigation}) => {

    const deleteTodo = ()=>{
        db.collection('todos-rn').doc(data.id).delete()
        ToastAndroid.show("Todo Deleted",ToastAndroid.SHORT)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.textContainer} 
            onPress={() => navigation.navigate('Show',{
                id:data.id,
                todo:data.todo
            })}>
                <Text style={styles.text} numberOfLines={3} >{data.todo}</Text>
            </TouchableOpacity>
            <Feather name="trash-2" onPress={deleteTodo} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    textContainer:{
        width:'80%',
    },
    text:{
        borderWidth:2,
        borderColor:'#C2185B',
        borderRadius:5,
        fontSize:17,
        flexWrap:'wrap',
        padding:7,
        marginBottom:10
    },
    icon:{
        fontSize:30,
        alignSelf:'center'
    }
})

export default Todo
