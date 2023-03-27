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


const Breakfast=()=>{
  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height
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
  const indx = () => {navigation.navigate("Index")}
  return(
    <View style={{height,flex:1}}>
    <ScrollView style={{flex:1}}>
   
      <Text style={{marginTop:100,fontFamily:"Mulish_500Medium",marginLeft:20,fontSize:30}}>Cheap & Healthy Breakfast suggestions</Text>

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
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Banana muffins</Text>
    <Text style={{marginTop:-30,color:"transparent"}}>{data}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:20,width:250}} source={require('../assets/muffin.jpeg')}/>
    <TouchableOpacity onPress={()=>setCollapse(!collapse)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
    {collapse?(
      <Card style={{height:240,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 1 whole-wheat English muffin, toasted</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 tablespoon peanut butter</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ½ banana, sliced</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - Pinch of ground cinnamon</Text>
      <Text style={{marginLeft:10, marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Top English muffin with peanut butter, banana and cinnamon.</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:"bold"}}>Per Serving</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>344 calories; protein 10.6g; carbohydrates 56.8g</Text>
      </Card>
    ):null}
    </Card>
):null}

    {show?(
           <Card style={{marginTop:collapse?250:20,width:290,alignSelf:"center",height:280,marginBottom:show && !show2 && !show3 && !show4?400:0}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Egg & cheese bake</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/cheesy-baked-eggs.jpeg')}/>
        <TouchableOpacity onPress={()=>setCollapse2(!collapse2)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse2?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
    {collapse2?(
      <Card style={{height:330,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 1 cup chopped spinach</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 2 large eggs</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 teaspoon milk</Text>

         <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 corn tortilla, warmed</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Coat an 8-ounce ramekin with cooking spray. Add spinach. Microwave on High until wilted, about 30 seconds. Crack eggs on top, drizzle with milk and season with salt and pepper. Sprinkle with cheese. Microwave on High until the eggs are set, about 2 minutes. Serve with tortilla.</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:"bold"}}>Per Serving </Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>279 calories; protein 19g; carbohydrates 14g</Text>
      </Card>
    ):null}
    </Card>
    ):null}


    {show2?(
      <Card style={{marginTop:collapse2?340:20,width:290,alignSelf:"center",height:280}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Peanut butter Oats</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data2}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/peanutButter.jpeg')}/>
    <TouchableOpacity onPress={()=>setCollapse4(!collapse4)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse4?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse4?(
      <Card style={{height:260,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - ½ cup soymilk or other plant-based milk</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ½ cup old-fashioned rolled oats</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 tablespoon pure maple syrup</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 tablespoon powdered peanut butter</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Stir soymilk (or other milk)sal, oats, syrup, and powdered peanut butter together in a 2-cup mason jar. Refrigerate overnight.</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Per Serving</Text>
      <Text style={{marginLeft:10,marginTop:5,fontFamily:"Mulish_500Medium"}}>368 calories; protein 13.4g; carbohydrates62.8g</Text>
      </Card>
    ):null}
    </Card>
    ):null}

    {show2?(
    <Card style={{marginTop:collapse4?270:20,width:290,alignSelf:"center",height:280,marginBottom:!show && show2 && !show3 && !show4?400:0}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Banana toast</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data2}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/bananaToast.jpeg')}/>
        <TouchableOpacity onPress={()=>setCollapse5(!collapse5)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse5?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse5?(
      <Card style={{height:280,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 1 slice whole-wheat bread, toasted, toasted</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 tablespoon peanut butter</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 small banana, sliced</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - Cinnamon to taste</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Spread toast with peanut butter and top with banana slices. Sprinkle with cinnamon to taste.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>  
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>266 calories; protein 8.1g; carbohydrates 38.3g</Text>
      </Card>
    ):null}
    </Card>
    ):null}

  {show3?(
      <Card style={{marginTop:collapse5?290:20,width:290,alignSelf:"center",height:280,marginBottom:!show && !show2 && show3 && !show4?420:0}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Banana Oatmeal</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data3}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/banana-oatmeal.jpeg')}/>
     <TouchableOpacity onPress={()=>setCollapse6(!collapse6)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse6?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse6?(
      <Card style={{height:340,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 1 cup water</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - Pinch of salt</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ½ cup old-fashioned rolled oats</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ½ small banana, sliced</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Bring water and a pinch of regular salt to a boil in a small saucepan. Stir in oats, reduce heat to medium and cook, stirring occasionally, until most of the liquid is absorbed, about 5 minutes. Remove from heat, cover and let stand 2 to 3 minutes. Top with banana, chocolate spread and flaky salt.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>295 calories; protein 6.6g; carbohydrates 50g</Text>
      </Card>
    ):null}

    </Card>

  ):null}


  {show4?(
     <Card style={{marginTop:collapse6?350:20,width:290,alignSelf:"center",height:280,marginBottom:collapse7?340:80}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Spinach smoothie</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data4}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/spinachSmoothie.jpeg')}/>
     <TouchableOpacity onPress={()=>setCollapse7(!collapse7)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse7?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse7?(
      <Card style={{height:250,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 cup plain kefir</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 tablespoon peanut butter</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 cup spinach</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 frozen banana</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Add kefir, peanut butter, spinach, and banana to a blender. Blend until smooth.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text> 
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>324 calories; protein 16.3g; carbohydrates 44.5g</Text>
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

export default Breakfast
