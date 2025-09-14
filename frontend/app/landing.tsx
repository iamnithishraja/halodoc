import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet, Platform, LayoutChangeEvent } from 'react-native';
import { Header, Hero, Services, HowItWorks, Footer } from '../components/landing';
  
const LandingScreen = () => {
  const scrollViewRef = React.useRef<ScrollView>(null);
  const servicesRef = React.useRef<View>(null as any);
  const howRef = React.useRef<View>(null as any);
  const aboutRef = React.useRef<View>(null as any);
  const contactRef = React.useRef<View>(null as any);

  const [positions, setPositions] = React.useState<{services?: number; how?: number; about?: number; contact?: number}>({});

  const onLayoutCapture = (key: 'services' | 'how' | 'about' | 'contact') => (e: LayoutChangeEvent) => {
    const { y } = e.nativeEvent.layout;
    setPositions(prev => ({ ...prev, [key]: y }));
  };

  const scrollToY = (y?: number) => {
    if (y === undefined) return;
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      window.scrollTo({ top: y + 64 /* account for top padding already applied */ - 64, behavior: 'smooth' });
    } else {
      scrollViewRef.current?.scrollTo({ y: Math.max(y - 64, 0), animated: true } as any);
    }
  };

  const scrollToSection = (id: string, y?: number) => {
    if (Platform.OS === 'web' && typeof document !== 'undefined') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => window.scrollBy(0, -64), 300);
        return;
      }
    }
    scrollToY(y);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Header 
        onPressServices={() => scrollToSection('services', positions.services)}
        onPressHowItWorks={() => scrollToSection('how', positions.how)}
        onPressAbout={() => scrollToSection('about', positions.about)}
        onPressContact={() => scrollToSection('contact', positions.contact)}
      />
      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
        scrollEventThrottle={16}
      >
        <Hero />
        <View ref={servicesRef as any} onLayout={onLayoutCapture('services')} nativeID="services">
          <Services />
        </View>
        <View ref={howRef as any} onLayout={onLayoutCapture('how')} nativeID="how">
          <HowItWorks />
        </View>
        <View ref={aboutRef as any} onLayout={onLayoutCapture('about')} nativeID="about">
          {/* Simple about spacer to scroll to */}
          <View style={{ height: 1 }} />
        </View>
        <View ref={contactRef as any} onLayout={onLayoutCapture('contact')} nativeID="contact">
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
    paddingTop: 64,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default LandingScreen;