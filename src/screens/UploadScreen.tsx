import React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../App'; // Adjust path if needed
// Import necessary libraries for document picking or camera access
// e.g., import DocumentPicker from 'react-native-document-picker';
// e.g., import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

type Props = NativeStackScreenProps<RootStackParamList, 'Upload'>;

const UploadScreen = ({navigation}: Props) => {

  const handleUploadFromDevice = async () => {
    // Implementation for picking a document (PDF/Image) from the device
    // Use react-native-document-picker or react-native-image-picker
    Alert.alert("Upload", "Document picking logic goes here.");
    // After successful upload and potential backend processing:
    // navigation.navigate('InvoiceDetail', { invoiceId: 'newly-created-id' });
     console.log("Select document from device");
     // Example using react-native-document-picker (install it first!)
     /*
     try {
       const res = await DocumentPicker.pick({
         type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
       });
       console.log(
         res.uri,
         res.type, // mime type
         res.name,
         res.size
       );
       // Send res.uri (or file content) to your backend for OCR/AI processing
     } catch (err) {
       if (DocumentPicker.isCancel(err)) {
         // User cancelled the picker
       } else {
         throw err;
       }
     }
     */
  };

  const handleTakePhoto = async () => {
     // Implementation for taking a photo using the camera
     // Use react-native-image-picker
     Alert.alert("Camera", "Camera logic goes here.");
     console.log("Take photo");
     // Example using react-native-image-picker (install it first!)
     /*
     const options = {
        mediaType: 'photo',
        quality: 1,
      };
      launchCamera(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const source = { uri: response.assets?.[0]?.uri };
          console.log(source);
          // Send image data to your backend for OCR/AI processing
        }
      });
      */
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Invoice</Text>
      <Text style={styles.instructions}>
        Select a PDF or image file from your device, or take a photo of the document.
      </Text>

      <View style={styles.buttonWrapper}>
        <Button
          title="Select from Device"
          onPress={handleUploadFromDevice}
          color="#008080" // Teal
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Take Photo"
          onPress={handleTakePhoto}
          color="#008080" // Teal
        />
      </View>

       {/* Add loading indicator here if needed */}
       {/* Add preview area if needed */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#FFFFFF', // White background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 20, // Space between buttons
     borderRadius: 8, // Rounded corners for the button view
     overflow: 'hidden', // Ensure button color respects rounded corners
  },
});

export default UploadScreen;
