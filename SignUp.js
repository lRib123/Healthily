import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Button,  useTheme,HelperText} from 'react-native-paper'
import { auth } from '../config';
import {StyleSheet, View, Image, ImageBackground,Text,TextInput,KeyboardAvoidingView,Platform,TouchableOpacity} from 'react-native'
import { useHistory } from 'react-router-dom';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import firebase from './config';

const SignUp=()=>{
     let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })

const navigation = useNavigation();
const button = () => {navigation.navigate('Page1')}
const signup = () => {navigation.navigate('Login')}

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      window.location.replace('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return(
 
    <SafeAreaProvider>
    <View>
        <Text style={styles.text}>
          Welcome!
        </Text>
        <Text style={{marginTop:40,alignSelf:"center",fontFamily:"Mulish_500Medium",fontSize:20}}>Please fill out the information below</Text>
      <View >

      <Text style={{marginTop:50,marginLeft:90,fontFamily:"Mulish_500Medium",}}>Email</Text>

        <View style={styles.sectionStyle2}>
 
          <TextInput
            style={{flex: 1, marginLeft:15,fontFamily:"Mulish_500Medium"}}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            underlineColorAndroid="transparent"
            required
          />
        </View>
            <Text style={{marginTop:20,marginLeft:90,fontFamily:"Mulish_500Medium",}}>Password</Text>
        <View style={styles.sectionStyle2}>
          <TextInput
            style={{flex: 1,marginLeft:15,fontFamily:"Mulish_500Medium",}}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            secureTextEntry={true}
            underlineColorAndroid="transparent"  
            required   
          />
        </View>  
    <Text style={{marginTop:20,marginLeft:90,fontFamily:"Mulish_500Medium",}}>Confim password</Text>
        <View style={styles.sectionStyle2}>
          <TextInput
            style={{flex: 1,marginLeft:15,fontFamily:"Mulish_500Medium",}}
            placeholder="Password"
            value={password2}
            onChangeText={(text) => setPassword2(text)}
            secureTextEntry={true}
            underlineColorAndroid="transparent"   
            required  
          />
        </View>  

          <LinearGradient
        colors={['#1d8c2e','#c5d62d']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button1}
      >
           <TouchableOpacity onPress={handleSignUp} style={styles.button1} >
             <Text style={styles.sign}> SIGN UP </Text>  
            </TouchableOpacity>
          </LinearGradient>
         
         <Text style={styles.dumb}>Already have an account?</Text>

         <TouchableOpacity onPress={signup}>
         <Text style={{alignSelf:"center",fontFamily:"Mulish_500Medium",marginTop:5,color:"#1d8c2e",fontSize:15}}>LOGIN</Text>
          </TouchableOpacity>

      </View>

    </View>

  </SafeAreaProvider>
  );
}

export default SignUp

const styles = StyleSheet.create({
  text:{
    fontSize:40,
    marginTop:150,
    color:"black",
    fontFamily:"Mulish_500Medium",
    alignSelf:"center"
  }, 

    sectionStyle2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 20,
    margin: 10,
    width:260, 
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
    button1: {
    marginTop: 20,
    width:200,
    alignSelf:"center",
    borderRadius:20,
    
  },
  sign:{
    color:"white",
    fontSize:20,
    alignSelf:"center",
    marginTop: -10,
    marginBottom:12,
    fontFamily:"Mulish_500Medium",
  },
  dumb:{
    marginTop:8,
    alignSelf:"center",
    fontFamily:"Mulish_500Medium",
  }
})
