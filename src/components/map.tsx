import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import * as theme from '../constants/theme';

interface mainHeaderProps {
  route?: any;
  source?: string | any;
  data?: any;
}

const Map: React.FC<mainHeaderProps> = ({route, source, data}) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: item.geometry[0].coordinates[1],
              longitude: item.geometry[0].coordinates[0],
            }}>
            <View style={[styles.marker, styles.shadow]}>
              <Image style={styles.image} source={source} />
            </View>
          </Marker>
        );
      })}
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  marker: {
    flexDirection: 'row',
    borderRadius: theme.SIZES.base * 4,
    paddingHorizontal: theme.SIZES.base * 1,
    borderColor: theme.COLORS.white,
  },
  shadow: {
    shadowColor: theme.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
