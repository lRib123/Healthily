import React,{useState} from 'react';
import {Button,  useTheme,HelperText} from 'react-native-paper'
import {StyleSheet, View, Image, ImageBackground,Text,TextInput,KeyboardAvoidingView,Platform,TouchableOpacity} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import firebase from './config'

const LoginPage=()=>{
const navigation = useNavigation();
const button = () => {navigation.navigate('Page1')}
const forgot = () => {navigation.navigate('Password')}
const signup = () => {navigation.navigate('SignUp')}

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      // Redirect to homepage
      window.location.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  return(
 
    <SafeAreaProvider>
    <View>
        <Text style={styles.text}>
          Welcome back!
        </Text>
        <Text style={{marginTop:40,alignSelf:"center",fontFamily:"Mulish_500Medium",fontSize:20}}>Please fill out the information below</Text>
      <View >

      <Text style={{marginTop:50,marginLeft:90,fontFamily:"Mulish_500Medium",}}>Email</Text>

        <View style={styles.sectionStyle2}>
 
          <TextInput
            style={{flex: 1, marginLeft:15,fontFamily:"Mulish_500Medium"}}
            placeholder="Email"
            type="email"
            
            underlineColorAndroid="transparent"
          />
        </View>
            <Text style={{marginTop:20,marginLeft:90,fontFamily:"Mulish_500Medium",}}>Password</Text>
        <View style={styles.sectionStyle2}>
          <TextInput
            style={{flex: 1,marginLeft:15,fontFamily:"Mulish_500Medium",}}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"     
          />
        </View>  

        <TouchableOpacity onPress={forgot}>
        <Text style={styles.forgot}>
          Forgot password?
        </Text>
        </TouchableOpacity>

          <LinearGradient
        colors={['#1d8c2e','#c5d62d']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button1}
      >
           <TouchableOpacity onPress={(e)=>handleLogin(e)} >
             <Text style={styles.sign}> SIGN IN </Text>  
            </TouchableOpacity>
          </LinearGradient>

         
         <Text style={styles.dumb}>Don't have an account?</Text>

         <TouchableOpacity onPress={signup}>
         <Text style={{alignSelf:"center",fontFamily:"Mulish_500Medium",marginTop:5,color:"#1d8c2e",fontSize:15}}>SIGN UP</Text>
          </TouchableOpacity>

      </View>

    </View>

  </SafeAreaProvider>
  );
}

export default LoginPage

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
  
  forgot:{
    color:"#1d8c2e",
    marginLeft:90,
    fontFamily:"Mulish_500Medium",
    marginBottom:40
  },
  sign:{
    color:"white",
    fontSize:20,
    alignSelf:"center",
    marginTop: 10,
    marginBottom:12,
    fontFamily:"Mulish_500Medium",
  },
  dumb:{
    marginTop:8,
    alignSelf:"center",
    fontFamily:"Mulish_500Medium",
  }
})
