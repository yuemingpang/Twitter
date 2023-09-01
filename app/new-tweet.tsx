import {View, StyleSheet, Image, Text, TextInput, Pressable, SafeAreaView, ActivityIndicator} from 'react-native';
import { Link, router, useNavigation, useRouter } from 'expo-router';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTweetApi } from '../lib/api/tweet';

const user = {
        id: 'u1',
        username: 'VadimNotJustDev',
        name: 'Vadim',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
};


export default function NewTweet(){
    const [text, setText] = useState("");
    const router = useRouter();
    const queryClient = useQueryClient();
    const {createTweet} = useTweetApi();

    const {mutateAsync, isLoading, isError, error} = useMutation({
        mutationFn: createTweet,
        onSuccess: (data) => {
            queryClient.setQueriesData(['tweets'], (curTweets) => [data, ...curTweets]);
        },
    });

    const onTweetPress = async () => {
        try {
            await mutateAsync({content: text});
            setText("");
            router.back(); 
        } catch (e) {
            console.log('Error:', e.message);
        }
    };

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <Link href="../" style={{fontSize:18}}>
                        Cancel
                    </Link>
                    {isLoading && <ActivityIndicator/>}
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
                {isError && <Text>Error: {error.message}</Text>}
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