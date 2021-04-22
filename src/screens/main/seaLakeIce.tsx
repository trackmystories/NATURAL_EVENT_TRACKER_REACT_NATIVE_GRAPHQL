import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import iceberg from '../../assets/iceberg.png';
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
        latitude: 49.6,
        longitude: -10.2,
      }}
      style={styles.map}>
      <Map source={iceberg} data={data} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 3,
  },
});
