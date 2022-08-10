import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from './components/CustomText'
import CustomText2 from './components/CustomText2'

export default function App() {

  const CustomText1StylesRed = {
    colorText:{
      color:'red'
    }
  }
  const CustomText1StylesRedGreen = {
    colorText:{
      color:'green'
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CustomText text={'Red'} componentStyles={CustomText1StylesRed}/>
      <CustomText text={'Green'} componentStyles={CustomText1StylesRedGreen}/>
      <CustomText text={'Normal Blue!!'} />
      <CustomText2 componentStyles={CustomText1StylesRed}/>
      <CustomText2 componentStyles={CustomText1StylesRedGreen}/>
      <CustomText2/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
