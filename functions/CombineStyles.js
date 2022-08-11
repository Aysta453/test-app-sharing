import { StyleSheet} from 'react-native';

const CombineStyles = (innerStyles, outerStyles = { }) =>{
    let styles = { }

    Object.keys(innerStyles).forEach(objectName => {
        styles[objectName] = StyleSheet.compose(innerStyles[objectName], outerStyles[objectName]) 
    });

    return styles
 }

 export default CombineStyles;