import React from 'react'
import { Text, View } from 'react-native'

export const navegando = () => {
    return (
        <View style = {{
            flex: 1,
            justifyContent: 'center'
        }}>
            <text style={{
                fontSize: 45,
                textAlign: 'center'
            }}>
                Hola mundo
            </text>
        </View>
    )
}