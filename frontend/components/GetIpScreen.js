import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from 'native-base';
import axios from 'axios';

import logoPNG from '../assets/logo.png';

const GetIpScreen = ({setIp}) => {
  const [text, setText] = useState('');

  const onSubmitHandler = () => {
    axios
      .get(`http://${text}/api/verify`)
      .then(res => {
        if (res.data == 'Success') {
          setIp(text);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.beforeIp}>
      <Image
        source={logoPNG}
        style={{width: 300, height: 93, marginBottom: 70, marginTop: -40}}
      />
      <Text style={styles.beforeIpText}>
        Enter the code you see on your laptop!
      </Text>
      <Input
        size="2xl"
        placeholder="Enter Code"
        variant="outline"
        type="text"
        color={'white'}
        value={text}
        onChange={e => {
          setText(e.nativeEvent.text);
        }}
        marginY={6}
      />
      <Button width={'100%'} onPress={onSubmitHandler}>
        Connect
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  beforeIp: {
    height: '100%',
    width: '100%',
    backgroundColor: '#222222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  beforeIpText: {
    color: 'white',
    fontSize: 21,
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default GetIpScreen;
