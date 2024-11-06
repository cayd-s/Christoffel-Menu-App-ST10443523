import React, {useState} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

interface MenuItem {
  name: string,
  price: number,
  description: string,
  course: string,
}

interface FilterPageProps {
  menuItems: MenuItem[];
}

const FilterPage = ({menuItems}: FilterPageProps) => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredItems = filter
  ? menuItems.filter((item) => item.course === filter)
  : menuItems;

  const handleFilter = (course: string | null) => {
    setFilter(course);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Filter Menu</Text>
      <View style={styles.underlined}/>
      <Text style={styles.pageTitles}>Choose Your Course</Text>
      <View style={styles.underline}/>
      <View>
      <TouchableOpacity style={styles.button} onPress={() => handleFilter('starters')}>
          <Text style={styles.buttonText}>Starters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleFilter('mains')}>
          <Text style={styles.buttonText}>Mains</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleFilter('desserts')}>
          <Text style={styles.buttonText}>Desserts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleFilter(null)}>
          <Text style={styles.buttonText}>All Items</Text>
        </TouchableOpacity>
     </View>
        <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.menuItemContainer}>
            <Text style={styles.menuItemHeading}>Dish Name:</Text>
            <Text style={styles.menuItemName}>{item.name}</Text>
            
            <Text style={styles.menuItemHeading}>Description:</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>

            <Text style={styles.menuItemHeading}>Course:</Text>
            <Text style={styles.menuItemCourse}>{item.course}</Text>
            
            <Text style={styles.menuItemHeading}>Price:</Text>
            <Text style={styles.menuItemPrice}>R{item.price}</Text>
          </View>
        )}
        />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  pageTitle: {
    fontSize: 34,
    fontWeight: 'condensed',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
    
  },
  menuItemContainer: {
    borderColor: 'black', 
    borderBottomWidth: 1,
    borderRadius: 8,
    padding: 15,
  },
  menuItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  menuItemName: {
    fontWeight: "condensed",
    fontSize: 20,
  },
  pageTitles: {
    fontSize: 24,
    fontWeight:"condensed",
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  menuItemCourse: {  
    fontSize: 16,
    fontStyle: 'italic',
    color: 'red',
  },
  menuItemHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginTop: 10,
  },
  menuItemDescription: {
    fontSize: 16,
    color: '#000000',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "condensed",
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
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
});
export default FilterPage;
