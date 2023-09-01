import { ActivityIndicator, Text } from 'react-native';
import Tweet from '../../../../../components/Tweet';
//import tweets from '../../../../../assets/data/tweets';
import { useGlobalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { useTweetApi } from '../../../../../lib/api/tweet';

export default function TweetScreen() {
    const {id} = useGlobalSearchParams();
    const {getTweet} = useTweetApi();

    const {data, isLoading, error} = useQuery({
        queryKey: ['tweet', id],
        queryFn: () => getTweet(id as string),
    });

    if (isLoading) {
        return <ActivityIndicator />
    }
    if (error){
        return <Text>Tweet {id} not found!</Text>
    }

    return <Tweet tweet={data} />;
}