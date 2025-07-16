import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showTagline?: boolean;
}

const Logo = ({ size = "medium", showTagline = false }: LogoProps) => {
  // Size mappings
  const sizeMap = {
    small: {
      containerSize: 50,
      iconSize: 30,
      titleSize: 18,
      taglineSize: 12,
      marginBottom: 8,
    },
    medium: {
      containerSize: 70,
      iconSize: 40,
      titleSize: 24,
      taglineSize: 14,
      marginBottom: 16,
    },
    large: {
      containerSize: 90,
      iconSize: 50,
      titleSize: 32,
      taglineSize: 16,
      marginBottom: 24,
    },
  };

  const { containerSize, iconSize, titleSize, taglineSize, marginBottom } = sizeMap[size];

  return (
    <View style={{ alignItems: 'center', marginBottom }}>
      {/* Logo Container */}
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 12
      }}>
        {/* Medical Cross Icon */}
        <View style={{
          backgroundColor: '#4F46E5', // Purple/Blue color
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}>
          {/* Custom Medical Cross */}
          <View style={{
            width: iconSize * 0.8,
            height: iconSize * 0.8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {/* Vertical bar of cross */}
            <View style={{
              position: 'absolute',
              width: iconSize * 0.15,
              height: iconSize * 0.6,
              backgroundColor: 'white',
              borderRadius: 2,
            }} />
            {/* Horizontal bar of cross */}
            <View style={{
              position: 'absolute',
              width: iconSize * 0.6,
              height: iconSize * 0.15,
              backgroundColor: 'white',
              borderRadius: 2,
            }} />
          </View>
        </View>

        {/* HALO Text */}
        <Text style={{
          fontSize: titleSize,
          fontWeight: 'bold',
          color: '#1F2937', // Dark gray
          letterSpacing: 1,
        }}>
          HALO DOC
        </Text>

        {/* Decorative Elements */}
        <View style={{
          marginLeft: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={{
            width: 20,
            height: 20,
            backgroundColor: '#F59E0B', // Yellow/Orange
            borderRadius: 4,
            marginRight: 4,
          }} />
          <View style={{
            width: 16,
            height: 16,
            backgroundColor: '#10B981', // Green
            borderRadius: 8,
          }} />
        </View>
      </View>

      {/* Tagline */}
      {showTagline && (
        <Text style={{
          fontSize: taglineSize,
          color: '#6B7280', // Light gray
          textAlign: 'center',
          fontWeight: '500',
        }}>
          Healthcare at your fingertips
        </Text>
      )}
    </View>
  );
};

export default Logo;