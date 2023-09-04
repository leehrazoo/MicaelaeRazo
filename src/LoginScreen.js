import React,{ useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
    const [email, setEmail]= useState('');
    const [password,setPassword] = useState('');

    const mudarLogin = () => {
      console.log(`Login com Email: ${email} e senha: ${password}`);
    };

    return(
        <View>
             <Text> Tela de Login  </Text>
             <TextInput 
                 
             />

      
        </View>
         
    );
};

const styles = StyleSheet.create({
    constainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

