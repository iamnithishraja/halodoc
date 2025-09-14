import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Hero = () => {
  const { width } = useWindowDimensions();
  const winWidth = Platform.OS === 'web' && typeof window !== 'undefined' ? window.innerWidth : width;
  const isDesktop = winWidth > 1024;
  const router = useRouter();

  const handleBookConsultation = () => {
    router.push('/(auth)/register' as any);
  };

  const handleGetStarted = () => {
    router.push('/(auth)/register' as any);
  };

  return (
    <LinearGradient
      colors={[ 'hsl(196, 100%, 97%)', 'hsl(0, 0%, 100%)' ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.heroContainer}
    >
      <View style={styles.heroContent}>
        <View style={[styles.heroGrid, { flexDirection: isDesktop ? 'row' : 'column' }]}>
          <View style={styles.heroLeft}>
            <View style={styles.heroTextContainer}>
              <Text style={styles.heroTitle}>
                Your Health,{' '}
                <Text style={styles.heroTitleAccent}>Our Priority</Text>
              </Text>
              <Text style={styles.heroSubtitle}>
                Complete healthcare at your fingertips. Get online consultations, 
                lab tests at home, and medicine delivered to your door.
              </Text>
            </View>

            <View style={[styles.buttonContainer, { flexDirection: isDesktop ? 'row' : 'column' }]}>
              <TouchableOpacity
                onPress={handleBookConsultation}
                style={[
                  styles.primaryButton,
                  isDesktop ? styles.buttonDesktop : styles.buttonMobile,
                ]}
              >
                <Text style={styles.primaryButtonText}>Book Consultation</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleGetStarted}
                style={[
                  styles.secondaryButton,
                  isDesktop ? styles.buttonDesktop : styles.buttonMobile,
                ]}
              >
                <MaterialCommunityIcons name="play" size={20} color="hsl(202, 95%, 52%)" />
                <Text style={styles.secondaryButtonText}>Get Started</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.featuresContainer}>
              <View style={styles.featureItem}>
                <MaterialCommunityIcons name="check-circle" size={20} color="hsl(142, 76%, 36%)" />
                <Text style={styles.featureText}>24/7 Available</Text>
              </View>
              <View style={styles.featureItem}>
                <MaterialCommunityIcons name="check-circle" size={20} color="hsl(142, 76%, 36%)" />
                <Text style={styles.featureText}>Licensed Doctors</Text>
              </View>
              <View style={styles.featureItem}>
                <MaterialCommunityIcons name="check-circle" size={20} color="hsl(142, 76%, 36%)" />
                <Text style={styles.featureText}>Secure Platform</Text>
              </View>
            </View>
          </View>

          <View style={styles.heroRight}>
            <View style={styles.imageContainer}>
              <View style={styles.imagePlaceholder} />
              <Image 
                source={require('../../assets/images/hero-doctor.jpg')}
                style={styles.heroImage}
                resizeMode="cover"
              />
            </View>
            <LinearGradient
              colors={[ 'hsl(202, 95%, 52%)', 'hsl(196, 100%, 47%)' ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.imageBackground}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 120,
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: 1400,
    marginHorizontal: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  heroGrid: {
    alignItems: 'center',
    gap: 48,
  },
  heroLeft: {
    flex: 1,
    gap: 32,
  },
  heroTextContainer: {
    gap: 16,
  },
  heroTitle: {
    fontSize: 56,
    fontWeight: 'bold',
    color: 'hsl(210, 17%, 7%)',
    lineHeight: 44,
  },
  heroTitleAccent: {
    color: 'hsl(202, 95%, 52%)',
  },
  heroSubtitle: {
    fontSize: 20,
    color: 'hsl(215.4, 16.3%, 46.9%)',
    lineHeight: 28,
  },
  buttonContainer: {
    gap: 16,
  },
  buttonDesktop: {
    minWidth: 220,
    alignSelf: 'flex-start',
  },
  buttonMobile: {
    width: '100%',
  },
  primaryButton: {
    backgroundColor: 'hsl(202, 95%, 52%)',
    paddingHorizontal: 28,
    paddingVertical: 14,
    minHeight: 48,
    borderRadius: 10,
    shadowColor: 'hsl(202, 95%, 52%)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 8,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: 'hsl(202, 95%, 52%)',
    paddingHorizontal: 28,
    paddingVertical: 14,
    minHeight: 48,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: 'hsl(202, 95%, 52%)',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  featuresContainer: {
    flexDirection: 'row',
    gap: 24,
    paddingTop: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    color: 'hsl(215.4, 16.3%, 46.9%)',
    fontSize: 16,
  },
  heroRight: {
    flex: 1,
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    height: 400,
  },
  imagePlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 400,
    backgroundColor: 'hsl(210, 17%, 95%)',
    borderRadius: 16,
    zIndex: 1,
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 400,
    borderRadius: 16,
    shadowColor: 'hsl(202, 95%, 52%)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 8,
    zIndex: 2,
  },
  imageBackground: {
    position: 'absolute',
    top: -16,
    right: -16,
    width: '100%',
    height: '100%',
    backgroundColor: 'hsl(202, 95%, 52%)',
    borderRadius: 16,
    opacity: 0.2,
    zIndex: 0,
  },
});

export default Hero;
