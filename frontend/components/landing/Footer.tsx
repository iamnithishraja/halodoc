import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        <View style={styles.footerGrid}>
          <View style={styles.footerSection}>
            <View style={styles.logoContainer}>
              <View style={styles.logoIcon}>
                <MaterialCommunityIcons name="heart-outline" size={22} color="white" />
              </View>
              <Text style={styles.logoText}>halodoc.live</Text>
            </View>
            <Text style={styles.footerDescription}>
              Your trusted partner in healthcare, providing comprehensive medical services 
              with care and convenience.
            </Text>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.sectionTitle}>Services</Text>
            <View style={styles.linkList}>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>Online Consultations</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>In-Person Visits</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>Lab Tests</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>Medicine Delivery</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.sectionTitle}>Company</Text>
            <View style={styles.linkList}>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>About Us</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>Our Doctors</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>Terms of Service</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <View style={styles.contactList}>
              <View style={styles.contactItem}>
                <MaterialCommunityIcons name="phone" size={16} color="hsl(202, 95%, 52%)" />
                <Text style={styles.contactText}>+1 (555) 123-4567</Text>
              </View>
              <View style={styles.contactItem}>
                <MaterialCommunityIcons name="email" size={16} color="hsl(202, 95%, 52%)" />
                <Text style={styles.contactText}>support@halodoc.live</Text>
              </View>
              <View style={styles.contactItem}>
                <MaterialCommunityIcons name="map-marker" size={16} color="hsl(202, 95%, 52%)" />
                <Text style={styles.contactText}>Healthcare District, Medical City</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footerBottom}>
          <Text style={styles.copyrightText}>
            © 2024 halodoc.live. All rights reserved. | Your health, our commitment.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'hsl(210, 17%, 7%)',
    paddingVertical: 64,
  },
  footerContent: {
    maxWidth: 1400,
    marginHorizontal: 'auto',
      marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  footerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
    marginBottom: 48,
  },
  footerSection: {
    flex: 1,
    minWidth: 200,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoIcon: {
    backgroundColor: 'hsl(202, 95%, 52%)',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'hsl(202, 95%, 52%)',
  },
  footerDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  linkList: {
    gap: 8,
  },
  linkItem: {
    paddingVertical: 4,
  },
  linkText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  contactList: {
    gap: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  contactText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    paddingTop: 32,
    alignItems: 'center',
  },
  copyrightText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Footer;
