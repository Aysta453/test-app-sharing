import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const CustomText = ({componentStyles}) => {
    const innerStyles = CustomTextStyles()

    const styles = CombineStyles(innerStyles, componentStyles )
    return (
        <>
            <Text style={styles.colorText1} >Welcome to Test Text</Text>
            <Text style={styles.colorText2} >Welcome to Test Text</Text>
        </>
    )
}

const CustomTextStyles = () =>StyleSheet.create({
    colorText1: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue'
      },
    colorText2: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue'
    },
 })


export default CustomText

const CombineStyles = (innerStyles, outerStyles = { }) =>{
    let styles = { }

    Object.keys(innerStyles).forEach(objectName => {
        styles[objectName] = StyleSheet.compose(innerStyles[objectName], outerStyles[objectName]) 
    });

    return styles
 }