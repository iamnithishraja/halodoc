import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Services = () => {
  const services = [
    {
      title: "Online Consultations",
      description: "Connect with certified doctors from the comfort of your home via video call or chat.",
      icon: "video",
      image: require('../../assets/images/online.jpeg'),
      features: ["24/7 Availability", "Instant Consultations", "Prescription Online", "Follow-up Support"]
    },
    {
      title: "In-Person Visits",
      description: "Book appointments with doctors at our partner clinics and hospitals nationwide.",
      icon: "account-group",
      image: require('../../assets/images/online-consultation.jpg'),
      features: ["Verified Clinics", "Easy Booking", "No Wait Times", "Insurance Support"]
    },
    {
      title: "Lab Tests",
      description: "Comprehensive lab testing with home sample collection and lab visits available.",
      icon: "test-tube",
      image: require('../../assets/images/lab-tests.jpg'),
      features: ["Home Collection", "Lab Visits", "Digital Reports", "Expert Analysis"]
    },
    {
      title: "Medicine Delivery",
      description: "Get your prescribed medicines delivered to your doorstep with our fast delivery service.",
      icon: "package-variant",
      image: require('../../assets/images/medicine-delivery.jpg'),
      features: ["Same Day Delivery", "Genuine Medicines", "Prescription Upload", "Track Orders"]
    }
  ];

  return (
    <View style={styles.servicesContainer}>
      <View style={styles.servicesContent}>
        <View style={styles.servicesHeader}>
          <Text style={styles.servicesTitle}>
            Complete Healthcare Solutions
          </Text>
          <Text style={styles.servicesSubtitle}>
            Everything you need for your health and wellness, all in one platform
          </Text>
        </View>

        <View style={styles.servicesGrid}>
          {services.map((service, index) => (
            <View key={index} style={styles.serviceCard}>
              <View style={styles.serviceContent}>
                {service.image ? (
                  <View style={styles.imageContainer}>
                    <Image 
                      source={service.image}
                      style={styles.serviceImage}
                      resizeMode="cover"
                    />
                    <View style={styles.imageIcon}>
                      <MaterialCommunityIcons name={service.icon as any} size={24} color="white" />
                    </View>
                  </View>
                ) : (
                  <View style={styles.placeholderImage}>
                    <View style={styles.placeholderIcon}>
                      <MaterialCommunityIcons name={service.icon as any} size={48} color="hsl(202, 95%, 52%)" />
                    </View>
                  </View>
                )}
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>
                  {service.description}
                </Text>
                <View style={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <View key={idx} style={styles.featureItem}>
                      <View style={styles.featureDot}></View>
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity style={styles.learnMoreButton}>
                  <Text style={styles.learnMoreText}>Learn More</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  servicesContainer: {
    paddingVertical: 80,
    backgroundColor: 'hsl(0, 0%, 100%)',
  },
  servicesContent: {
    maxWidth: 1400,
    marginHorizontal: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  servicesHeader: {
    alignItems: 'center',
    marginBottom: 64,
  },
  servicesTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'hsl(210, 17%, 7%)',
    marginBottom: 16,
    textAlign: 'center',
  },
  servicesSubtitle: {
    fontSize: 20,
    color: 'hsl(215.4, 16.3%, 46.9%)',
    textAlign: 'center',
    maxWidth: 800,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
    justifyContent: 'center',
  },
  serviceCard: {
    width: 280,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'hsl(214.3, 31.8%, 91.4%)',
    shadowColor: 'hsl(202, 95%, 52%)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  serviceContent: {
    padding: 24,
    gap: 16,
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8,
  },
  serviceImage: {
    width: '100%',
    height: 192,
    borderRadius: 8,
  },
  imageIcon: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(202, 95%, 52%, 0.9)',
    padding: 12,
    borderRadius: 8,
  },
  placeholderImage: {
    width: '100%',
    height: 192,
    backgroundColor: 'hsl(196, 100%, 97%)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderIcon: {
    backgroundColor: 'rgba(202, 95%, 52%, 0.1)',
    padding: 24,
    borderRadius: 16,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'hsl(210, 17%, 7%)',
  },
  serviceDescription: {
    color: 'hsl(215.4, 16.3%, 46.9%)',
    lineHeight: 24,
  },
  featuresList: {
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureDot: {
    width: 6,
    height: 6,
    backgroundColor: 'hsl(202, 95%, 52%)',
    borderRadius: 3,
    marginRight: 12,
  },
  featureText: {
    fontSize: 14,
    color: 'hsl(215.4, 16.3%, 46.9%)',
  },
  learnMoreButton: {
    backgroundColor: 'hsl(202, 95%, 52%)',
    paddingVertical: 14,
    minHeight: 44,
    borderRadius: 10,
    alignItems: 'center',
  },
  learnMoreText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default Services;
