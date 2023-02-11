import {NativeBaseProvider} from 'native-base';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Macro from './components/Macro';
import GetIpScreen from './components/GetIpScreen';

const App = () => {
  const [ip, setIp] = useState();

  if (!ip) {
    return (
      <NativeBaseProvider>
        <GetIpScreen />
      </NativeBaseProvider>
    );
  } else {
    return (
      <ScrollView style={styles.main}>
        <Macro
          color="blue"
          route="http://192.168.143.147:8080"
          text={'Open Browser'}
        />
      </ScrollView>
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
