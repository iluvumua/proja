import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../App'; // Adjust path if needed
import {Plus} from 'lucide-react-native'; // Use lucide-react-native

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to InvoiceFlow!</Text>
      <Text style={styles.subtitle}>
        Manage your invoices intelligently.
      </Text>

      {/* Button to navigate to Upload Screen */}
      <View style={styles.buttonContainer}>
        <Button
          title="Add Invoice"
          onPress={() => navigation.navigate('Upload')}
          color="#008080" // Teal - Accent color
        />
        {/* Example of using Lucide icon */}
        {/* <Plus color="#008080" size={24} style={styles.iconStyle} /> */}
      </View>

       {/* Placeholder for list of invoices */}
       <View style={styles.invoiceList}>
         <Text>Invoice list will appear here...</Text>
         {/* Example Navigation to Detail Screen */}
         <Button
            title="View Sample Invoice"
            onPress={() => navigation.navigate('InvoiceDetail', { invoiceId: '123' })}
            color="#6c757d" // Muted color example
          />
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the top
    paddingTop: 40, // Add some padding at the top
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF', // White background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Darker text
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666', // Gray text
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange button and icon horizontally if needed
    alignItems: 'center', // Vertically align items in the row
    marginBottom: 30,
    width: '80%', // Limit button width
    justifyContent: 'center', // Center button
  },
  invoiceList: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
   iconStyle: {
     marginLeft: 8, // Space between button text and icon if needed
   },
});

export default HomeScreen;
