import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { API_BASE_URL } from '../../env';
let burl = API_BASE_URL

import axios from 'axios';


const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password1: '',
    password2: '',
  });

  const handleRegistration = () => {
    // You can perform registration logic here, e.g., sending the data to your server.
    axios.post("http://192.168.1.116:8000/register/", formData)
      .then(response => {
        // Handle the successful response here.
        console.log('Registration successful:', response.data);
      })
      .catch(error => {
        // Handle any errors here.
        console.error('Registration failed:', error);
        console.log('formData', formData)
        if (error.response) {
          // The request was made, but the server responded with an error
          console.error('Response Data:', error.response.data);
          console.error('Response Status:', error.response.status);
          console.error('Response Headers:', error.response.headers);
        } else if (error.request) {
          // The request was made, but no response was received (e.g., network error)
          console.error('Request:', error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error('Error Message:', error.message);
        }
    });
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        value={formData.email}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Username </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFormData({ ...formData, username: text })}
        value={formData.username}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFormData({ ...formData, password1: text })}
        value={formData.password1}
        secureTextEntry
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFormData({ ...formData, password2: text })}
        value={formData.password2}
        secureTextEntry
      />

      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});

export default RegisterScreen;
