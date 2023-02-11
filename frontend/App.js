import {NativeBaseProvider, AlertDialog, Input, Button} from 'native-base';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Macro from './components/MacroBlock';
import GetIpScreen from './components/GetIpScreen';
import VolumeSlider from './components/VolumeSlider';
import BrightnessSlider from './components/BrightnessSlider';
import {NavigationContainer} from '@react-navigation/native';

import chromePNG from './assets/chrome.png';
import youtubePNG from './assets/youtube.png';
import wikipediaPNG from './assets/wikipedia.png';

const App = () => {
  const [ip, setIp] = useState();
  const [wikiPrompt, setWikiPrompt] = useState(false);

  if (!ip) {
    return (
      <NativeBaseProvider>
        <GetIpScreen setIp={setIp} />
      </NativeBaseProvider>
    );
  } else {
    return (
      <NavigationContainer>
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
              // onClick={() => {
              //   setWikiPrompt(true);
              // }}
              text={'Open Encyclopedia'}
            />
            <AlertDialog
              isOpen={wikiPrompt}
              onClose={() => {
                setWikiPrompt(false);
              }}>
              <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Search:</AlertDialog.Header>
                <AlertDialog.Body>
                  <Input
                    size="2xl"
                    placeholder="Enter Code"
                    variant="outline"
                    type="text"
                    color={'white'}
                    onChange={e => {
                      setText(e.nativeEvent.text);
                    }}
                    marginY={6}
                  />
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button.Group space={2}>
                    <Button colorScheme="danger">Delete</Button>
                  </Button.Group>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          </ScrollView>
        </NativeBaseProvider>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: '#222222',
    padding: 10,
  },
});

export default App;
