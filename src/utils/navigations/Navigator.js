import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { rootStack } from './Routes'

const Navigator = () => {
    return (
        <NavigationContainer>
            {
                rootStack()
            }
        </NavigationContainer>
    )
}

export default Navigator
