import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import {LogBox} from 'react-native'; 
LogBox.ignoreAllLogs();//Ignore all log notifications

const MobileBrowser = () => {
  const [url, setUrl] = useState('');
  const [webPage, setWebPage] = useState('');

  const handleGoToUrl = () => {
    setWebPage(url);
  };

  return (
  
    <View style={{ flex: 1, marginTop:27 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#CCC', padding: 5, height:45, flex:1}}
          placeholder="Enter URL"
          value={url}
          onChangeText={text => setUrl(text)}
          autoCorrect={false}
          autoCapitalize='none'
          onSubmitEditing={handleGoToUrl}
          returnKeyType='send'
        />
        <TouchableOpacity onPress={handleGoToUrl}>
          <Text style={{width:60,height:45,backgroundColor:'#3498db', color:'white',textAlign: 'center',textAlignVertical:'center'}}>Go</Text>
        </TouchableOpacity>
      </View>
      {webPage ? (
        <WebView source={{ uri: webPage }} />
      ) : null}
    </View>

  );
};

export default MobileBrowser;
