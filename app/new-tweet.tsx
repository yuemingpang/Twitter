import {View, StyleSheet, Image, Text, TextInput, Pressable, SafeAreaView} from 'react-native';
import { Link, useNavigation, useRouter } from 'expo-router';
import { useState } from 'react';

const user = {
        id: 'u1',
        username: 'VadimNotJustDev',
        name: 'Vadim',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
};


export default function NewTweet(){
    const [text, setText] = useState("");
    const action = useRouter();
    const onTweetPress = () => {

        setText("");
        action.back();
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Link href="../" style={{fontSize:18}}>
                    Cancel
                </Link>
                <Pressable onPress={onTweetPress} style={styles.buttonTweet}>
                    <Text style={styles.buttonText}>
                        Tweet
                    </Text>
                </Pressable>
            </View>

            <View style={styles.input}>
                <Image src={user.image} style={styles.image}/>
                <TextInput
                 value = {text}
                 onChangeText={setText}
                 placeholder="What's in your mind?" 
                 multiline 
                 numberOfLines={5}
                 style={{ flex: 1 }}/>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    },
    container: {
        padding: 10,
        flex: 1,
    }, 
    input: {
        flexDirection: 'row',
    },
    buttons: {
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonTweet: {
        backgroundColor: "#1C9BF0",
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

});