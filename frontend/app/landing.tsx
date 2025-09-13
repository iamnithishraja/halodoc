import React from 'react';
import { View, StyleSheet } from 'react-native';
import PlatformWebView from '../components/PlatformWebView';

const LandingScreen = () => {
  

  return (
    <View style={styles.container}>
      <PlatformWebView
        source={{ uri: 'https://doctor-easy-connect-44.lovable.app' }}
        javaScriptEnabled
        domStorageEnabled
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default LandingScreen;