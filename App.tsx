import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Privacy from './client/auth/Privacy';
import {View, Text, AsyncStorage} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {HttpLink} from 'apollo-link-http';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  cache,
  link,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
