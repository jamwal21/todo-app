import React,{useState} from 'react'
import { View, Text,StyleSheet, Button,Modal,TextInput, ToastAndroid } from 'react-native'
import db from '../firebase/firebase'

const Show = ({route,navigation}) => {
    const id = route.params.id
    const todo = route.params.todo
    
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    const updateTodo = ()=>{
        db.collection('todos-rn').doc(id).set({
            todo:input
        },{ merge:true })
        setOpen(false)
        navigation.popToTop()
        ToastAndroid.show("Todo Updated",ToastAndroid.SHORT)
    }

    return (
        <View style={styles.container}>
            <Modal
            animationType="fade"
            visible={open}>
                <View style={styles.modal}>
                <TextInput 
                style={styles.textInput} 
                placeholder="Update your Todo" 
                multiline
                value={input}
                onChangeText={(newTodo)=>setInput(newTodo)} />
                <View style={{...styles.button,marginTop:10}}>
                    <Button title="UPDATE" onPress={updateTodo} />
                </View>
                </View>
            </Modal>
            <Text style={styles.text}>{todo}</Text>
            <View style={styles.button}>
                <Button title="EDIT" onPress={() => {
                    setInput(todo)
                    setOpen(true)
                }} />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    text:{
        padding:10,
        fontSize:20
    },
    button:{
        width:100,
    },
    modal:{
        flex:1,
        alignItems:'center'
    },
    textInput:{
        borderWidth:2,
        borderRadius:5,
        borderColor:'#C2185B',
        height:150,
        width:'90%',
        marginTop:20,
        padding:5,
        fontSize:17,
    },
})

export default Show
