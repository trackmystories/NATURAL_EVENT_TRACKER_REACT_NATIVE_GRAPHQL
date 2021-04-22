import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import wildfire from '../../assets/wildfire.png';
import MapView from 'react-native-maps';
import {Map} from '../../components';
import volcano from '../../assets/volcano.png';

export default function Volcanoes({route}) {
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
        latitudeDelta: 0,
        longitudeDelta: 0,
      }}
      style={styles.map}>
      <Map source={volcano} data={data} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 3,
  },
});
