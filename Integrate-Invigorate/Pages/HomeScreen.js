import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const goToLogin = () => {
    // Navigate to the login page (replace 'LoginScreen' with your actual screen name).
    navigation.navigate('LoginScreen');
  };

  const testApi = () => {
    axios.get('http://192.168.1.116:8000/all_users/')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        if (error.response) {
          console.error('Response Data: ', error.response.data)
          console.error('Response Status:', error.response.status);
          console.error('Response Headers:', error.response.headers);          
        } else if (error.request) {
          console.error('Request: ', error.request);
        } else {
          console.error('Error Message: ', error.message);
        }
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Integrate Invigorate</Text>
      <Text style={styles.message}>Hello, Healthy Human. Please log in to continue.</Text>
      <Button title="Log In" onPress={goToLogin} />
      <Button title="test api" onPress={testApi}> test api </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
