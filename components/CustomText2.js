import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const CustomText2 = ({componentStyles}) => {

    const innerStyles = CustomTextStyles()
    const styles = StyleSheet.compose(innerStyles.colorText, componentStyles?.colorText)
    
    return (
        <Text style={styles}>Welcome to Konrad Test Text</Text>
    )
}

const CustomTextStyles = () =>StyleSheet.create({
    colorText: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue'
      },
 })


export default CustomText2