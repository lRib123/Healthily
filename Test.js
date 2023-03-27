import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  DatePickerIOS,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  useColorScheme,
} from 'react-native';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Mulish_500Medium } from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import { useNavigation } from '@react-navigation/native';

const NumericInput = () => {
  const colorScheme = useColorScheme();
  const [inputs, setInputs] = useState([]);
  const [sum, setSum] = useState(0);
  const [maxCarbs, setMaxCarbs] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputData, setInputData] = useState({});
  let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,
  });
  const navigation = useNavigation();
  const home = () => {
    navigation.navigate('Page1');
  };
  const settings = () => {
    navigation.navigate('Settings');
  };
  const indx = () => {
    navigation.navigate('Index');
  };
  useEffect(() => {
    const getSavedData = async () => {
      const savedMaxCarbs = await AsyncStorage.getItem('maxCarbs');
      if (savedMaxCarbs !== null) {
        setMaxCarbs(savedMaxCarbs);
      }
      const savedInputData = await AsyncStorage.getItem('inputData');
      if (savedInputData !== null) {
        setInputData(JSON.parse(savedInputData));
      }
    };
    getSavedData();
  }, []);

  useEffect(() => {
    const inputsForDate = inputData[selectedDate.toDateString()] || [];
    setInputs(inputsForDate);
  }, [selectedDate, inputData]);

  useEffect(() => {
    const newSum = inputs.reduce((acc, val) => {
      return acc + (val === '' ? 0 : Number(val));
    }, 0);
    setSum(newSum);
  }, [inputs]);

  useEffect(() => {
    const saveData = async () => {
      await AsyncStorage.setItem('maxCarbs', maxCarbs);
      await AsyncStorage.setItem('inputData', JSON.stringify(inputData));
    };
    saveData();
  }, [maxCarbs, inputData]);

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const handleInputChange = (text, index) => {
    // Remove non-numeric characters from input
    const formattedText = text.replace(/[^0-9]/g, '');

    const updatedInputs = [...inputs];
    updatedInputs[index] = formattedText;
    setInputs(updatedInputs);

    const newData = { ...inputData };
    newData[selectedDate.toDateString()] = updatedInputs;
    setInputData(newData);
  };

  const isMaxCarbsReached = () => {
    return maxCarbs !== '' && sum > Number(maxCarbs);
  };

  const renderInput = (input, index) => (
    <TextInput
      key={index}
      value={input}
      placeholder="Carb value"
      onChangeText={(text) => handleInputChange(text, index)}
      keyboardType="numeric"
      style={{ marginTop: 10, marginLeft: 30 }}
    />
  );

  return (
    <View style={{ height, width, flex: 1 }}>
      <ScrollView>
        <Text
          style={{
            marginTop: 100,
            marginLeft: 30,
            fontSize: 30,
            fontFamily: 'Mulish_500Medium',
            fontWeight: 'bold',
          }}>
          Carb Calculator
        </Text>
        <Text
          style={{
            marginTop: 30,
            marginLeft: 30,
            fontSize: 20,
            fontFamily: 'Mulish_500Medium',
          }}>
          Select date
        </Text>
        <Card
          style={{
            width: 380,
            alignSelf: 'center',
            alignContent: 'center',
            marginTop: 20,
            borderRadius: 20,
            backgroundColor: colorScheme == 'light' ? '#c5d62d' : 'black',
          }}>
          <DatePickerIOS
            date={selectedDate}
            onDateChange={setSelectedDate}
            mode="date"
            style={{ marginTop: 10, width: 380 }}
          />
        </Card>

        <Card
          style={{
            marginTop: 30,
            width: 120,
            alignContent: 'center',
            alignSelf: 'center',
            height: 30,
            borderRadius: 20,
          }}>
          <TouchableOpacity onPress={addInput}>
            <Text
              style={{
                marginTop: 7,
                alignSelf: 'center',
                fontFamily: 'Mulish_500Medium',
                fontSize: 15,
              }}>
              Add carbs
            </Text>
          </TouchableOpacity>
        </Card>
        <Text
          style={{
            marginTop: 20,
            fontFamily: 'Mulish_500Medium',
            marginLeft: 30,
            fontSize: 20,
          }}>
          Max amount of carbs per day:
        </Text>
        <TextInput
          value={maxCarbs}
          onChangeText={setMaxCarbs}
          keyboardType="numeric"
          placeholder="Max Carbs Per Day"
          style={{
            fontSize: 17,
            marginTop: 10,
            marginLeft: 30,
            fontFamily: 'Mulish_500Medium',
          }}
        />
        <Text
          style={{
            marginTop: 20,
            fontFamily: 'Mulish_500Medium',
            marginLeft: 30,
            fontSize: 20,
          }}>
          Carbs consumed:
        </Text>
        {inputs.map(renderInput)}
        <Text
          style={{
            fontSize: 15,
            marginLeft: 30,
            fontFamily: 'Mulish_500Medium',
            marginTop: 13,
          }}>
          Total: {sum}
        </Text>
        {isMaxCarbsReached() && (
          <Text
            style={{
              fontSize: 15,
              marginLeft: 30,
              fontFamily: 'Mulish_500Medium',
              marginTop: 13,
              color: 'red',
            }}>
            You've achieved the max amount of carbs in a day
          </Text>
        )}
      </ScrollView>
      <Card
        style={{
          position: 'absolute',
          bottom: 0,
          width,
          height: 90,
          alignItems: 'center',
          marginTop: '15%',
        }}>
        <TouchableOpacity onPress={home}>
          <Ionicons
            name="home"
            size={34}
            color="#1d8c2e"
            style={{ marginTop: 10, marginRight: 290 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={settings}>
          <Ionicons
            name="settings"
            size={34}
            color="#1d8c2e"
            style={{ marginTop: -36, alignSelf: 'center' }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={indx}>
          <Entypo
            name="leaf"
            size={34}
            color="#1d8c2e"
            style={{ marginTop: -36, marginLeft: 290 }}
          />
        </TouchableOpacity>
        <Text style={{ fontFamily: 'Mulish_500Medium', color: '#1d8c2e' }}>
          Home
        </Text>
        <Text
          style={{
            fontFamily: 'Mulish_500Medium',
            marginTop: -17,
            alignSelf: 'center',
            color: '#1d8c2e',
          }}>
          Settings
        </Text>
        <TouchableOpacity onPress={indx}>
          <Text
            style={{
              fontFamily: 'Mulish_500Medium',
              marginTop: -17,
              marginLeft: 280,
              color: '#1d8c2e',
            }}>
            Index
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default NumericInput;
