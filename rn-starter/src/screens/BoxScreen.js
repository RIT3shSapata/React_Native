import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxOne} />
      <View style={styles.boxTwo} />
      <View style={styles.boxThree} />
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxOne: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  boxTwo: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    top: 100,
  },
  boxThree: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});
