import React, { Component } from 'react';
import { StyleSheet, View, ScrollView,Text,Dimensions,TouchableOpacity } from 'react-native';
import {Card} from 'react-native-paper'
import { Table, Row, Rows } from 'react-native-table-component';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width
const Index = () => {
    const header =  ['Food', 'Glycemic Index']
    const data = [
        ['Apple juice (250g)', '39'],
        ['Apricots, dried (60g)	', '32'],
        ['Bananas (120g)', '47'],
        ['Fruit cocktail (120g)', '55'],
        ['Grapefruit (120g)', '25'],
        ['Grapes (120g)', '43'],
        ['Mangoes (120g)', '51'],
        ['Oranges, raw (120g)', '48'],
        ['Peaches, canned in light syrup (120g)', '52'],
        ['Pineapple (120g)', '51'],
        ['Plums (120g)', '53'],
        ['Strawberries (120g)', '40'],
        ['Carrots, raw (80g)','35'],
        ['Corn, sweet (80g)','55'],
        ['Lima beans, baby, frozen (150g)','32'],
        ['Parsnips, peeled boiled (80g)','52'],
        ['Potato, white, boiled (150g)','54'],
        ['Tomato soup (250 g)','38'],
        ['Barley (150g)',	'22'],
        ['Basmati rice (150g)',	'52'],
        ['Bran cereal (30g)',	'43'],
        ['Brown rice, steamed (50g)',	'50'],
        ['Bulgur wheat, whole, cooked (150g)',	'46'],
        ['Chickpeas (150g)',	'36'],
        ['Instant noodles (180g)',	'52'],
        ['Instant oatmeal (25 g)'	,'50'],
        ['Mixed grain bread (30g)',	'52'],
        ['Oat bran bread (30g)','44'],
        ['Rye kernel bread (30 g)','41'],
        ['Water crackers (25g)'	,'53'],
        ['White rice, boiled (150g)',	'47'],
        ['Skim milk (250g)',	'32']
        ['Soy milk (250g)',	'43'],
        ['Black beans (150g)',	'30'],
        ['Butter beans (150g)',	'36'],
        ['Cashews (50g)',	'25'],
        ['Kidney beans (150g)',	'29'],
        ['Kidney beans, canned (150g)',	'52'],
        ['Lentils, canned (150g)',	'42'],
        ['Split peas, yellow, boiled (150g)',	'25']
        ['Blueberry muffin (60g)',	'50'],
        ['Cake, pound (50g)',	'38'],
        ['Corn chips (50g)',	'42'],
        ['Hummus (30g)',	'6'],
        ['Ice cream, full-fat, French vanilla (50g)',	'38'],
        ['Ice cream, low-fat, vanilla (50g)	','46'],
        ['Oatmeal cookies (25g)',	'54'],
        ['Snickers (60g)',	'43'],
        ['Sponge cake (63g)',	'46'],
        ['Strawberry jam (30g)',	'51'],
        ['Sushi (100g)	','55'],
    ]
    

    const data2 = [
        ['Apricots, canned with light syrup (120g)', '64'],
        ['Cantaloupe (120g)', '65'],
        ['Cherries',	'63'],
        ['Figs, dried',	'61'],
        ['Dates (60g)',	'62'],
        ['Kiwifruit (120g)',	'58'],
        ['Peaches fresh (120g)',	'56'],
        ['Raisins (60g)',	'64']
        ['Black bean soup (250g)',	'64'],
        ['Split pea soup (250g)',	'60'],
        ['Beetroot',	'64'],
        ['Pumpkin (80g)',	'66'],
        ['Sweet potato (150g)',	'61'],
        ['All-Bran (30 g)',	'60'],
        ['Bagel, white (70 g)',	'69'],
        ['Bran Buds cereal (30g)',	58],
        ['Bran Chex cereal (30g)',	58],
        ['Gnocchi (180g)	' , 68],	
        ['Couscous (150g)',	65],
        ['Hamburger bun (30g)',	61],
        ['Life cereal (30g)',	66],
        ['Linguine, fresh, boiled (180g)',	61],
        ['Macaroni and cheese, boxed (180g)',	64],
        ['Muesli bars, with dried apricot (30g)',	61],
        ['Oat kernel bread (30g)'	,65],
        ['Pumpernickel bread (30g)',	56],
        ['Pancakes, homemade (80g)',	66],
        ['Pita bread, white (30g)',	57],
        ['Rye crisp-bread (25g)',	63],
        ['Shredded Wheat cereal (30g)',	67],
        ['Special K cereal (30g)',	69],
        ['Taco shells (20g)',	68],
        ['Wild rice (150g)'	,57]
        ['Bran muffin (57g)',	60],
        ['Cake, angel food (50g)',	67],
        ['Croissant (57g)',	67],
        ['Honey, pure (25g)'	,58],
        ['Nutri-Grain bar (30g)',	66],
        ['Pastry (57g)',	59],
        ['Shortbread cookies',	64],
        ['Stoned Wheat Thins (25g)',	67],
        ['Sugar, table (25g)',	65],
    ]
   
  const data3 = [
        ['Watermelon (120g)',	80],
        ['Rutabaga (15 g)',	72],
        ['Potato (150g)',	88],
        ['Bread stuffing (30g)',74],
        ['Cheerios (30g)',	74],
        ['Corn Flakes (30g)',	79],
        ['French baguette (30g)',	95],
        ['French bread fermented with leaven (30g)',	80],
        ['Gluten-free bread, multigrain (30g)'	,79],
        ['Golden Grahams cereal (30g)	',71],
        ['Grape Nuts cereal (30g)	',75],
        ['Kaiser roll (30g)	',73],
        ['Muesli (30g)'	,86],
        ['Rice cakes, white (25g)',	82],
        ['Rice Chex (30g)	',89],
        ['Rice Krispies (30g)'	,82],
        ['Rice, instant, cooked 6 min. (150g)',	87],
        ['Tapioca, boiled with milk (250g)	',81],
        ['Total cereal (250g)'	,76],
        ['Waffles (35g)'	,76],
        ['White bread (30g)',	70],
        ['Tofu, frozen dessert, non-dairy (50g)',	115],
        ['Broad beans (80g)'	,79],
        ['Corn syrup, dark (30g)'	,90],
        ['Doughnuts, cake (47g)',	76],
        ['French fries (150g)',	75],
        ['Gatorade (250g)',	78],
        ['Glucose (10g)',	96],
        ['Graham crackers (25g)',	74],
        ['Jelly beans (30g)'	,80],
        ['Life Savers and peppermint (30g)	',70],
        ['Maltose (50g)',	105],
        ['Pizza and cheese (100g)',	80],
        ['Pretzels (30g)	',83],
        ['Vanilla wafers (25g)'	,77]
    ]
    const navigation = useNavigation();
    const home = () =>{navigation.navigate('Page1')}
    const settings = () => {navigation.navigate('Settings')}
    return (
      <View style={styles.container}>
      <ScrollView>
      <Text style={{marginTop:40,fontSize:40,fontFamily:"Mulish_500Medium"}}>Index</Text>
      <Text style={{marginTop:20,fontSize:20,marginBottom:20,fontFamily:"Mulish_500Medium"}}>Low Glycemic Index foods</Text>
        <Table borderStyle={{borderWidth: 1, borderColor: '#1d8c2e'}}>
          <Row data={header} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={data} textStyle={styles.TableText}/>
        </Table>
            <Text style={{marginTop:20,fontSize:20,fontFamily:"Mulish_500Medium"}}>Medium Glycemic Index foods</Text>
        <Table style={{marginTop:30}} borderStyle={{borderWidth: 1, borderColor: '#1d8c2e'}}>
          <Row data={header} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={data2} textStyle={styles.TableText}/>
        </Table>
            <Text style={{marginTop:20,fontSize:20,fontFamily:"Mulish_500Medium"}}>High Glycemic Index foods</Text>
         <Table style={{marginTop:30}} borderStyle={{borderWidth: 1, borderColor: '#1d8c2e'}}>
          <Row data={header} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={data3} textStyle={styles.TableText}/>
        </Table>
        </ScrollView>
    
            <Card style={{position:'absolute', bottom:0,width,height:90,alignItems:'center',marginTop:"15%"}}>
        <TouchableOpacity onPress={home}>
        <Ionicons name="home" size={34} color="#1d8c2e" style={{marginTop:10,marginRight:290}} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={settings}>
        <Ionicons name="settings" size={34} color="#1d8c2e" style={{marginTop:-36,alignSelf:"center"}} />
        </TouchableOpacity>

        <Entypo name="leaf" size={34} color="#1d8c2e" style={{marginTop:-36,marginLeft:290}}/>
        <Text style={{fontFamily:"Mulish_500Medium",color:"#1d8c2e"}}>Home</Text>
        <Text style={{fontFamily:"Mulish_500Medium",marginTop:-17,alignSelf:"center",color:"#1d8c2e"}}>Settings</Text>
        <Text style={{fontFamily:"Mulish_500Medium",marginTop:-17,marginLeft:280,color:"#1d8c2e"}}>Index</Text>
      </Card>
        
               
      </View>
    )
  
  }
  

  export default Index


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' ,
    paddingBottom:90
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#c5d62d',
    fontFamily:"Mulish_500Medium"
  },
  TableText: { 
    margin: 10,
    fontFamily:"Mulish_500Medium"
  }
});
