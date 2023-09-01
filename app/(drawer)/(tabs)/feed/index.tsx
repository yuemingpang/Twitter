import { StyleSheet, View, FlatList, Pressable, ActivityIndicator, Text} from 'react-native';
//import tweets from '../../../../assets/data/tweets';
import Tweet from '../../../../components/Tweet';
import { Entypo } from '@expo/vector-icons'; 
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTweetApi } from '../../../../lib/api/tweet';
import { useQuery } from '@tanstack/react-query';


export default function FeedScreen() {
  const {listTweets} = useTweetApi();

  const {data, isLoading, error} = useQuery({
    queryKey: ['tweets'],
    queryFn: listTweets,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  /*
  const [tweets, setTweets] = useState([]);
  
  useEffect(() => {
    const fetchTweets = async () => {
      const res = await listTweets();
      setTweets(res);
    };
    fetchTweets();
  }, []);
  */

  return (
    <View style={styles.page}>
      <FlatList
       data={data} 
       renderItem={({item}) => <Tweet tweet={item} /> }
      />

      <Pressable>
        <Link href="/new-tweet" asChild>
        <Entypo name="circle-with-plus" size={50} color="#1C9BF0" style = {styles.floatingButton} />
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  floatingButton: {
    textAlign: 'center',
    lineHeight: 50,
    position: 'absolute',
    right: 15,
    bottom: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});
