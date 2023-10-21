import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const goToRegistration = () => {
    // Navigate to the registration page (replace 'RegistrationScreen' with your actual screen name).
    navigation.navigate('RegisterScreen');
  };

  const handleLogin = () => {
    // You can implement your login logic here.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Integrate Invigorate</Text>
      
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
      />
      
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />
      
      <Button title="Log In" onPress={handleLogin} />
      
      <TouchableOpacity onPress={goToRegistration}>
        <Text style={styles.registerLink}>Don't have an account? Register here</Text>
      </TouchableOpacity>
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
    width: '100%',
  },
  registerLink: {
    marginTop: 20,
    color: 'blue',
  },
});

export default LoginScreen;
