import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Stylesheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Header, Category} from '../../components';
import {useNavigation} from '@react-navigation/native';
import wildfire from '../../assets/wildfire.jpeg';
import storms from '../../assets/storms.jpeg';
import volcanoes from '../../assets/volcanoes.jpeg';
import ice from '../../assets/iceberg.jpeg';
import {gql, useQuery} from '@apollo/client';

export const GET_EONET = gql`
  query EonetData {
    events {
      id
      title
      link
      geometry {
        date
        type
        coordinates
      }
      sources {
        id
        url
      }
      categories {
        id
        title
      }
    }

    volcanoes {
      id
      title
      link
      geometry {
        date
        type
        coordinates
      }
      sources {
        id
        url
      }
      categories {
        id
        title
      }
    }

    wildfires {
      id
      title
      link
      geometry {
        date
        type
        coordinates
      }
      sources {
        id
        url
      }
      categories {
        id
        title
      }
    }

    severeStorms {
      id
      title
      link
      geometry {
        date
        type
        coordinates
      }
      sources {
        id
        url
      }
      categories {
        id
        title
      }
    }

    seaLakeIce {
      id
      title
      link
      geometry {
        date
        type
        coordinates
      }
      sources {
        id
        url
      }
      categories {
        id
        title
      }
    }
  }
`;

const Home: React.FC<{}> = () => {
  const navigation = useNavigation();
  const {data, loading, error} = useQuery(GET_EONET);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView style={{backgroundColor: 'white'}} stickyHeaderIndices={[0]}>
      <Header />
      <Category
        onPress={() =>
          navigation.navigate('Wildfires', {
            data: data.wildfires,
            loading: loading,
          })
        }
        source={wildfire}
        children="Track global wild fires"
      />
      <Category
        onPress={() =>
          navigation.navigate('Severe Storms', {
            data: data.severeStorms,
            loading: loading,
          })
        }
        source={storms}
        children="Track severe global storms"
      />
      <Category
        onPress={() =>
          navigation.navigate('Volcanoes', {
            data: data.volcanoes,
            loading: loading,
          })
        }
        source={volcanoes}
        children="Track volcanoes globally"
      />
      <Category
        onPress={() =>
          navigation.navigate('Sea Lake Ice', {
            data: data.seaLakeIce,
            loading: loading,
          })
        }
        source={ice}
        children="Track Sea Lake and Ice"
      />
    </ScrollView>
  );
};

export default Home;
