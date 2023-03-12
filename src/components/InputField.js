import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'


export default function InputField({
  label, 
  icon, 
  inputType, 
  keyboardType, 
  fieldButtonLabel,
  fieldButtonfuction,
value,
onChangeText
}) {
  return (
    <View 
    style = {{ flexDirection:'row',
     borderBottomColor:'#ccc',
     borderBottomWidth:1,
     paddingBottom:8,
     marginBottom:25}}>
      {icon}
      {inputType == 'password' ? (
      <TextInput 
        placeholder={label}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        style={{              
            flex:1,
            paddingVertical:0}}
            secureTextEntry={true}                          
      />
      ) : (
        <TextInput 
        placeholder={label}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}     
        style={{              
            flex:1,
            paddingVertical:0}}                     
      />
      )}

      <TouchableOpacity onPress={fieldButtonfuction}>
        <Text style={{ color:'#AD40AF', 
      fontWeight:'700'
        }}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
  </View> 
  )
}