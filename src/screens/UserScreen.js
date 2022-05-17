import React , {useState} from "react";
import {View, Text,StyleSheet,TextInput,TouchableOpacity} from "react-native";

const UserScreen = ({navigation}) => {
  const [userName, setUserName] = useState("");
    return (
      <View style={styles.viewStyle}>
    <TextInput
                placeholder="User name"
                value={userName}
                onChangeText={(text) => setUserName(text)}
                keyboardType="default"
                style={styles.UserNameStyle}
            />
    <TouchableOpacity   style={styles.btnStyle} onPress = {() => navigation.navigate("TODO") }>
    <Text>Go</Text>
  </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle :{
    flex: 1,
    width: '100%',
    justifyContent :'center'
  },
  UserNameStyle : { 
     borderRadius :20 ,
     fontWeight : 'bold',
     fontSize :20,  
     width: '80%',
     margin: 15,
     backgroundColor : 'gray',
    alignSelf :'center',
   },
  btnStyle :{
  borderRadius :10 ,
  fontWeight : 'bold',
  fontSize :20,
  color : 'white',
  backgroundColor : 'blue',
  paddingHorizontal : 20,
  paddingVertical : 10,
  alignSelf :'center',
 },
});

export default UserScreen;  