import { useCallback } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import GamingImage from './assets/images/misc/gaming.svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ headerShown:false }}/>        
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
}

const Home = () =>{
  return(
      <View style={styles.container}>
        <Text style={styles.text}>
          Home Screen
        </Text>
      </View>
  );  
}


const Main = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf')
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {      
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={{marginTop:50}}>
        <Text style={styles.text}>Comex OnLine</Text>        
      </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <GamingImage width={300} height={300} style={styles.logo}  />
        </View>
      <TouchableOpacity style={styles.touchableopacity}
      onPress={()=>navigation.navigate('Home')}
      >
        <Text style={styles.textbutton}>Lets begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color={'#fff'}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily:'Inter-Bold',
    fontSize:30,
    fontWeight:'bold',
    color:'#20315f'
  },
  touchableopacity:{
    backgroundColor:'#AD40AF',
    padding:20,
    width:'90%',
    borderRadius:5,
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:50
  },
  textbutton:{
    fontFamily:'Roboto-MediumItalic',
    fontWeight:'bold', 
    fontSize:18, 
    color:'#fff'
  },
  logo:{    
    transform:[{
      rotate:'-15deg'
    }]
  }
});

export default App;