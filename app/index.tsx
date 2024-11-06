import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface MenuItem {
  name: string,
  price: number,
  description: string,
  course: string,
}

interface HomePageProps {
  menuItems: MenuItem[];
  onRemoveMenuItem: (index: number) => void;
}

const HomePage = ({menuItems, onRemoveMenuItem}: HomePageProps) => {
  const getTotalItems = () => menuItems.length;

  const getAveragePrice = () => {
    if (menuItems.length === 0) return 0;
    const total = menuItems.reduce ((sum, item) => sum + item.price, 0);
    return total / menuItems.length 
  };

  return(
    <View style={styles.container}>
      <Text style ={styles.appTitle}>Christoffel</Text>
      <View style={styles.underlined}/>
      <Text style={styles.pageTitle}>Today's Menu</Text>
      <View style={styles.underline}/>

      <FlatList
      data={menuItems}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <View>
          <Text style={styles.menuItemName}>{item.name} R {item.price}.00</Text>
          <Text style={styles.menuItemDescription}>{item.description}</Text>
          <Text style={styles.menuItemCourse}>{item.course}</Text>
          <TouchableOpacity
              style={styles.removeButton}
              onPress={() => onRemoveMenuItem(index)}
            >
              <Text style={styles.removeButtonText}>Remove Item</Text>
            </TouchableOpacity>

            {index === menuItems.length - 1 && (
              <View style={styles.summaryContainer}>
                <Text style={styles.totalItems}>Total Items: {getTotalItems()}</Text>
                <Text style={styles.averagePrice}>Average Price: {getAveragePrice()}</Text>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  appTitle: {
    fontSize: 35,
    fontWeight: 'condensed',
    marginTop: 40,
    textAlign: 'center',
    fontFamily: "JuliusSansOne",
  
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
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "condensed",
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  menuItemName: {
    fontWeight: "condensed",
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  menuItemDescription: {
    color: '#666',
    fontSize: 16,
    paddingBottom: 10,
  },
  totalItems: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  averagePrice: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
   
  },
  menuItemCourse: {  
    fontSize: 16,
    color: 'red',
    fontStyle: "italic"
  },
  removeButton: {
    backgroundColor: '#000',
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    paddingBottom: 20
  },
});

export default HomePage;