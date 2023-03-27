import React, {useState} from 'react';
import {Text,View,TextInput,TouchableOpacity,ScrollView,Image,Dimensions} from 'react-native'
import {Card,Checkbox,TouchableRipple} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 
import {Picker} from '@react-native-picker/picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const Lunch=()=>{
  const [checkedNormal, setCheckedNormal] = React.useState(true);
  const [chosenLabel,setChosenLabel] = useState('>= $20.00') 
  const [index,setIndex] = useState(1)
  const [collapse,setCollapse] = useState(false);
  const [collapse2,setCollapse2] = useState(false);
  const [collapse4,setCollapse4] = useState(false);
  const [collapse5,setCollapse5] = useState(false);
  const [collapse6,setCollapse6] = useState(false);
  const [collapse7,setCollapse7] = useState(false);
  const [show,setShow] = useState(true);
  const [show2,setShow2] = useState(true);
  const [show3,setShow3] = useState(true);
  const [show4,setShow4] = useState(true);
       let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })

  const price=()=>{
      setShow(true)
      setShow2(false) 
      setShow3(false)
      setShow4(false)
  }

  const price2=()=>{
      setShow2(true)
      setShow(false)
      setShow3(false)
      setShow4(false)
  }
    const price3=()=>{
      setShow2(false)
      setShow(false)
      setShow3(true)
      setShow4(false)
  }
    const price4=()=>{
      setShow2(false)
      setShow(false)
      setShow3(false)
      setShow4(true)
  }
      const all=()=>{
      setShow2(true)
      setShow(true)
      setShow3(true)
      setShow4(true)
  }
   const data = 20
   const data2 = 15
   const data3 = 10
   const data4 = 5

  const navigation = useNavigation();
  const home = ()=>{navigation.navigate('Page1')}
  const settings = () => {navigation.navigate("Settings")}
  const indx = () => {navigation.navigate('Index')}
  return(
    <View style={{height,flex:1}}>
    <ScrollView>
   
      <Text style={{marginTop:100,fontFamily:"Mulish_500Medium",marginLeft:20,fontSize:30}}>Cheap & Healthy Lunch suggestions</Text>

 <Text style={{marginTop:20,fontFamily:"Mulish_500Medium",marginLeft:30,fontSize:18}}>Price filter</Text>
    <Card style={{marginTop:20,width:320,alignSelf:"center",height:60,borderRadius:20,backgroundColor:"#c5d62d"}}>
    <TouchableOpacity onPress={price}>
      <Text style={{marginLeft:30,marginTop:20,fontSize:20}}>$20</Text>
    </TouchableOpacity>
     <TouchableOpacity onPress={price2}>
      <Text style={{marginLeft:90,marginTop:-24,fontSize:20}}> $15</Text>
    </TouchableOpacity>
         <TouchableOpacity onPress={price3}>
      <Text style={{marginLeft:150,marginTop:-24,fontSize:20}}> $10</Text>
    </TouchableOpacity>
         <TouchableOpacity onPress={price4}>
      <Text style={{marginLeft:210,marginTop:-24,fontSize:20}}> $5</Text>
    </TouchableOpacity>
             <TouchableOpacity onPress={all}>
      <Text style={{marginLeft:270,marginTop:-24,fontSize:20}}> All</Text>
    </TouchableOpacity>
    </Card>
    
    {show?(
      <Card style={{marginTop:50,width:290,alignSelf:"center",height:280}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Chicken Ceaser</Text>
    <Text style={{marginTop:-30,color:"transparent"}}>{data}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:20,width:250}} source={require('../assets/ceaser.jpeg')}/>
    <TouchableOpacity onPress={()=>setCollapse(!collapse)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
    {collapse?(
      <Card style={{height:390}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 4 ounces sourdough bread, cut into 1/2-in. pieces (about 2 1/2 cups)</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ¼ cup 2% reduced-fat plain Greek yogurt</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 2 romaine lettuce hearts (about 8 oz. each)</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 2 cups chilled, chopped roasted chicken breast (about 6 oz.)</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:"bold"}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Preheat oven to 400 degrees F. Toss together bread and oil in a large bowl; spread in a single layer on a rimmed baking sheet. Bake in preheated oven until golden brown and toasted, about 10 minutes, stirring once halfway through cooking. Set aside to cool.</Text>
      <Text style={{marginLeft:10,fontWeight:"bold",marginTop:5}}>Per Serving</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>340 calories; protein 21g; carbohydrates 20g</Text>
      </Card>
    ):null}
    </Card>
):null}

    {show?(
           <Card style={{marginTop:collapse?400:20,width:290,alignSelf:"center",height:280,marginBottom:show && !show2 && !show3 && !show4?400:0}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Veggie Bowl</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/salad.jpeg')}/>
        <TouchableOpacity onPress={()=>setCollapse2(!collapse2)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse2?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
    {collapse2?(
      <Card style={{height:360,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 2 (8 ounce) packages cooked quinoa</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 (16 ounce) container chopped veggie mix</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 (15.5 ounce) can chickpeas, rinsed</Text>
         <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1/2 cup creamy turmeric salad dressing</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Prepare quinoa according to package directions. Transfer to a shallow bowl to cool completely before assembling bowls. Divide veggie mix among 4 single-serving lidded containers. Top each with one-fourth of the quinoa and one-fourth of the chickpeas. Seal the containers and refrigerate for up to 4 days.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving </Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> 306 calories; protein 11.9g; carbohydrates 47.7g</Text>
      </Card>
    ):null}
    </Card>
    ):null}


    {show2?(
      <Card style={{marginTop:collapse2?370:20,width:290,alignSelf:"center",height:280}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Chicken bowl</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data2}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/chickenCurry.jpeg')}/>
    <TouchableOpacity onPress={()=>setCollapse4(!collapse4)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse4?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse4?(
      <Card style={{height:310,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 1 cup cooked brown rice</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 cup cooked quinoa</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 pound cooked Curried Chicken </Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ¼ cup chopped fresh cilantro</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ¼ cup thinly sliced scallions</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Combine rice and quinoa; divide among 4 single-serving containers with lids. Top with chicken, cilantro and scallions, dividing evenly. Seal the containers and refrigerate for up to 4 days.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text> 
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>274 calories; protein 23.7g; carbohydrates 28.4g.</Text>
      </Card>
    ):null}
    </Card>
    ):null}

    {show2?(
    <Card style={{marginTop:collapse4?320:20,width:290,alignSelf:"center",height:280,marginBottom:!show && show2 && !show3 && !show4?400:0}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Veggie rice bowl</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data2}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/veggie.jpeg')}/>
        <TouchableOpacity onPress={()=>setCollapse5(!collapse5)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse5?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse5?(
      <Card style={{height:260,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - ½ cup cooked brown rice</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 cup roasted vegetables</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 2 tablespoons sliced scallions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 2 tablespoons chopped fresh cilantro</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Arrange rice, veggies, edamame and avocado in a 4-cup sealable container or bowl. Top with scallions and cilantro.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>394 calories; protein 9g; carbohydrates 44.4g.</Text>
      </Card>
    ):null}
    </Card>
    ):null}

  {show3?(
      <Card style={{marginTop:collapse5?270:20,width:290,alignSelf:"center",height:280,marginBottom:!show && !show2 && show3 && !show4?400:0}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Lettuce wraps</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data3}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/pizzaLettuce.jpeg')}/>
     <TouchableOpacity onPress={()=>setCollapse6(!collapse6)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse6?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse6?(
      <Card style={{height:320,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 1 ¼ cups cherry tomatoes or grape tomatoes, quartered</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 ounce thinly sliced, cooked turkey pepperoni, chopped (1/4 cup)</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 8 large Bibb lettuce leaves</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ¾ cup shredded reduced-fat mozzarella cheese (3 ounces)</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>In a medium bowl combine tomatoes, cheese, and pepperoni. Divide tomato mixture among lettuce leaves. Roll up or leave open as cups.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>
            <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>calories; protein 12.4g; carbohydrates 11.9g</Text>
      </Card>
    ):null}

    </Card>

  ):null}


  {show4?(
     <Card style={{marginTop:collapse6?330:20,width:290,alignSelf:"center",height:280,marginBottom:collapse7?400:90}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Chicken sandwich</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data4}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/sandwich.png')}/>
     <TouchableOpacity onPress={()=>setCollapse7(!collapse7)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse7?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse7?(
      <Card style={{height:310,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 2 slices multigrain bread</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ¼ ripe avocado</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 3 ounces cooked boneless, skinless chicken breast, sliced</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 2 slices tomato</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Toast bread. Mash avocado with a fork and spread onto one piece of toast. Top with chicken, tomato and the second piece of toast.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>
            <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>347 calories; protein 31.2g; carbohydrates 28.4g</Text>
      </Card>
    ):null}

    </Card>
  ):null}
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

export default Lunch
