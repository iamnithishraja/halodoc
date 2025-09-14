import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type HeaderProps = {
  onPressServices?: () => void;
  onPressHowItWorks?: () => void;
  onPressAbout?: () => void;
  onPressContact?: () => void;
};

const Header = ({ onPressServices, onPressHowItWorks, onPressAbout, onPressContact }: HeaderProps) => {
  const { width } = useWindowDimensions();
  const router = useRouter();

  const handleLogin = () => {
    router.push('/(auth)/login' as any);
  };

  const handleRegister = () => {
    router.push('/(auth)/register' as any);
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <MaterialCommunityIcons name="heart-outline" size={22} color="white" />
            </View>
            <Text style={styles.logoText}>halodoc.live</Text>
          </View>
          
          {/* Navigation - Hidden on mobile */}
          {width > 1024 && (
            <View style={styles.navigation}>
              <TouchableOpacity style={styles.navItem} onPress={onPressServices}>
                <Text style={styles.navText}>Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem} onPress={onPressHowItWorks}>
                <Text style={styles.navText}>How It Works</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem} onPress={onPressAbout}>
                <Text style={styles.navText}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem} onPress={onPressContact}>
                <Text style={styles.navText}>Contact</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Auth Buttons */}
          <View style={styles.authButtons}>
            {width > 1024 && (
              <>
                <TouchableOpacity
                  onPress={handleLogin}
                  style={styles.loginButton}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleRegister}
                  style={styles.registerButton}
                >
                  <Text style={styles.registerButtonText}>Get Started</Text>
                </TouchableOpacity>
              </>
            )}
            {width <= 1024 && (
              <TouchableOpacity style={styles.mobileMenuButton}>
                <MaterialCommunityIcons name="menu" size={20} color="#6B7280" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'hsl(214.3, 31.8%, 91.4%)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
  container: {
    maxWidth: 1400,
    width: '100%',
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  navItem: {
    marginHorizontal: 16,
  },
  navText: {
    color: 'hsl(210, 17%, 7%)',
    fontSize: 16,
  },
  authButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    borderWidth: 2,
    borderColor: 'hsl(202, 95%, 52%)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: 44,
    borderRadius: 8,
    marginRight: 12,
  },
  loginButtonText: {
    color: 'hsl(202, 95%, 52%)',
    fontWeight: '600',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: 'hsl(202, 95%, 52%)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: 44,
    borderRadius: 8,
    marginRight: 8,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  mobileMenuButton: {
    borderWidth: 1,
    borderColor: 'hsl(214.3, 31.8%, 91.4%)',
    padding: 8,
    borderRadius: 6,
  },
});

export default Header;
