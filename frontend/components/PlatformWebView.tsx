import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

// Web-specific implementation using iframe
const WebWebView = ({ source, style, onMessage, ...props }: any) => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const handleIframeMessage = React.useCallback((event: MessageEvent) => {
    // Handle messages from our iframe
    if (onMessage && event.data) {
      try {
        // Accept messages from the website domain or from our iframe
        if (event.source === iframeRef.current?.contentWindow || 
            event.origin === 'https://doctor-easy-connect-44.lovable.app' ||
            event.origin === 'https://lovable.app' ||
            event.origin === window.location.origin ||
            event.origin === '*') {
          onMessage({
            nativeEvent: {
              data: event.data
            }
          });
        }
      } catch (error) {
        console.warn('Error handling iframe message:', error);
      }
    }
  }, [onMessage]);

  React.useEffect(() => {
    if (Platform.OS === 'web') {
      window.addEventListener('message', handleIframeMessage);
      
      return () => {
        window.removeEventListener('message', handleIframeMessage);
      };
    }
  }, [handleIframeMessage]);


  if (Platform.OS === 'web') {
    return (
      <iframe
        ref={iframeRef}
        src={source.uri}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          ...style
        }}
        title="WebView"
        allow="camera; microphone; geolocation; autoplay"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-modals allow-top-navigation-by-user-activation"
      />
    );
  }

  return null;
};

// Native implementation using react-native-webview
const NativeWebView = ({ source, style, onMessage, ...props }: any) => {
  return (
    <WebView
      source={source}
      style={style}
      onMessage={onMessage}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      {...props}
    />
  );
};

// Platform-specific WebView component
const PlatformWebView = (props: any) => {
  if (Platform.OS === 'web') {
    return <WebWebView {...props} />;
  }
  
  return <NativeWebView {...props} />;
};

export default PlatformWebView;
