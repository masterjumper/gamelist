import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import RegistrationSVG from '../../assets/images/misc/registration.svg'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';


import GoogleSVG from '../../assets/images/misc/google.svg'
import FacebookSVG from '../../assets/images/misc/facebook.svg'
import TwitterSVG from '../../assets/images/misc/twitter.svg'

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView 
    style={
      { flex: 1, 
        justifyContent: 'center'
      }}>
      <View style={{paddingHorizontal:25}}>
        <View  
          style={{ alignItems: 'center' }}
        >
          <RegistrationSVG height={300} width={300} 
          style={{ transform: [{rotate:'-5deg'}]}} />          
        </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginBottom:30 
            }}
          >Register
          </Text>
        <View 
          style = {{ flexDirection:'row',
           borderBottomColor:'#ccc',
           borderBottomWidth:1,
           paddingBottom:8,
           marginBottom:25}}>
            <MaterialIcon 
            name='alternate-email'
            size={20}
            color='#666'
            style={{ marginRight:5 }}
            />
            <TextInput 
            placeholder='Email Id'
            style={{              
              flex:1,
              paddingVertical:0}}
            keyboardType='email-address'
            />
        </View>   
        <View 
          style = {{ flexDirection:'row',
           borderBottomColor:'#ccc',
           borderBottomWidth:1,
           paddingBottom:8,
           marginBottom:25}}>
            <Ionicons 
            name='ios-lock-closed-outline'
            size={20}
            color='#666'
            style={{ marginRight:5 }}
            />
            <TextInput 
            placeholder='Password'
            style={{              
              flex:1,
              paddingVertical:0}}
              secureTextEntry={true}                          
            />
            <TouchableOpacity onPress={()=>{}}>
              <Text style={{ color:'#AD40AF', 
            fontWeight:'700'
              }}>Forgot?</Text>
            </TouchableOpacity>
        </View>  
        <TouchableOpacity 
          onPress={()=>{}}
          style={{backgroundColor:'#AD40AF',
                  padding:20,
                  borderRadius:10,
                  marginBottom:30}}
        >
        <Text style={{
            textAlign:'center',
            fontWeight:'700',
            fontSize:16,
            color:'#fff'}}>Login</Text>
        </TouchableOpacity>
        <Text 
          style={{
            textAlign:'center', 
            color:'#666', 
            marginBottom:30 }}
        >Or, login with ...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
        <TouchableOpacity onPress={()=>{}}
        style={{ borderColor:'#ddd', borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10 }}>
        <GoogleSVG height={24} width={24}></GoogleSVG>                  
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}
        style={{ borderColor:'#ddd', borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10 }}>
                  <FacebookSVG height={24} width={24}></FacebookSVG>
        </TouchableOpacity> 
        
        <TouchableOpacity onPress={()=>{}}
        style={{ borderColor:'#ddd', borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10 }}>
        <TwitterSVG height={24} width={24}></TwitterSVG>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
        <Text>Already registered?</Text>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Text style={{  color:'#AD40AF', fontWeight:'700' }}> Login</Text>        
        </TouchableOpacity>
        </View>  
        
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen