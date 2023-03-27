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
const Breakfast=()=>{
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
   
      <Text style={{marginTop:100,fontFamily:"Mulish_500Medium",marginLeft:20,fontSize:30}}>Cheap & Healthy Dinner suggestions</Text>


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
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Pizza</Text>
    <Text style={{marginTop:-30,color:"transparent"}}>{data}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:20,width:250}} source={require('../assets/pizza.jpeg')}/>
    <TouchableOpacity onPress={()=>setCollapse(!collapse)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
    {collapse?(
      <Card style={{height:320,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 1 pound Two-Ingredient Dough (see associated recipe)</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - All-purpose flour for rolling</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ½ teaspoon cornmeal</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ⅓ cup prepared pizza sauce</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ¾ cup shredded mozzarella cheese</Text>
        <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ½ cup torn basil leaves</Text>
      <Text style={{marginLeft:10, marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Place a pizza stone or a large rimless baking sheet on the bottom rack of the the oven. Preheat oven to 500 degrees F.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>245 calories; protein 16.4g; carbohydrates 33.6g</Text>
      </Card>
    ):null}
    </Card>
):null}

    {show?(
           <Card style={{marginTop:collapse?330:20,width:290,alignSelf:"center",height:280,marginBottom:show && !show2 && !show3 && !show4?420:0}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Teriyaki Edame</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/teriaki.jpeg')}/>
        <TouchableOpacity onPress={()=>setCollapse2(!collapse2)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse2?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
    {collapse2?(
      <Card style={{height:340,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 1 tablespoon olive oil</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 (8 ounce) bag tricolor coleslaw mix</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 2 cups shelled edamame, thawed if frozen</Text>
    <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ¼ cup reduced-sodium teriyaki sauce</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Heat oil in a large nonstick skillet over medium heat. Add coleslaw mix and cook, stirring, until the cabbage begins to soften, about 2 minutes. Stir in edamame and teriyaki sauce. Cook, stirring, until the edamame are heated through and the sauce thickens, about 1 minute more.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>
          <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>249 calories; protein 17g; carbohydrates 21g</Text>
      </Card>
    ):null}
    </Card>
    ):null}


    {show2?(
      <Card style={{marginTop:collapse2?350:20,width:290,alignSelf:"center",height:280}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Tostadas</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data2}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/tostadas.jpeg')}/>
    <TouchableOpacity onPress={()=>setCollapse4(!collapse4)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse4?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse4?(
      <Card style={{height:320,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 8 corn tortillas
</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 tablespoon olive oil</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - ¼ teaspoon kosher salt</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 2 cups pico de gallo</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Preheat oven to 375°F. Arrange tortillas on a large baking sheet. Use a pastry brush to brush both sides of each tortilla lightly with oil. Sprinkle with salt. Bake for 5 minutes, flip and cook until lightly browned, about 5 more minutes.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>
        <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>376 calories; carbohydrates 22g; protein 24g</Text>
      </Card>
    ):null}
    </Card>
    ):null}

    {show2?(
    <Card style={{marginTop:collapse4?330:20,width:290,alignSelf:"center",height:280,marginBottom:!show && show2 && !show3 && !show4?420:0}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Flatbread</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data2}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/flatbread.jpeg')}/>
        <TouchableOpacity onPress={()=>setCollapse5(!collapse5)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse5?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse5?(
      <Card style={{height:370,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 1 (5- to 6-ounce) frozen cauliflower pizza crust</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1 (10 ounce) Caesar salad kit</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 6 ounces skinless rotisserie chicken breast, shredded</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Prepare crust according to package directions; bake until golden brown and crispy. Remove from oven and let stand to cool slightly. Prepare salad kit according to package directions, reserving the Parmesan cheese; fold in chicken. Top the crust with the prepared salad and sprinkle with the Parmesan; cut into 6 pieces. Serve any extra salad on the side.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>266 calories; protein 8.1g; carbohydrates 38.3g</Text>
      </Card>
    ):null}
    </Card>
    ):null}

  {show3?(
      <Card style={{marginTop:collapse5?380:20,width:290,alignSelf:"center",height:280,marginBottom:!show && !show2 && show3 && !show4?420:0}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Red pepper soup</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data3}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/redPepper.jpeg')}/>
     <TouchableOpacity onPress={()=>setCollapse6(!collapse6)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse6?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse6?(
      <Card style={{height:320,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 1 (32-ounce) carton low-sodium roasted red pepper soup</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 1  (15 ounce) can no-salt-added chickpeas, rinsed</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 3 cups baby spinach</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Bring roasted red pepper soup to a simmer in a medium saucepan over medium heat. Stir in chickpeas and baby spinach; simmer until the spinach just wilts, about 1 minute. Serve topped with freshly cracked black pepper, if desired.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>488 calories; protein 26g; carbohydrates 78g</Text>
      </Card>
    ):null}

    </Card>

  ):null}


  {show4?(
     <Card style={{marginTop:collapse6?330:20,width:290,alignSelf:"center",height:280,marginBottom:collapse7?420:100}}>
    <Text style={{marginTop:20,fontSize:30,marginLeft:10,fontFamily:"Mulish_500Medium"}}>Cheese pasta</Text>
    <Text style={{marginTop:-15,color:"transparent"}}>{data4}</Text>
    <Image style={{alignSelf:"center",height:160,marginTop:10,width:250}} source={require('../assets/cheesePasta.jpeg')}/>
     <TouchableOpacity onPress={()=>setCollapse7(!collapse7)}>
     <MaterialIcons style={{marginTop:10,marginLeft:10}} name={collapse7?"arrow-drop-up":"arrow-drop-down" }size={24} color="black" />
    </TouchableOpacity>
          {collapse7?(
      <Card style={{height:340,}}>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:15}}> - 4 ounces chickpea cavatappi pasta</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 2 ounces garlic-and-herb-flavored goat cheese</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}> - 2 cups cooked broccoli florets</Text>
      <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Directions</Text>
      <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>Cook pasta according to package directions; drain, reserving ½ cup cooking water. Return the drained pasta to the pot and add goat cheese. Stir until the cheese melts and coats the pasta, adding the reserved pasta water as needed to make a thin sauce. Fold in broccoli. Season to taste with salt and pepper, if desired.</Text>
      <Text style={{marginLeft:10,fontWeight:'bold',marginTop:5}}>Per Serving</Text>
        <Text style={{marginLeft:10,fontFamily:"Mulish_500Medium",marginTop:5}}>292 calories;  protein 21g; carbohydrates 37g</Text>
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
