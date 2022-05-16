import React, {useEffect, useRef} from 'react';
import {BackHandler} from 'react-native';
import WebView from 'react-native-webview';

const WebViewWrapper = () => {
  const webview = useRef();
  const onAndroidBackPress = () => {
    if (webview.current) {
      webview.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
    };
  }, []); // Never re-run this effect
  return <WebView source={{uri: 'https://stackoverflow.com'}} ref={webview} />;
};

export default WebViewWrapper;
