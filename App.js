import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from './components/CustomText/CustomText'

export default function App() {

  const isVertical = true;

  const stylesTest = styles1(isVertical)
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CustomText text={'Red'} componentStyles={stylesTest}/>
      <CustomText text={'Red'}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles1 = (isVertical) => StyleSheet.create({
  colorText1:{
    color: isVertical ? 'green' : 'violet',
    fontSize: 30
  },
  colorText2:{
    color: 'green',
    fontSize: 20
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
