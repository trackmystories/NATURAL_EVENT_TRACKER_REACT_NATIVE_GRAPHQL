import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

interface categoryProps {
  onPress?: any;
  source: string;
  image?: string | any;
  container?: string | any;
  children?: any;
}

const Category: React.FC<categoryProps> = ({
  onPress,
  source,
  image,
  container,
  children,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={source} />
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 0.2,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderColor: 'orange',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
