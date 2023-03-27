import React from 'react'
import {Text,View,TouchableOpacity,TextInput,ScrollView,Dimensions} from 'react-native'
import {Card} from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native'
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from './config';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const Settings = ()=>{
  const navigation = useNavigation()
  const home = ()=>{navigation.navigate('Page1')}
  const settings = ()=>{navigation.navigate('Settings')}
  const indx = () => {navigation.navigate('Index')}
  let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })
  
  const [email, setEmail] = useState(firebase.auth().currentUser.email);
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().currentUser.updateEmail(email);
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setSuccess(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().currentUser.updatePassword(password);
      setPassword('');
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setSuccess(false);
    }
  };
  
  return(
    <View style={{flex:1,height}}>
    <ScrollView>
      <Text style={{marginTop:100,fontSize:30,alignSelf:"center"}}>Profile</Text>
      <Text style={{marginTop:50,alignSelf:"center",fontSize:20,fontFamily:"Mulish_500Medium"}}>Change email</Text>

      <Card style={{width:250,alignSelf:"center",height:30,marginTop:15,borderRadius:20}}>
      <TextInput style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}} placeholder="Email", onChange={(e) => setEmail(e.target.value)}/>
      </Card>

      <Text style={{marginTop:50,alignSelf:"center",fontSize:20,fontFamily:"Mulish_500Medium"}}>Change password</Text>
       <Card style={{width:250,alignSelf:"center",height:30,marginTop:15,borderRadius:20}}>
      <TextInput style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}} placeholder="Password",onChange={(e) => setPassword(e.target.value)}/>
      </Card>

        <LinearGradient
        colors={['#c5d62d','#1d8c2e']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={{alignSelf:"center",marginTop:50,width:200,height:40,borderRadius:20}}
      >
        <TouchableOpacity onPress={handleUpdateEmail}>
          <Text style={{alignSelf:"center",marginTop:7,fontSize:20,color:"white",fontWeight:"bold"}}>Change Email</Text>
        </TouchableOpacity>
      </LinearGradient>

        <LinearGradient
        colors={['#c5d62d','#1d8c2e']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={{alignSelf:"center",marginTop:50,width:200,height:40,borderRadius:20}}
      >
        <TouchableOpacity onPress={handleUpdatePassword}>
          <Text style={{alignSelf:"center",marginTop:7,fontSize:20,color:"white",fontWeight:"bold"}}>Change Password</Text>
        </TouchableOpacity>
      </LinearGradient>

      </ScrollView>

        <Card style={{position:'absolute', bottom:0,width,height:90,alignItems:'center',marginTop:"15%"}}>
        <TouchableOpacity onPress={home}>
        <Ionicons name="home" size={34} color="#1d8c2e" style={{marginTop:10,marginRight:290}} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={settings}>
        <Ionicons name="settings" size={34} color="#1d8c2e" style={{marginTop:-36,alignSelf:"center"}} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={indx}>
        <Entypo name="leaf" size={34} color="#1d8c2e" style={{marginTop:-36,marginLeft:290}}/>
        </TouchableOpacity>
        <Text style={{fontFamily:"Mulish_500Medium",color:"#1d8c2e"}}>Home</Text>
        <Text style={{fontFamily:"Mulish_500Medium",marginTop:-17,alignSelf:"center",color:"#1d8c2e"}}>Settings</Text>
        <TouchableOpacity onPress={indx}>
  <Text style={{fontFamily:"Mulish_500Medium",marginTop:-17,marginLeft:280,color:"#1d8c2e"}}>Index</Text>
      </TouchableOpacity>
      </Card>

    </View>
  )
}

export default Settings
