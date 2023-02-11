import {NativeBaseProvider, Slider} from 'native-base';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Macro from './components/MacroBlock';
import GetIpScreen from './components/GetIpScreen';
import VolumeSlider from './components/VolumeSlider';
import BrightnessSlider from './components/BrightnessSlider';

import chromePNG from './assets/chrome.png';
import youtubePNG from './assets/youtube.png';
import wikipediaPNG from './assets/wikipedia.png';

const App = () => {
  const [ip, setIp] = useState();

  if (!ip) {
    return (
      <NativeBaseProvider>
        <GetIpScreen setIp={setIp} />
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider>
        <ScrollView style={styles.main}>
          <Macro
            icon={chromePNG}
            color="cyan"
            route={`http://${ip}/api/browser`}
            text={'Open Browser'}
          />
          <VolumeSlider ip={ip} />
          <BrightnessSlider ip={ip} />
          <Macro
            icon={youtubePNG}
            color="red"
            route={`http://${ip}/api/browser`}
            text={'Open Youtube Music'}
          />
          <Macro
            icon={wikipediaPNG}
            color="grey"
            route={`http://${ip}/api/wikipedia`}
            text={'Open Encyclopedia'}
          />
        </ScrollView>
      </NativeBaseProvider>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    padding: 10,
  },
});

export default App;
