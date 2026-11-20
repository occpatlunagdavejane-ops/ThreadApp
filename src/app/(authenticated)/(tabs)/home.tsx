import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface PostItem {
  id: string;
  name: string;
  username: string;
  avatar: string;
  time: string;
  text: string;
  image?: string;
  likes: number;
  comments: number;
}

const STATIC_POSTS: PostItem[] = [
  {
    id: '1',
    name: 'Mikaela Reyes',
    username: 'mika.reyes',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    time: '2h',
    text: 'Nothing beats late afternoon coffee while working on UI designs. Keep building! ☕✨',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    likes: 124,
    comments: 18,
  },
  {
    id: '2',
    name: 'Jayson Cruz',
    username: 'jaysoncruz_dev',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    time: '4h',
    text: 'Hot take: Minimalist layouts with clean spacing always beat cluttered dashboards. Agree or disagree?',
    likes: 89,
    comments: 42,
  },
  {
    id: '3',
    name: 'Camille Santos',
    username: 'camillesantos',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
    time: '6h',
    text: 'Weekend getaway views 🌊🌴',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    likes: 310,
    comments: 27,
  },
];

export default function HomeTab(): React.JSX.Element {
  const renderPost: ListRenderItem<PostItem> = ({ item }) => (
    <View style={styles.postCard}>
      {/* Left Column: Avatar + Threads Vertical Line */}
      <View style={styles.leftColumn}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.threadLine} />
      </View>

      {/* Right Column: User Info, Text, Image, Actions */}
      <View style={styles.rightColumn}>
        <View style={styles.postHeader}>
          <View style={styles.nameRow}>
            <Text style={styles.displayName}>{item.name}</Text>
            <Text style={styles.username}>@{item.username}</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.timeText}>{item.time}</Text>
            <Ionicons name="ellipsis-horizontal" size={16} color="#8E8E93" />
          </View>
        </View>

        <Text style={styles.postText}>{item.text}</Text>

        {item.image && (
          <Image source={{ uri: item.image }} style={styles.postImage} />
        )}

        {/* Action Icons */}
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="heart-outline" size={20} color="#1C1C1E" />
            <Text style={styles.actionCount}>{item.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="chatbubble-outline" size={19} color="#1C1C1E" />
            <Text style={styles.actionCount}>{item.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="repeat-outline" size={21} color="#1C1C1E" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="paper-plane-outline" size={19} color="#1C1C1E" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Top Threads-style Centered Logo Header */}
      <View style={styles.topHeader}>
        <Ionicons name="at" size={30} color="#000000" />
      </View>

      {/* Scrollable Feed */}
      <FlatList
        data={STATIC_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  postCard: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  leftColumn: {
    alignItems: 'center',
    marginRight: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F2F2F7',
  },
  threadLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#E5E5EA',
    marginTop: 8,
    borderRadius: 1,
  },
  rightColumn: {
    flex: 1,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  displayName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
  },
  username: {
    fontSize: 13,
    color: '#8E8E93',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeText: {
    fontSize: 13,
    color: '#8E8E93',
  },
  postText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#1C1C1E',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 220,
    borderRadius: 14,
    marginBottom: 12,
    backgroundColor: '#F2F2F7',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  actionCount: {
    fontSize: 13,
    color: '#3C3C43',
  },
});