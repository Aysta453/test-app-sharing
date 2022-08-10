import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CustomText({text,componentStyles}) {

    const styles = CustomTextStyles(componentStyles)

    return (
        <Text style={styles.colorText}>{text}</Text>
    );
}

const CustomTextStyles = (styles)=>StyleSheet.create({
    colorText: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: styles?.colorText?.color !== undefined ? styles.colorText.color : 'blue'
      },
 })

export default CustomText;