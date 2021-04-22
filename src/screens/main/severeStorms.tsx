import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import storm from '../../assets/storm.png';
import {Map} from '../../components';

export default function SevereStorms({route}) {
  const navigation = useNavigation();
  const {data, loading} = route.params;
  console.log(data);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <MapView
      clusterColor={'#2D374F'}
      mapType="satellite"
      initialRegion={{
        latitude: -18.766947,
        longitude: 46.869107,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }}
      style={styles.map}>
      <Map source={storm} data={data} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 3,
  },
});
