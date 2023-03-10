import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import RegistrationSVG from '../../assets/images/misc/registration.svg'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';


import GoogleSVG from '../../assets/images/misc/google.svg'
import FacebookSVG from '../../assets/images/misc/facebook.svg'
import TwitterSVG from '../../assets/images/misc/twitter.svg'
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'

const RegisterScreen = ({navigation}) => {
/*   const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false) */
  
  
  return (
    <SafeAreaView 
    style={
      { flex: 1, 
        justifyContent: 'center'
      }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:25}}>
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
        <Text 
          style={{
            textAlign:'center', 
            color:'#666', 
            marginBottom:30 }}
        >Or, Register with Email ...
        </Text>
        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />}

        />
        <InputField
          label={'Email'}
          icon={
            <MaterialIcon 
            name='alternate-email'
            size={20}
            color='#666'
            style={{ marginRight:5 }}
            />}
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
            inputType="password"
        />
        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />}
            inputType="password"
        />        
        
        <CustomButton
          label={'Register'}
          onPress={()=>{}}
        />
        
        <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Text style={{  color:'#AD40AF', fontWeight:'700' }}> Login</Text>        
          </TouchableOpacity>
        </View> 
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen



