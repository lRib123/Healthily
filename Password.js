import * as React from 'react';
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

const Password=()=>{
     let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })

const navigation = useNavigation();
const button = () => {navigation.navigate('Login')}
const login = () => {navigation.navigate('Login')}
const signup = () => {navigation.navigate('SignUp')}

const [email, setEmail] = useState('');
const [success, setSuccess] = useState(false);
const [error, setError] = useState(null);

  const handleResetPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setSuccess(false);
    }
  };
  
  return(
 
    <SafeAreaProvider>
    <View>
        <Text style={styles.text}>
          Change your password
        </Text>

      <View >

      <Text style={{marginTop:50,marginLeft:90,fontFamily:"Mulish_500Medium",}}>Email</Text>

        <View style={styles.sectionStyle2}>
          <TextInput
            style={{flex: 1, marginLeft:15,fontFamily:"Mulish_500Medium"}}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
        {success && (
        <Text style={styles.success}>Check your email to reset your password.</Text>
        )}

          <LinearGradient
        colors={['#1d8c2e','#c5d62d']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button1}
      >
           <TouchableOpacity onPress={handleResetPassword} style={styles.button1} >
             <Text style={styles.sign}>CHANGE PASSWORD</Text>  
            </TouchableOpacity>
          </LinearGradient>
         
         <TouchableOpacity onPress={login}>
         <Text style={{alignSelf:"center",fontFamily:"Mulish_500Medium",marginTop:15,color:"#1d8c2e",fontSize:15}}>LOGIN</Text>
          </TouchableOpacity>

                   <TouchableOpacity onPress={signup}>
         <Text style={{alignSelf:"center",fontFamily:"Mulish_500Medium",marginTop:15,color:"#1d8c2e",fontSize:15}}>SIGN UP</Text>
          </TouchableOpacity>

      </View>

    </View>

  </SafeAreaProvider>
  );
}

export default Password

const styles = StyleSheet.create({
    image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",   
  },
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
    fontSize:17,
    alignSelf:"center",
    marginTop: -10,
    marginBottom:12,
    fontFamily:"Mulish_500Medium",
  },
  dumb:{
    marginTop:8,
    alignSelf:"center",
    fontFamily:"Mulish_500Medium",
  },
   error: {
    color: 'red',
    marginBottom: 10,
  },
  success: {
    color: 'green',
    marginBottom: 10,
  },
})
