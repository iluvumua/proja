import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import InvoiceDetailScreen from './screens/InvoiceDetailScreen'; // Example screen
import UploadScreen from './screens/UploadScreen'; // Example screen

export type RootStackParamList = {
  Home: undefined;
  Upload: undefined;
  InvoiceDetail: {invoiceId: string}; // Example param
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#E3F2FD', // Light Blue - Primary Color
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'InvoiceFlow'}}
          />
           <Stack.Screen
            name="Upload"
            component={UploadScreen}
            options={{title: 'Upload Invoice'}}
          />
           <Stack.Screen
            name="InvoiceDetail"
            component={InvoiceDetailScreen}
            options={{title: 'Invoice Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD', // Light Blue
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000', // Black text for contrast
  },
});

export default App;
