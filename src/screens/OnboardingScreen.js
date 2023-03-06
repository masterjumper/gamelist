import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
/* import GamingImage from '../../assets/images/misc/gamingImage.svg' */
import GamingImage from '../../assets/images/misc/gaming.svg'

const OnboardingScreen = ({navigation}) => { 
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={{marginTop:50}}>
        <Text style={styles.text}>Comex OnLine</Text>        
      </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <GamingImage width={300} height={300} style={styles.logo}  />
        </View>
      <TouchableOpacity style={styles.touchableopacity}
      onPress={()=>navigation.navigate('Login')}
      >
        <Text style={styles.textbutton}>Register</Text>
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

export default OnboardingScreen;
