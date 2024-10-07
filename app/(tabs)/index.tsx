import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";

type MenuItem = {
  name: string;
  description: string;
  price: number;
  course: string;
};

export default function HomeScreen() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showInput, setShowInput] = useState(false); 

  const addMenuItem = () => {
    
    if (dishName.trim() && description.trim() && price.trim() && selectedCourse) {
     
      setMenuItems(prevItems => [
        ...prevItems,
        {
          name: dishName,
          description,
          price: parseFloat(price), 
          course: selectedCourse
        }
      ]);
      
      setDishName('');
      setDescription('');
      setPrice('');
     
      
      setShowInput(false);
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
  
    <ScrollView style={styles.container}> 
    
      <Text style={styles.appTitle}>Christoffel</Text>
      <View style={styles.underline}/>
      <Text style={styles.pageTitle}>Today's Menu</Text>
      <View style={styles.underlined}/>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>
              <Text style={styles.menuItemName}>{item.name}</Text> - R{item.price.toFixed(2)}
            </Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>
          </View>
        )}
      />

      <Text style={styles.totalItems}>Total items: {menuItems.length}</Text>

      {showInput ? ( 
        <>
          <Text>Enter Dish Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Dish Name"
            value={dishName}
            onChangeText={setDishName}
          />
          <Text>Enter Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <Text>Enter Price</Text>
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <Text style={styles.sectionTitle}>Select Course:</Text>
          <View style={styles.radioGroup}>
            <RadioButton
              value="starters"
              status={selectedCourse === 'starters' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedCourse('starters')}
            />
            <Text>Starters</Text>

            <RadioButton
              value="mains"
              status={selectedCourse === 'mains' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedCourse('mains')}
            />
            <Text>Mains</Text>

            <RadioButton
              value="desserts"
              status={selectedCourse === 'desserts' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedCourse('desserts')}
            />
            <Text>Desserts</Text>
          </View>

          
          <TouchableOpacity style={styles.button} onPress={addMenuItem}>
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => setShowInput(true)}>
          <Text style={styles.buttonText}>Add Item</Text> 
        </TouchableOpacity>
      )}
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  appTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
    fontFamily: "JuliusSansOne-Regular",
  },

  underline: {
    borderBottomColor: 'red',
    borderBottomWidth: 1, 
    marginVertical: 10,
    width: '60%', 
    alignSelf: 'center', 
    marginBottom: 20,
  },

  underlined: {
    borderBottomColor: 'red',
    borderBottomWidth: 1, 
    marginVertical: 10,
    width: '100%', 
    alignSelf: 'center', 
    marginBottom: 20,
  },


  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
    fontFamily: "JuliusSansOne-Regular",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: "center",
    fontFamily: "JuliusSansOne-Regular",
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
    paddingRight: 30,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 5, 
    backgroundColor: 'white', 
    padding: 10, 
    alignItems: 'center', 
    marginVertical: 10,
  },
  buttonText: {
    color: 'black', 
    fontSize: 18, 
    
  },
  menuItem: {
    marginBottom: 20,
    textAlign: 'center'
  },
  menuItemText: {
    fontSize: 18,
  },
  menuItemName: {
    fontWeight: 'bold',
    fontFamily: "JuliusSansOne-Regular",
    fontSize: 20,
  },
  menuItemDescription: {
    color: '#666',
  },
  totalItems: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: "JuliusSansOne-Regular",
    
  },
});
