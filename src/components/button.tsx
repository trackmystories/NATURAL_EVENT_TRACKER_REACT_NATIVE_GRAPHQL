import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface buttonProps {
  onPress?: () => void;
  text: string;
}

const Button: React.FC<buttonProps> = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});
