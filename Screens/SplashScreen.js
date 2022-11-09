import React, {useState} from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen=({navigation})=>{
    const [timePassed, setTimePassed] = useState(false);
  
    setTimeout(() => {
      setTimePassed(true);
    },2500);
  
    if (!timePassed) { 
      // console.log(!timePassed);
    return(
      <View style = {styles.imageContainer}>
        
          <Image style = {styles.image}
          source = {require('/home/divum/ProjectsReactNative/Tunin/assets/Tunin.jpg')}></Image>
          
      </View>
    )
    }
    
    navigation.navigate("HomePage");
    return null;
   }

   const styles = StyleSheet.create({
    image: {
        height :100,
        width :250,
        alignSelf : 'center',
        // flex : 1,
        marginVertical : 100,


    },
    imageContainer: {
        alignSelf : 'center',
        marginVertical : 100,
        backgroundColor : 'white'

    }
   })
export default SplashScreen;
  