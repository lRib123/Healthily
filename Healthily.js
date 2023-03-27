import * as React from 'react';
import {Button,  useTheme,HelperText} from 'react-native-paper'
import {StyleSheet, View, Image, ImageBackground,Text,TextInput,KeyboardAvoidingView,Platform,TouchableOpacity} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const LoginPage=()=>{
     let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })

const navigation = useNavigation();
const button = () => {navigation.navigate('Login')}
const signup = () => {navigation.navigate('SignUp')}
  return(
 
    <SafeAreaProvider>
    <View>
        <Image style={{width:"100%",height:"70%"}}source={require('../assets/healthily.png')}/>
        <Text style={{marginTop:-30,fontFamily:"Mulish_500Medium",fontSize:25, alignSelf:"center",marginBottom:20}}>Maintain healthy eating habits!</Text>
      <View >

          <LinearGradient
        colors={['#1d8c2e','#c5d62d']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button1}
      >
           <TouchableOpacity onPress={button} style={styles.button1} >
             <Text style={styles.sign}> SIGN IN </Text>  
            </TouchableOpacity>
          </LinearGradient>

               <LinearGradient
        colors={['#c5d62d','#1d8c2e']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button1}
      >
           <TouchableOpacity onPress={signup} style={styles.button1} >
             <Text style={styles.sign}> SIGN UP </Text>  
            </TouchableOpacity>
          </LinearGradient>
         
     


      </View>

    </View>

  </SafeAreaProvider>
  );
}

export default LoginPage

const styles = StyleSheet.create({
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
})
