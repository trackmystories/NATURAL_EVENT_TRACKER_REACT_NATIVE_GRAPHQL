import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface InputProps {
  text?: string;
  onChangeText?(): void;
}

const Input: React.FC<InputProps> = ({text, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.text}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '2%',
    width: '100%',
  },
  input: {
    borderColor: 'black',
    marginTop: '2%',
    marginBottom: '2%',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
  },
});
