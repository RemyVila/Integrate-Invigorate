import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import axios from 'axios';

function InputToday() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    mood: 0,
    energy: 0,
    sleep: {
      duration: 0,
      start: 0,
      end: 0,
    },
    food: {
      numMeals: 0,
      content: [],
    },
    exercise: {
      minutes: 0,
      time: 0,
      content: [],
    },
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <View>
            <Text>Mood:</Text>
            <TextInput
              value={formData.mood.toString()}
              onChangeText={(text) => setFormData({ ...formData, mood: parseInt(text) })}
              keyboardType="numeric"
            />
            <Text>Energy:</Text>
            <TextInput
              value={formData.energy.toString()}
              onChangeText={(text) => setFormData({ ...formData, energy: parseInt(text) })}
              keyboardType="numeric"
            />
            <Button title="Next" onPress={nextStep} />
          </View>
        );
      case 1:
        return (
          <View>
            {/* Sleep form fields */}
            <Button title="Next" onPress={nextStep} />
          </View>
        );
      case 2:
        return (
          <View>
            {/* Food form fields */}
            <Button title="Next" onPress={nextStep} />
          </View>
        );
      case 3:
        return (
          <View>
            {/* Exercise form fields */}
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View>
      {renderFormStep()}
    </View>
  );
}

export default InputToday;
