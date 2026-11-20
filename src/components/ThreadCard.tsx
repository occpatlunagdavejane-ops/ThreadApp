import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface ThreadProps {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timeAgo: string;
  image?: string;
  repliesCount: number;
  likesCount: number;
}

export default function ThreadCard({
  id,
  author,
  avatar,
  content,
  timeAgo,
  image,
  repliesCount,
  likesCount,
}: ThreadProps) {
  return (
    <Link href={'/post/${id}' as any} asChild>
      <TouchableOpacity style={styles.container}>
        {/* Left Column: Avatar & Vertical Thread Line */}
        <View style={styles.leftColumn}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <View style={styles.threadLine} />
        </View>

        {/* Right Column: Content */}
        <View style={styles.rightColumn}>
          <View style={styles.headerRow}>
            <Text style={styles.authorText}>{author}</Text>
            <Text style={styles.timeText}>{timeAgo}</Text>
          </View>

          <Text style={styles.contentText}>{content}</Text>

          {image && <Image source={{ uri: image }} style={styles.postImage} />}

          {/* Action Interactive Bar */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="heart-outline" size={18} color="#666" />
              <Text style={styles.actionText}>{likesCount}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="chatbubble-outline" size={18} color="#666" />
              <Text style={styles.actionText}>{repliesCount}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="repeat-outline" size={18} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="paper-plane-outline" size={18} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dbdbdb',
    backgroundColor: '#fff',
  },
  leftColumn: {
    alignItems: 'center',
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  threadLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#dadada',
    marginVertical: 8,
    borderRadius: 1,
  },
  rightColumn: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  authorText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000',
  },
  timeText: {
    fontSize: 13,
    color: '#8e8e8e',
  },
  contentText: {
    fontSize: 14,
    color: '#111',
    lineHeight: 20,
    marginBottom: 8,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 4,
    gap: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    fontSize: 13,
    color: '#666',
  },
});
