import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThreadCard from '../components/ThreadCard';

const DUMMY_THREADS = [
  {
    id: '1',
    author: 'alex_dev',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    content: 'Just migrated our main backend architecture over to a serverless node cluster. Feels incredible when things compile cleanly on the first try! 🚀',
    timeAgo: '3h',
    repliesCount: 12,
    likesCount: 48,
  },
  {
    id: '2',
    author: 'sarah_codes',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
    content: 'Working on a fresh mobile UI concept blending Facebook-like media sharing streams with the clean vertical reply lines of Threads. What do you guys think of this layout?',
    timeAgo: '5h',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600',
    repliesCount: 34,
    likesCount: 152,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top App Header with Meta/Threads style logo */}
      <View style={styles.header}>
        <Ionicons name="globe-outline" size={28} color="#000" />
      </View>

      <FlatList
        data={DUMMY_THREADS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ThreadCard {...item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dbdbdb',
  },
});
