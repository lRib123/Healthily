import React from 'react'
import {Text,View,StyleSheet,ScrollView,TouchableOpacity,Dimensions,Linking} from 'react-native'
import {Card} from 'react-native-paper'
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const Page1=()=>{
  const navigation = useNavigation();
  const bf = ()=>{navigation.navigate("Breakfast")}
  const lunch = ()=>{navigation.navigate("Lunch")}
  const dinner = ()=>{navigation.navigate("Dinner")}
  const calculator = () => {navigation.navigate("Calculator")}
  const calculator2 = () => {navigation.navigate("Calorie")}
  const calculator3 = () => {navigation.navigate("Protein")}
  const settings = () => {navigation.navigate("Settings")}
  const index = ()=> {navigation.navigate('Index')}
  const org1 = ()=>Linking.openURL('https://www.wfp.org/')
  const org2 = () => Linking.openURL('https://www.heifer.org/')
  const org3 = () => Linking.openURL('https://www.actionagainsthunger.org.uk/')
  const org4 = () => Linking.openURL('https://thp.org/')
  return(
    <View style={{height,flex:1}}>
    <ScrollView>
      <Text style={{marginTop:120,fontSize:35,alignSelf:"center",fontFamily:"Mulish_500Medium"}}>Welcome to Healthly!</Text>
      <Text style={{fontFamily: "Mulish_500Medium",marginTop:70,fontSize:20,marginLeft:30 }}>Choose your meal</Text>
      <TouchableOpacity onPress={bf}>
      <Card style={{marginTop:20, width:90,marginLeft:30,height:100,borderRadius:10, shadowColor: '#171717', backgroundColor:"#c5d62d",
    shadowOffset: {width: -3, height: 10},shadowOpacity: 0.2,shadowRadius: 20,}}>
      <Text style={{marginTop:20,alignSelf:"center",fontFamily:"Mulish_500Medium"}}>Breakfast</Text>
        <MaterialIcons style={{marginTop:10,alignSelf:"center"}} name="free-breakfast" size={44} color="black" />
      </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={lunch}>
      <Card style={{marginTop:-99, width:90,marginLeft:160,height:100,borderRadius:10, shadowColor: '#171717',backgroundColor:"#c5d62d",
    shadowOffset: {width: -3, height: 10},shadowOpacity: 0.2,shadowRadius: 20,}}>
      <Text style={{marginTop:20,alignSelf:"center",fontFamily:"Mulish_500Medium"}}>Lunch</Text>
      <MaterialIcons style={{marginTop:10,alignSelf:"center"}} name="lunch-dining" size={44} color="black" />
      </Card>
      </TouchableOpacity> 

      <TouchableOpacity onPress={dinner}>   
      <Card style={{marginTop:-99, width:90,marginLeft:290,height:100,borderRadius:10, shadowColor: '#171717',backgroundColor:"#c5d62d",
    shadowOffset: {width: -3, height: 10},shadowOpacity: 0.2,shadowRadius: 20,}}>
    <Text style={{marginTop:20,alignSelf:"center",fontFamily:"Mulish_500Medium"}}>Dinner</Text>
    <MaterialIcons style={{marginTop:10,alignSelf:"center"}} name="dinner-dining" size={44} color="black" />
      </Card>
      </TouchableOpacity>

      <Text style={{fontFamily: "Mulish_500Medium",marginTop:50,fontSize:20,marginLeft:30 }}>Donate!</Text>
      <ScrollView horizontal={true}>
      <TouchableOpacity onPress={org1}>
        <Card style={{marginLeft:30,marginTop:20,width:160,height:90,backgroundColor:"#1d8c2e"}}>
          <Text style={{fontFamily:"Mulish_500Medium",alignSelf:"center",marginTop:20,fontSize:20,fontWeight:"bold",color:"white"}}>World Food Programme</Text>
        </Card>
      </TouchableOpacity>

    <TouchableOpacity onPress={org2}>
        <Card style={{marginLeft:30,marginTop:20,width:160,height:90,backgroundColor:"#1d8c2e"}}>
          <Text style={{fontFamily:"Mulish_500Medium",alignSelf:"center",marginTop:20,fontSize:20,fontWeight:"bold",color:"white"}}>Heifer International</Text>
        </Card>
        </TouchableOpacity>

        <TouchableOpacity  onPress={org3}>
            <Card style={{marginLeft:30,marginTop:20,width:160,height:90,backgroundColor:"#1d8c2e"}}>
          <Text style={{fontFamily:"Mulish_500Medium",alignSelf:"center",marginTop:20,fontSize:20,fontWeight:"bold",color:"white"}}>Action Against Hunger</Text>
        </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={org4}> 
            <Card style={{marginLeft:30,marginTop:20,width:160,height:90,backgroundColor:"#1d8c2e"}}>
          <Text style={{fontFamily:"Mulish_500Medium",alignSelf:"center",marginTop:20,fontSize:20,fontWeight:"bold",color:"white"}}>The Hunger Project</Text>
        </Card>
        </TouchableOpacity>
      </ScrollView>

      <Text style={{fontFamily: "Mulish_500Medium",marginTop:50,fontSize:20,marginLeft:30 }}>Carb calculator</Text>
                <LinearGradient
        colors={['#c5d62d','#1d8c2e']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={{marginLeft:30,marginTop:20,width:350,height:90,borderRadius:20}}
      >
      <TouchableOpacity onPress={calculator}>
        
          <Text style={{fontFamily:"Mulish_500Medium",alignSelf:"center",marginTop:30,fontSize:20,fontWeight:"bold"}}> Calculate</Text>
        
        </TouchableOpacity>
        </LinearGradient>

      <Text style={{fontFamily: "Mulish_500Medium",marginTop:50,fontSize:20,marginLeft:30 }}>Calories calculator</Text>
                <LinearGradient
        colors={['#1d8c2e','#c5d62d']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={{marginLeft:30,marginTop:20,width:350,height:90,borderRadius:20}}
      >
      <TouchableOpacity onPress={calculator2}>
        
          <Text style={{fontFamily:"Mulish_500Medium",alignSelf:"center",marginTop:30,fontSize:20,fontWeight:"bold"}}> Calculate</Text>
        
        </TouchableOpacity>
        </LinearGradient>

      <Text style={{fontFamily: "Mulish_500Medium",marginTop:50,fontSize:20,marginLeft:30, }}>Protein calculator</Text>
                <LinearGradient
        colors={['#c5d62d','#1d8c2e']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={{marginLeft:30,marginTop:20,width:350,height:90,marginBottom:100,borderRadius:20}}
      >
      <TouchableOpacity onPress={calculator3}>
        
          <Text style={{fontFamily:"Mulish_500Medium",alignSelf:"center",marginTop:30,fontSize:20,fontWeight:"bold"}}> Calculate</Text>
        
        </TouchableOpacity>
        </LinearGradient>     

        </ScrollView>

      
      <Card style={{position:'absolute', bottom:0,width,height:90,alignItems:'center',marginTop:"15%"}}>
        <TouchableOpacity >
        <Ionicons name="home" size={34} color="#1d8c2e" style={{marginTop:10,marginRight:290}} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={settings}>
        <Ionicons name="settings" size={34} color="#1d8c2e" style={{marginTop:-36,alignSelf:"center"}} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={index}>
        <Entypo name="leaf" size={34} color="#1d8c2e" style={{marginTop:-36,marginLeft:290}}/>
        </TouchableOpacity>
        <Text style={{fontFamily:"Mulish_500Medium",color:"#1d8c2e"}}>Home</Text>
        <Text style={{fontFamily:"Mulish_500Medium",marginTop:-17,alignSelf:"center",color:"#1d8c2e"}}>Settings</Text>
        <Text style={{fontFamily:"Mulish_500Medium",marginTop:-17,marginLeft:280,color:"#1d8c2e"}}>Index</Text>
      </Card>
    </View>
  )
}


export default Page1
