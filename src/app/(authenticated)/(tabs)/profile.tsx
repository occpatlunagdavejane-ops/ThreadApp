import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileTab(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons name="globe-outline" size={24} color="#000000" />
        <Ionicons name="menu-outline" size={26} color="#000000" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header (Threads Layout) */}
        <View style={styles.headerSection}>
          <View style={styles.nameBlock}>
            <Text style={styles.displayName}>Alex Rivera</Text>
            <View style={styles.handleRow}>
              <Text style={styles.username}>@alexrivera</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>threads.net</Text>
              </View>
            </View>
          </View>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300',
            }}
            style={styles.profileAvatar}
          />
        </View>

        {/* Bio */}
        <Text style={styles.bioText}>
          UI/UX Enthusiast & Mobile Developer 📱{'\n'}
          Building clean interfaces one component at a time.
        </Text>

        {/* Personal Details (Facebook Style Info List) */}
        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Ionicons name="location-outline" size={18} color="#666666" />
            <Text style={styles.detailText}>
              Lives in <Text style={styles.detailBold}>Cagayan de Oro City</Text>
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons name="school-outline" size={18} color="#666666" />
            <Text style={styles.detailText}>
              Studied <Text style={styles.detailBold}>Information Technology</Text>
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons name="calendar-outline" size={18} color="#666666" />
            <Text style={styles.detailText}>Joined November 2026</Text>
          </View>
        </View>

        {/* Followers Count */}
        <Text style={styles.followersText}>1,248 followers · 312 following</Text>

        {/* Edit Profile Button */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton} activeOpacity={0.7}>
            <Text style={styles.editButtonText}>Share Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs Divider (Threads / Media) */}
        <View style={styles.subTabs}>
          <View style={[styles.subTabItem, styles.activeSubTab]}>
            <Text style={styles.activeSubTabText}>Threads</Text>
          </View>
          <View style={styles.subTabItem}>
            <Text style={styles.inactiveSubTabText}>Photos</Text>
          </View>
        </View>

        {/* Sample User Post Preview */}
        <View style={styles.samplePost}>
          <Text style={styles.samplePostDate}>Pinned · 1d</Text>
          <Text style={styles.samplePostText}>
            Excited to share my new mobile app interface! Combining the best of
            Threads and Facebook layouts.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginTop: 8,
  },
  nameBlock: {
    flex: 1,
  },
  displayName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.5,
  },
  handleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  username: {
    fontSize: 15,
    color: '#000000',
  },
  badge: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 11,
    color: '#8E8E93',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#F2F2F7',
  },
  bioText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#1C1C1E',
    paddingHorizontal: 18,
    marginTop: 14,
  },
  detailsCard: {
    marginHorizontal: 18,
    marginTop: 14,
    padding: 12,
    backgroundColor: '#F9F9FB',
    borderRadius: 12,
    gap: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E5EA',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 13,
    color: '#3C3C43',
  },
  detailBold: {
    fontWeight: '600',
    color: '#000000',
  },
  followersText: {
    fontSize: 13,
    color: '#8E8E93',
    paddingHorizontal: 18,
    marginTop: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginTop: 16,
    gap: 10,
  },
  editButton: {
    flex: 1,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D1D6',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  shareButton: {
    flex: 1,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D1D6',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  subTabs: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  subTabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeSubTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
  activeSubTabText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  inactiveSubTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E93',
  },
  samplePost: {
    padding: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  samplePostDate: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
  },
  samplePostText: {
    fontSize: 14,
    color: '#1C1C1E',
    lineHeight: 20,
  },
});