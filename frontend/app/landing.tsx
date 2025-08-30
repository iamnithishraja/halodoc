import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  useWindowDimensions,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/userStore';
import { getAuthRoute, getRegisterRoute } from '@/utils/platformUtils';

const HaloDocLanding = () => {
  const bannerScrollRef = useRef<any>(null);
  const router = useRouter();
  const { user } = useUserStore();
  const [activeServiceId, setActiveServiceId] = useState(1);
  const [bannerIndex, setBannerIndex] = useState(0);
  const { width: screenWidth } = useWindowDimensions();

  const serviceToBanner: Record<number, number> = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    7: 0,
  };

  const scrollToBanner = (index: number) => {
    if (bannerScrollRef.current) {
      bannerScrollRef.current.scrollTo({ x: index * (screenWidth * 0.85), animated: true });
      setBannerIndex(index);
    }
  };

  const services = [
    {
      id: 1,
      icon: '🩺',
      title: 'Talk to Doctor',
      subtitle: 'Online Consultation',
      color: '#00A896',
    },
    {
      id: 2,
      icon: '💊',
      title: 'Medicine',
      subtitle: 'Home Delivery',
      color: '#028090',
    },
    {
      id: 3,
      icon: '📅',
      title: 'Book Dr.',
      subtitle: 'Appointment',
      color: '#05668D',
    },
    {
      id: 4,
      icon: '🧪',
      title: 'Lab Test &',
      subtitle: 'Packages',
      color: '#00A896',
    },
    {
      id: 7,
      icon: '📋',
      title: 'More',
      subtitle: 'Services',
      color: '#02C39A',
    },
  ];

  const handleStartConsultation = () => {
    if (!user) {
      router.push(getAuthRoute() as any);
      return;
    }
    router.push('/(tabs)' as any);
  };

  const bannerData = [
    {
      id: 1,
      title: 'Talk to a Doctor Online',
      subtitle: 'Connect with certified doctors instantly through real-time video calls, secure messaging, and receive digital prescriptions delivered to your phone',
      buttonText: 'Start Consultation',
      action: 'login',
      bgGradient: ['#E8F5F3', '#D4EDE9'],
      accentColor: '#00A896',
      image: '🩺',
    },
    {
      id: 2,
      title: 'Order Medicines Easily',
      subtitle: 'Upload your prescription or search for medicines, add to cart with easy payment options, and track your delivery in real-time from pharmacy to doorstep',
      buttonText: 'Order Now',
      action: 'login',
      bgGradient: ['#E6F4F7', '#D1E9ED'],
      accentColor: '#028090',
      image: '💊',
    },
    {
      id: 3,
      title: 'Book an Appointment',
      subtitle: 'Find and book appointments with top doctors by filtering through specialty, city, language preferences, consultation fees, and available time slots',
      buttonText: 'Book Now',
      action: 'login',
      bgGradient: ['#E3ECF1', '#D0DDE5'],
      accentColor: '#05668D',
      image: '📅',
    },
    {
      id: 4,
      title: 'Lab Tests & Packages',
      subtitle: 'Choose from comprehensive health packages, book lab tests with convenient home sample collection or visit partner labs, with live tracking and digital reports',
      buttonText: 'Explore Tests',
      action: 'login',
      bgGradient: ['#E6F7F3', '#D2EFE7'],
      accentColor: '#02C39A',
      image: '🧪',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (bannerIndex + 1) % bannerData.length;
      if (bannerScrollRef.current) {
        bannerScrollRef.current.scrollTo({ x: nextIndex * (screenWidth * 0.85), animated: true });
      }
      setBannerIndex(nextIndex);
    }, 10000);
    return () => clearInterval(interval);
  }, [bannerIndex, bannerData.length, screenWidth]);

  const features = [
    {
      id: 1,
      icon: '📱',
      title: 'Video Consultation',
      description: 'Experience healthcare from the comfort of your home with our secure HD video consultation platform. Connect with verified doctors across 50+ specialties, share medical reports instantly, and receive e-prescriptions within minutes. Our HIPAA-compliant platform ensures your privacy while providing seamless communication through video, voice, or chat options.',
      benefits: ['24/7 Availability', 'Multi-language Support', 'Screen Sharing', 'Follow-up Reminders'],
      color: '#00A896',
    },
    {
      id: 2,
      icon: '📝',
      title: 'Digital Prescriptions',
      description: 'Say goodbye to paper prescriptions with our advanced digital prescription system. Every consultation generates a detailed, legally valid e-prescription that you can access anytime. Our smart system maintains your medication history, sends refill reminders, and checks for drug interactions to ensure your safety.',
      benefits: ['Cloud Storage', 'Medicine Reminders', 'Drug Interaction Alerts', 'Prescription History'],
      color: '#028090',
    },
    {
      id: 3,
      icon: '🚚',
      title: 'Medicine Delivery',
      description: 'Get genuine medicines delivered to your doorstep with our express delivery service. We partner with certified pharmacies to ensure authenticity, offer competitive prices with up to 30% discounts, and provide real-time tracking. Our temperature-controlled logistics ensure medicine quality during transit.',
      benefits: ['Same-day Delivery', 'Genuine Medicines', 'Best Prices', 'Live Tracking'],
      color: '#05668D',
    },
    {
      id: 4,
      icon: '🏠',
      title: 'Home Sample Collection',
      description: 'Skip the queues with our convenient home sample collection service. Our trained phlebotomists arrive at your preferred time, use sterile equipment, and ensure proper sample handling. Get accurate results from NABL-accredited labs delivered digitally within 24-48 hours.',
      benefits: ['Trained Professionals', 'NABL Labs', 'Digital Reports', 'Time-slot Booking'],
      color: '#00A896',
    },
    {
      id: 5,
      icon: '🩺',
      title: 'Online or Offline Consultation',
      description: 'Choose how you want to consult - virtually from anywhere or in-person at partner clinics. Our hybrid model gives you flexibility while maintaining continuity of care. Book instant appointments or schedule for later, with automated reminders and easy rescheduling options.',
      benefits: ['Flexible Booking', 'Instant & Scheduled', 'Partner Clinics', 'Queue Management'],
      color: '#02C39A',
    },
    {
      id: 6,
      icon: '📊',
      title: 'Health Records Management',
      description: 'Organize your entire medical history in one secure digital vault. Upload prescriptions, lab reports, X-rays, and medical documents with our smart categorization system. Share records instantly with doctors, track health trends over time, and never lose important medical documents again.',
      benefits: ['Secure Vault', 'Smart Categorization', 'Instant Sharing', 'Health Analytics'],
      color: '#028090',
    },
  ];

  const specialties = [
    { name: 'General Medicine', icon: '🩺', color: '#00A896' },
    { name: 'Dermatology', icon: '🧴', color: '#028090' },
    { name: 'Pediatrics', icon: '👶', color: '#05668D' },
    { name: 'Gynecology', icon: '👩‍⚕️', color: '#02C39A' },
    { name: 'Cardiology', icon: '❤️', color: '#00A896' },
    { name: 'Orthopedics', icon: '🦴', color: '#028090' },
    { name: 'Psychiatry', icon: '🧠', color: '#05668D' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#05668D" />
      
      {/* Enhanced Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/icon.png')} style={styles.logoImage} />
            <View>
              <Text style={styles.logo}>HaloDoc</Text>
              <Text style={styles.tagline}>Your Trusted Health Partner</Text>
            </View>
          </View>
          <View style={styles.headerButtons}>
            <TouchableOpacity 
              style={styles.registerBtn}
              onPress={() => router.push(getRegisterRoute() as any)}
            >
              <Text style={styles.headerBtnText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.loginBtn}
              onPress={() => router.push(getAuthRoute() as any)}
            >
              <Text style={styles.headerBtnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Services Grid - Centered Container */}
        <View style={styles.contentWrapper}>
          <View style={styles.servicesContainer}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.servicesGrid}
            >
              {services.map((service) => {
                const isActive = activeServiceId === service.id;
                return (
                  <TouchableOpacity 
                    key={service.id} 
                    style={[
                      styles.serviceCard, 
                      isActive && { backgroundColor: service.color },
                      { borderColor: service.color }
                    ]}
                    onPress={() => {
                      setActiveServiceId(service.id);
                      const target = serviceToBanner[service.id] ?? 0;
                      scrollToBanner(target);
                    }}
                  >
                    <Text style={styles.serviceIcon}>{service.icon}</Text>
                    <Text style={[styles.serviceTitle, isActive && styles.activeText]}>
                      {service.title}
                    </Text>
                    <Text style={[styles.serviceSubtitle, isActive && styles.activeText]}>
                      {service.subtitle}
                    </Text>
                    {isActive && <View style={styles.activeIndicator} />}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/* Quick Action - Enhanced Design */}
          <View style={styles.quickActionWrapper}>
            <TouchableOpacity style={styles.quickAction} onPress={handleStartConsultation}>
              <View style={styles.quickActionContent}>
                <Text style={styles.quickActionTitle}>Consult with Top Doctors</Text>
                <Text style={styles.quickActionSubtitle}>Available 24x7 • 50+ Specialties</Text>
              </View>
              <View style={styles.quickActionButton}>
                <Text style={styles.quickActionButtonText}>Start Now →</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Auto-Scrolling Banner - Centered */}
          <View style={styles.bannerWrapper}>
            <ScrollView
              ref={bannerScrollRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              style={styles.bannerContainer}
              contentContainerStyle={styles.bannerContentContainer}
              onMomentumScrollEnd={(e) => {
                const index = Math.round(e.nativeEvent.contentOffset.x / (screenWidth * 0.85));
                setBannerIndex(index);
              }}
            >
              {bannerData.map((banner) => (
                <View 
                  key={banner.id} 
                  style={[
                    styles.bannerCard,
                    { width: screenWidth * 0.85 }
                  ]}
                >
                  <View style={[styles.bannerGradient, { backgroundColor: banner.bgGradient[0] }]}>
                    <View style={styles.bannerContent}>
                      <Text style={styles.bannerEmoji}>{banner.image}</Text>
                      <Text style={[styles.bannerTitle, { color: banner.accentColor }]}>{banner.title}</Text>
                      <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>
                      <TouchableOpacity 
                        style={[styles.bannerButton, { backgroundColor: banner.accentColor }]}
                        onPress={() => router.push(getAuthRoute() as any)}
                      >
                        <Text style={styles.bannerButtonText}>{banner.buttonText}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* Pagination */}
            <View style={styles.pagination}>
              {bannerData.map((_, i) => (
                <View 
                  key={i} 
                  style={[
                    styles.dot, 
                    i === bannerIndex && styles.dotActive
                  ]} 
                />
              ))}
            </View>
          </View>

          {/* Enhanced Features Section - Column Layout */}
          <View style={styles.featuresSection}>
            <Text style={styles.sectionTitle}>Why Choose HaloDoc?</Text>
            <Text style={styles.sectionSubtitle}>
              Comprehensive healthcare solutions designed for your convenience
            </Text>
            
            <View style={styles.featuresColumn}>
              {features.map((feature, index) => (
                <View 
                  key={feature.id} 
                  style={[
                    styles.featureCard,
                    { borderLeftColor: feature.color }
                  ]}
                >
                  <View style={styles.featureHeader}>
                    <View style={[styles.featureIconContainer, { backgroundColor: feature.color + '15' }]}>
                      <Text style={styles.featureIcon}>{feature.icon}</Text>
                    </View>
                    <View style={styles.featureTitleContainer}>
                      <Text style={styles.featureTitle}>{feature.title}</Text>
                      <View style={[styles.featureBadge, { backgroundColor: feature.color }]}>
                        <Text style={styles.featureBadgeText}>FEATURED</Text>
                      </View>
                    </View>
                  </View>
                  
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                  
                  <View style={styles.benefitsContainer}>
                    <Text style={styles.benefitsTitle}>Key Benefits:</Text>
                    <View style={styles.benefitsList}>
                      {feature.benefits.map((benefit, idx) => (
                        <View key={idx} style={styles.benefitItem}>
                          <Text style={[styles.benefitCheck, { color: feature.color }]}>✓</Text>
                          <Text style={styles.benefitText}>{benefit}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Specialties Section - Enhanced */}
          <View style={styles.specialtiesSection}>
            <Text style={styles.sectionTitle}>Medical Specialties</Text>
            <Text style={styles.sectionSubtitle}>Expert doctors across all specializations</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.specialtiesContainer}>
                {specialties.map((specialty, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={[
                      styles.specialtyCard,
                      { borderColor: specialty.color }
                    ]}
                    onPress={() => router.push(getAuthRoute() as any)}
                  >
                    <View style={[styles.specialtyIconContainer, { backgroundColor: specialty.color + '15' }]}>
                      <Text style={styles.specialtyIcon}>{specialty.icon}</Text>
                    </View>
                    <Text style={styles.specialtyName}>{specialty.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* CTA Section - Enhanced */}
          <View style={styles.ctaSection}>
            <View style={styles.ctaContent}>
              <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
              <Text style={styles.ctaSubtitle}>
                Join millions trusting HaloDoc for their healthcare needs
              </Text>
              <View style={styles.ctaButtons}>
                <TouchableOpacity 
                  style={styles.ctaPrimaryButton}
                  onPress={() => router.push(getAuthRoute() as any)}
                >
                  <Text style={styles.ctaPrimaryButtonText}>Login to Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.ctaSecondaryButton}
                  onPress={() => router.push(getRegisterRoute() as any)}
                >
                  <Text style={styles.ctaSecondaryButtonText}>Create Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 HaloDoc. All rights reserved.</Text>
          <Text style={styles.footerSubtext}>Your health, our priority</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FBFD',
  },
  header: {
    backgroundColor: '#05668D',
    paddingHorizontal: 20,
    paddingVertical: 18,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoImage: {
    height: 42,
    width: 42,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF20',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  tagline: {
    fontSize: 11,
    color: '#B8E1ED',
    marginTop: 2,
    letterSpacing: 0.3,
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  registerBtn: {
    backgroundColor: '#00A896',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 2,
  },
  loginBtn: {
    backgroundColor: '#028090',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 2,
  },
  headerBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  scrollContainer: {
    flex: 1,
  },
  contentWrapper: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  servicesContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 25,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  servicesGrid: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    minWidth: '100%',
  },
  serviceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
    alignItems: 'center',
    minWidth: 100,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  serviceIcon: {
    fontSize: 36,
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 3,
  },
  serviceSubtitle: {
    fontSize: 11,
    textAlign: 'center',
    color: '#6B7280',
  },
  activeText: {
    color: '#FFFFFF',
  },
  activeIndicator: {
    width: 24,
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    marginTop: 8,
  },
  quickActionWrapper: {
    marginVertical: 25,
  },
  quickAction: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    borderWidth: 1,
    borderColor: '#00A89620',
  },
  quickActionContent: {
    flex: 1,
  },
  quickActionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#05668D',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  quickActionButton: {
    backgroundColor: '#00A896',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
    elevation: 2,
  },
  quickActionButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  bannerWrapper: {
    marginVertical: 20,
  },
  bannerContainer: {
    height: 320,
    borderRadius: 18,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
    width: '114%',
    alignSelf: 'center',
  },
  bannerContentContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100%',
 
  },
  bannerCard: {
    marginHorizontal: 10,
    borderRadius: 24,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  bannerGradient: {
    height: '100%',
    padding: 30,
    justifyContent: 'center',
  },
  bannerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerEmoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  bannerSubtitle: {
    fontSize: 15,
    color: '#4B5563',
    marginBottom: 24,
    lineHeight: 22,
    textAlign: 'center',
  },
  bannerButton: {
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 30,
    elevation: 3,
  },
  bannerButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: '#00A896',
    width: 24,
  },
  featuresSection: {
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#05668D',
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 35,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  featuresColumn: {
    paddingHorizontal: 20,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 28,
    marginBottom: 24,
    borderLeftWidth: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  featureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureIcon: {
    fontSize: 32,
  },
  featureTitleContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  featureBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  featureBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  featureDescription: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 20,
  },
  benefitsContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  benefitsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  benefitsList: {
    gap: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  benefitCheck: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: '700',
  },
  benefitText: {
    fontSize: 14,
    color: '#4B5563',
    flex: 1,
  },
  specialtiesSection: {
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginVertical: 20,
  },
  specialtiesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15,
    minWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  specialtyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    minWidth: 120,
    elevation: 3,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  specialtyIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  specialtyIcon: {
    fontSize: 28,
  },
  specialtyName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  ctaSection: {
    backgroundColor: '#05668D',
    borderRadius: 24,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginVertical: 30,
    elevation: 6,
  },
  ctaContent: {
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 17,
    color: '#B8E1ED',
    marginBottom: 35,
    textAlign: 'center',
    lineHeight: 24,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  ctaPrimaryButton: {
    backgroundColor: '#00A896',
    paddingHorizontal: 35,
    paddingVertical: 16,
    borderRadius: 32,
    elevation: 3,
  },
  ctaPrimaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  ctaSecondaryButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 35,
    paddingVertical: 16,
    borderRadius: 32,
    elevation: 3,
  },
  ctaSecondaryButtonText: {
    color: '#05668D',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  footer: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 35,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 15,
    color: '#4B5563',
    marginBottom: 6,
  },
  footerSubtext: {
    fontSize: 13,
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
});

export default HaloDocLanding;