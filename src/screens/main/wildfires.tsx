import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import wildfire from '../../assets/wildfire.png';
import MapView from 'react-native-maps';
import {Map} from '../../components';

export default function Wildfires({route}) {
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
        latitude: 18.43361,
        longitude: -33.95692,
      }}
      style={styles.map}>
      <Map source={wildfire} data={data} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 3,
  },
});
