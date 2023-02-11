import {
  NativeBaseProvider,
  AlertDialog,
  Input,
  Button,
  extendTheme,
} from 'native-base';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Macro from './components/MacroBlock';
import GetIpScreen from './components/GetIpScreen';
import VolumeSlider from './components/VolumeSlider';
import BrightnessSlider from './components/BrightnessSlider';
import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';

import chromePNG from './assets/chrome.png';
import youtubePNG from './assets/youtube.png';
import wikipediaPNG from './assets/wikipedia.png';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({config});

const App = () => {
  const [ip, setIp] = useState();
  const [wikiPrompt, setWikiPrompt] = useState(false);
  const [wikiSearch, setWikiSearch] = useState('');
  const [ytmusicPrompt, setYtmusicPrompt] = useState(false);
  const [ytmusicSearch, setYtmusicSearch] = useState('');

  if (ip) {
    return (
      <NativeBaseProvider>
        <GetIpScreen setIp={setIp} />
      </NativeBaseProvider>
    );
  } else {
    return (
      <NavigationContainer>
        <NativeBaseProvider theme={customTheme}>
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
              onClick={() => {
                setYtmusicPrompt(true);
              }}
              text={'Open Youtube Music'}
            />
            <Macro
              icon={wikipediaPNG}
              color="grey"
              onClick={() => {
                setWikiPrompt(true);
              }}
              text={'Open Encyclopedia'}
            />
            <AlertDialog
              isOpen={wikiPrompt}
              onClose={() => {
                setWikiPrompt(false);
              }}>
              <AlertDialog.Content style={{width: '90%'}}>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Search:</AlertDialog.Header>
                <AlertDialog.Body>
                  <Input
                    size="2xl"
                    placeholder="Search something!"
                    variant="outline"
                    type="text"
                    value={wikiSearch}
                    onChange={e => {
                      setWikiSearch(e.nativeEvent.text);
                    }}
                    marginY={6}
                  />
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button.Group>
                    <Button
                      width={'100%'}
                      onPress={() => {
                        axios
                          .get(`http://${ip}/api/wikipedia?q=${wikiSearch}`)
                          .then(res => {
                            console.log(res.data);
                            setWikiPrompt(false);
                            setWikiSearch('');
                          })
                          .catch(err => {
                            console.log(err);
                          });
                      }}>
                      Search
                    </Button>
                  </Button.Group>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
            <AlertDialog
              isOpen={ytmusicPrompt}
              onClose={() => {
                setYtmusicPrompt(false);
              }}>
              <AlertDialog.Content style={{width: '90%'}}>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Search:</AlertDialog.Header>
                <AlertDialog.Body>
                  <Input
                    size="2xl"
                    placeholder="Search for song!"
                    variant="outline"
                    type="text"
                    value={ytmusicSearch}
                    onChange={e => {
                      setYtmusicSearch(e.nativeEvent.text);
                    }}
                    marginY={6}
                  />
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button.Group>
                    <Button
                      width={'100%'}
                      onPress={() => {
                        axios
                          .get(
                            `http://${ip}/api/music/play_song?q=${ytmusicSearch}`,
                          )
                          .then(res => {
                            console.log(res.data);
                            setYtmusicPrompt(false);
                            setYtmusicSearch('');
                          })
                          .catch(err => {
                            console.log(err);
                          });
                      }}>
                      Search
                    </Button>
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
