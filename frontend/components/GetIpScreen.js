import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from 'native-base';
import axios from 'axios';

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
        marginY={4}
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
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  beforeIpText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default GetIpScreen;
