import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSearchParams } from "expo-router";


const Authenticate = () => {
    const [code, setCode] = useState('');
    const {email} = useSearchParams();

    const onVerify = async () => {

    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Verify your email</Text>
            <TextInput 
                placeholder="Email code" 
                value = {code}
                onChangeText={setCode}
                style={styles.input}
            />

            <Pressable style={styles.button} onPress={onVerify}>
                <Text style={styles.buttonText}>Verify</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      padding: 24,
    },
    label: {
      fontSize: 24,
      marginVertical: 5,
      color: 'gray',
    },
    error: {
      marginVertical: 5,
      color: 'red',
    },
    input: {
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      padding: 10,
      fontSize: 20,
      marginVertical: 5,
      borderRadius: 10,
    },
    button: {
      backgroundColor: '#050A12',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginVertical: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default Authenticate;