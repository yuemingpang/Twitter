import { StyleSheet, View, FlatList, Pressable} from 'react-native';
import tweets from '../../../../assets/data/tweets';
import Tweet from '../../../../components/Tweet';
import { Entypo } from '@expo/vector-icons'; 
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
       data={tweets} 
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
