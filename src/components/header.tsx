import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import nasa from '../assets/Eonet.png';

interface mainHeaderProps {
  container?: string | any;
  image?: string | any;
  text?: string;
  children?: any;
}

const Header: React.FC<mainHeaderProps> = ({
  image,
  children = 'The Earth Observatory Natural Event Tracker ',
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={nasa} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 40,
    alignItems: 'center',
  },
  image: {
    width: '60%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 10,
  },
});
