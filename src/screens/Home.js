import React, { useState, useEffect } from 'react'
import { View,StyleSheet, TextInput, Button,FlatList } from 'react-native'
import Todo from '../components/Todo'
import db from '../firebase/firebase'
import firebase from 'firebase'

const Home = (props) => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    
    useEffect(()=>{
        db.collection('todos-rn').orderBy('timestamp','desc').onSnapshot(snapshot => {
          setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo}))) 
        })
      },[]) 

    const addTodo = ()=>{
        db.collection('todos-rn').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
        setInput('')
    }

    const renderTodos = (itemData)=>(
        <Todo data={itemData.item} navigation={props.navigation} />
    )

    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.textInput} 
            placeholder="Write a Todo" 
            value={input}
            onChangeText={(newTodo)=>setInput(newTodo)} />
            <View style={styles.button}>
                <Button 
                disabled={!input}
                title="ADD TODO"
                onPress={addTodo} />
            </View>
            <FlatList
            data={todos}
            renderItem={renderTodos} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    textInput:{
        borderBottomWidth:2,
        height:50,
        width:'60%',
        marginTop:5,
        padding:5,
        fontSize:17,
    },
    button:{
        marginTop:10,
        marginBottom:20,
        width:100
    }
  });

export default Home
