import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const HowItWorks = () => {
  const router = useRouter();

  const steps = [
    {
      step: "01",
      title: "Book Appointment",
      description: "Choose your preferred consultation type and select from available time slots",
      icon: "calendar",
      color: "hsl(202, 95%, 52%)"
    },
    {
      step: "02", 
      title: "Consult Doctor",
      description: "Connect with certified healthcare professionals via video call or in-person visit",
      icon: "message-text",
      color: "hsl(142, 76%, 36%)"
    },
    {
      step: "03",
      title: "Get Prescription",
      description: "Receive digital prescriptions and recommendations for lab tests if needed",
      icon: "pill",
      color: "hsl(202, 95%, 52%)"
    },
    {
      step: "04",
      title: "Follow Treatment",
      description: "Order medicines, book lab tests, and track your health progress",
      icon: "check-circle",
      color: "hsl(142, 76%, 36%)"
    }
  ];

  const handleStartJourney = () => {
    router.push('/(auth)/register' as any);
  };

  return (
    <View style={styles.howItWorksContainer}>
      <View style={styles.howItWorksContent}>
        <View style={styles.howItWorksHeader}>
          <Text style={styles.howItWorksTitle}>
            How It Works
          </Text>
          <Text style={styles.howItWorksSubtitle}>
            Get started with healthcare in just 4 simple steps
          </Text>
        </View>

        <View style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepCard}>
              <View style={styles.stepContent}>
                <View style={styles.stepIconContainer}>
                  <View style={styles.stepIcon}>
                    <MaterialCommunityIcons 
                      name={step.icon as any} 
                      size={32} 
                      color={step.color} 
                    />
                  </View>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>{step.step}</Text>
                  </View>
                </View>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.ctaContainer}>
          <TouchableOpacity
            onPress={handleStartJourney}
            style={styles.ctaButton}
          >
            <Text style={styles.ctaButtonText}>Start Your Healthcare Journey</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  howItWorksContainer: {
    paddingVertical: 80,
    backgroundColor: 'hsl(196, 100%, 97%)',
  },
  howItWorksContent: {
    maxWidth: 1400,
    marginHorizontal: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  howItWorksHeader: {
    alignItems: 'center',
    marginBottom: 64,
  },
  howItWorksTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'hsl(210, 17%, 7%)',
    marginBottom: 16,
    textAlign: 'center',
  },
  howItWorksSubtitle: {
    fontSize: 20,
    color: 'hsl(215.4, 16.3%, 46.9%)',
    textAlign: 'center',
    maxWidth: 600,
  },
  stepsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
    marginBottom: 48,
    justifyContent: 'center',
  },
  stepCard: {
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
    transitionDuration: '200ms' as any,
  },
  stepContent: {
    padding: 32,
    alignItems: 'center',
    gap: 16,
  },
  stepIconContainer: {
    position: 'relative',
  },
  stepIcon: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(202, 95%, 52%, 0.1)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  stepNumber: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 32,
    height: 32,
    backgroundColor: 'hsl(202, 95%, 52%)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'hsl(210, 17%, 7%)',
    textAlign: 'center',
  },
  stepDescription: {
    color: 'hsl(215.4, 16.3%, 46.9%)',
    lineHeight: 24,
    textAlign: 'center',
  },
  ctaContainer: {
    alignItems: 'center',
  },
  ctaButton: {
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
  ctaButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default HowItWorks;
