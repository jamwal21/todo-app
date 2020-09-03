import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screens/Home';
import Show from '../../screens/Show';

const Stack = createStackNavigator();

export const rootStack = ()=>{

    const defaultOptions = {
        headerStyle:{
            backgroundColor:'#4a148c'
        },
        headerTitleStyle:{
            color: 'white'
        },
        
    }

    return(
    <Stack.Navigator initialRouteName='Home' screenOptions={defaultOptions}>
        <Stack.Screen 
        name='Home' 
        component={Home}
        options={{ title: 'Todo App' }} />
        <Stack.Screen 
        name='Show' 
        component={Show}
        options={{ title: 'View Todo' }} />
    </Stack.Navigator>
    )
}
