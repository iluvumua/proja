import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../App'; // Adjust path if needed

// Define the structure of the extracted data
interface ExtractedData {
  invoiceNumber: string;
  invoiceDate: string; // Consider using a Date object later
  amount: number;
  vendorDetails: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'InvoiceDetail'>;

const InvoiceDetailScreen = ({route, navigation}: Props) => {
  const {invoiceId} = route.params;
  const [invoiceData, setInvoiceData] = useState<ExtractedData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // TODO: Replace with actual API call to fetch data based on invoiceId
  useEffect(() => {
    // Simulate fetching data
    const fetchInvoiceData = async () => {
       setIsLoading(true);
       console.log(`Fetching data for invoice ID: ${invoiceId}`);
       // Replace with your actual API call
       await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
       // Simulated data - replace with API response
       const fetchedData: ExtractedData = {
         invoiceNumber: `INV-${invoiceId}-${Math.floor(Math.random() * 1000)}`,
         invoiceDate: new Date().toLocaleDateString(),
         amount: Math.random() * 500 + 50,
         vendorDetails: `Sample Vendor Ltd.\n123 Main St, Anytown`,
       };
       setInvoiceData(fetchedData);
       setIsLoading(false);
    };

    fetchInvoiceData();
  }, [invoiceId]);

  const handleInputChange = (field: keyof ExtractedData, value: string | number) => {
    if (invoiceData) {
        // Handle potential number conversion for 'amount'
        const updatedValue = field === 'amount' ? Number(value) || 0 : value;
        setInvoiceData({...invoiceData, [field]: updatedValue});
    }
  };

  const handleSaveChanges = () => {
    // TODO: Implement API call to save updated invoiceData
    console.log("Saving data:", invoiceData);
    setIsEditing(false);
    // Show confirmation feedback to the user (e.g., a toast message)
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#008080" />
        <Text>Loading Invoice Details...</Text>
      </View>
    );
  }

  if (!invoiceData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Failed to load invoice data.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Text style={styles.header}>Invoice Details</Text>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Invoice Number:</Text>
                <TextInput
                style={styles.input}
                value={invoiceData.invoiceNumber}
                onChangeText={(text) => handleInputChange('invoiceNumber', text)}
                editable={isEditing}
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Invoice Date:</Text>
                <TextInput
                style={styles.input}
                value={invoiceData.invoiceDate}
                onChangeText={(text) => handleInputChange('invoiceDate', text)}
                editable={isEditing}
                // Consider using a Date Picker component here for better UX
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Amount:</Text>
                <TextInput
                style={styles.input}
                value={String(invoiceData.amount)} // Convert number to string for TextInput
                onChangeText={(text) => handleInputChange('amount', text)}
                editable={isEditing}
                keyboardType="numeric"
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Vendor Details:</Text>
                <TextInput
                style={[styles.input, styles.multilineInput]} // Style for multiline
                value={invoiceData.vendorDetails}
                onChangeText={(text) => handleInputChange('vendorDetails', text)}
                editable={isEditing}
                multiline
                numberOfLines={4}
                />
            </View>

            <View style={styles.buttonContainer}>
                 <Button
                     title={isEditing ? "Save Changes" : "Edit"}
                     onPress={isEditing ? handleSaveChanges : handleEditToggle}
                     color="#008080" // Teal accent
                 />
                 {isEditing && (
                    <View style={{ marginTop: 10 }}>
                        <Button
                            title="Cancel"
                            onPress={() => setIsEditing(false)} // Add cancel functionality if needed
                            color="#6c757d" // Muted color for cancel
                        />
                    </View>
                 )}
            </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
      backgroundColor: '#FFFFFF', // White background for scroll area
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD', // Light blue background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8, // More rounded corners
    paddingHorizontal: 12, // Increased padding
    paddingVertical: 10, // Vertical padding
    fontSize: 16,
    backgroundColor: '#f8f9fa', // Slightly off-white background for input
    color: '#333', // Text color
    minHeight: 45, // Ensure consistent height
  },
  multilineInput: {
    minHeight: 100, // Taller for multiline input
    textAlignVertical: 'top', // Start text from the top
  },
  buttonContainer: {
    marginTop: 30,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  }
});

export default InvoiceDetailScreen;
