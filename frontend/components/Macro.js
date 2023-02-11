import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import axios from 'axios';

const Macro = ({color, text, route, width, height}) => {
  const onClickHandler = () => {
    console.log('going here');
    axios
      .get(route)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  };

  return (
    <TouchableHighlight onPress={onClickHandler}>
      <View
        style={{
          backgroundColor: color,
          width: width ? width : '50%',
          height: height ? height : null,
          aspectRatio: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '800',
            fontSize: 20,
            textAlign: 'center',
          }}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Macro;
