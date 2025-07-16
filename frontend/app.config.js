module.exports = {
  expo: {
    name: 'HaloDoc',
    slug: 'HaloDoc',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'HaloDoc',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.HaloDoc.kliinic',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.HaloDoc.kliinic',
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-build-properties',
        {
          web: {
            // Enable support for WebRTC and media devices
            // This is needed for Agora Web SDK
            devtool: 'source-map',
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  },
}; 