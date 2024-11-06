import React, {useState} from 'react'
import {View, Text, Button, TextInput, StyleSheet, TouchableWithoutFeedback, Alert, ScrollView, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface MenuItem {
  name: string,
  price: number,
  description: string,
  course: string,
}

interface AddMenuPageProps {
  onAddMenuItem: (item: MenuItem) => void;
}

const AddMenuPage = ({onAddMenuItem}: AddMenuPageProps) => {
  const[name, setName] = useState('');
  const[price, setPrice]= useState('');
  const[description, setDescription] = useState('')
  const[course, setCourse]= useState('');

  const handleSubmit =() => {
    if (name && price && description && course) {
      onAddMenuItem({name, price: parseFloat(price), description,course 

});
      setName('');
      setPrice('');
      setDescription('');
      setCourse('');

      Alert.alert('Successful', 'Menu item added', [{ text: 'OK' }]);
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <Text style = {styles.pageTitle}> Edit Menu </Text>
          <View style={styles.underline}/>

          <Text style={styles.heading}>Enter Dish Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.heading}>Enter Description:</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />

          <Text style={styles.heading}>Enter Price:</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <Text style={styles.heading}>Select Course:</Text>
          <View>
            <RNPickerSelect
            onValueChange={setCourse}
            items={[
              {label: 'Starters', value: 'starters'},
              {label: 'Mains', value: 'mains'},
              {label: 'Desserts', value: 'desserts'},
            ]}

            placeholder={{ label: 'Select a Course', value: null}}
            value={course}
            style={pickerSelectStyles}
            />

              <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.addButton} 
                onPress={handleSubmit} 
              >
                <Text style={styles.addButtonText}>Add Item</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  pageTitle: {
    fontSize: 34,
    fontWeight:"condensed",
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  underline: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginTop: 15
  },

  buttonContainer: {
    marginTop: 20,
  },
});
const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
};

export default AddMenuPage;
