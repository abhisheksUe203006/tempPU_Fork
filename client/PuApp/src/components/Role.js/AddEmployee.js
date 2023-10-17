import { useState } from 'react'
import { View, Text, StyleSheet, PixelRatio, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import ImagePicker from '../ComplaintPage/ImagePicker';
const AddEmployee = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Add Employee</Text>
      <ScrollView>
        <TextInput placeholder='Name' value={name} onChangeText={(text)=>{setName(text)}} style={input}/>
        <TextInput placeholder='Phone Number' value={phoneNumber} onChangeText={(text)=>{setPhoneNumber(text)}} style={input} />
        <TextInput placeholder='Email' value={email} onChangeText={(text)=>{setEmail(text)}} style={input}/>
        <TextInput placeholder='Password' value={password} onChangeText={(text)=>{setPassword(text)}} style={input}/>
      </ScrollView>
      <ImagePicker/>
      <TouchableOpacity  >

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 20/PixelRatio.getFontScale(),
  },
  input: {
    alignSelf: 'center',
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
  },
  imagePicker: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  btn: {
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.2),
    alignSelf: 'flex-end',
  }
})

export default AddEmployee