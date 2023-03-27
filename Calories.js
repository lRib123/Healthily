import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, DatePickerIOS,TouchableOpacity,ScrollView,Dimensions,useColorScheme } from 'react-native';
import {Card} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
import {useNavigation} from '@react-navigation/native'
const NumericInput = () => {
    const colorScheme = useColorScheme();
  const [inputs2, setInputs2] = useState([]);
  const [sum, setSum] = useState(0);
  const [maxCal, setMaxCal] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputData2, setInputData2] = useState({});
  let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })
  const navigation = useNavigation()
  const home = ()=>{navigation.navigate('Page1')}
  const settings = ()=>{navigation.navigate('Settings')}
  const indx = () =>{navigation.navigate('Index')}
  useEffect(() => {
    const getSavedData = async () => {
      const savedMaxCal = await AsyncStorage.getItem('maxCal');
      if (savedMaxCal !== null) {
        setMaxCal(savedMaxCal);
      }
      const savedInputData2 = await AsyncStorage.getItem('inputData2');
      if (savedInputData2 !== null) {
        setInputData2(JSON.parse(savedInputData2));
      }
    };
    getSavedData();
  }, []);

  useEffect(() => {
    const inputsForDate2 = inputData2[selectedDate.toDateString()] || [];
    setInputs2(inputsForDate2);
  }, [selectedDate, inputData2]);

  useEffect(() => {
    const newSum2 = inputs2.reduce((acc, val) => {
      return acc + (val === '' ? 0 : Number(val));
    }, 0);
    setSum(newSum2);
  }, [inputs2]);

  useEffect(() => {
    const saveData = async () => {
      await AsyncStorage.setItem('maxCal', maxCal);
      await AsyncStorage.setItem('inputData2', JSON.stringify(inputData2));
    };
    saveData();
  }, [maxCal, inputData2]);

  const addInput = () => {
    setInputs2([...inputs2, '']);
  };

  const handleInputChange = (text, index) => {
    // Remove non-numeric characters from input
    const formattedText = text.replace(/[^0-9]/g, '');

    const updatedInputs2 = [...inputs2];
    updatedInputs2[index] = formattedText;
    setInputs2(updatedInputs2);

    const newData2 = { ...inputData2 };
    newData2[selectedDate.toDateString()] = updatedInputs2;
    setInputData2(newData2);
  };

  const isMaxCalReached = () => {
    return maxCal !== '' && sum > Number(maxCal);
  };

  const renderInput = (input, index) => (
    <TextInput
      key={index}
      value={input}
      placeholder="Calorie value"
      onChangeText={(text) => handleInputChange(text, index)}
      keyboardType="numeric"
      style={{marginTop:10,marginLeft:30}}
    />
  );

  return (
    <View style={{height,width,flex:1,paddingBottom:50}}>
    <ScrollView>
    <Text style={{marginTop:100,marginLeft:30,fontSize:30,fontFamily:"Mulish_500Medium",fontWeight:"bold"}}>Calories Calculator</Text>
    <Text style={{marginTop:30,marginLeft:30,fontSize:20,fontFamily:"Mulish_500Medium"}}>Select date</Text>
    <Card style={{width:380,alignSelf:"center",alignContent:"center",marginTop:20,borderRadius:20,backgroundColor:colorScheme == 'light' ?"#c5d62d":"black"}}>
      <DatePickerIOS date={selectedDate} onDateChange={setSelectedDate} mode="date" style={{marginTop:10,width:380}}/>
      </Card>

      <Card style={{marginTop:30,width:120,alignContent:"center",alignSelf:"center",height:30,borderRadius:20}}>
      <TouchableOpacity onPress={addInput}>
        <Text style={{marginTop:7,alignSelf:"center",fontFamily:"Mulish_500Medium",fontSize:15}}>Add calories</Text>
      </TouchableOpacity>
      </Card>
      <Text style={{marginTop:20,fontFamily:"Mulish_500Medium",marginLeft:30,fontSize:20}}>Max amount of calories per day:</Text>
      <TextInput
        value={maxCal}
        onChangeText={setMaxCal}
        keyboardType="numeric"
        placeholder="Max Calories Per Day"
        style={{fontSize:17,marginTop:10,marginLeft:30,fontFamily:"Mulish_500Medium"}}
      />
            <Text style={{marginTop:20,fontFamily:"Mulish_500Medium",marginLeft:30,fontSize:20}}>Calories consumed:</Text>
       {inputs2.map(renderInput)}
    <Text style={{fontSize:15,marginLeft:30,fontFamily:"Mulish_500Medium",marginTop:13}}>Total: {sum}</Text>
       {isMaxCalReached() && <Text style={{fontSize:15,marginLeft:30,fontFamily:"Mulish_500Medium",marginTop:13,color:"red"}}>You've achieved the max amount of calories in a day</Text>}
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
  );
};

export default NumericInput;
