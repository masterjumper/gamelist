import { View, Text, SafeAreaView,
   TextInput, TouchableOpacity } from 'react-native'
import React,{useContext, useState} from 'react'
import LoginSVG from '../../assets/images/misc/login.svg'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';


import GoogleSVG from '../../assets/images/misc/google.svg'
import FacebookSVG from '../../assets/images/misc/facebook.svg'
import TwitterSVG from '../../assets/images/misc/twitter.svg'
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import AuthContext from '../context/AuthContext';


const LoginScreen = ({navigation}) => {
  
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const {login}=useContext(AuthContext)
  
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
          <LoginSVG height={300} width={300} 
          style={{ transform: [{rotate:'-5deg'}]}} />          
        </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginBottom:30 
            }}
          >Login
          </Text>
          
          <InputField
            label={'Email'}
            icon={
            <MaterialIcon 
              name='alternate-email'
              size={20}
              color='#666'
              style={{ marginRight:5 }}
            />}
            value={email}
            onChangeText={text=>setEmail(text)}
            keyboardType='email-address'
          /> 
           <InputField
              label={'Password'}
              icon={
                <Ionicons
                  name="ios-lock-closed-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />}
                value={password}
                inputType="password"
                onChangeText={text=>setPassword(text)}
                fieldButtonLabel={'Forgot?'}
                fieldButtonfuction={()=>{}}
          />         
        <CustomButton
          label={'Login'}
          onPress={()=>{login(email, password)}}
        />
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
        <Text>New to the app?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
          <Text style={{  color:'#AD40AF', fontWeight:'700' }}> Register</Text>        
        </TouchableOpacity>
        </View>  
        
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen