import React, {useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./index";
import AddMenuPage from "./AddMenuPage";
import FilterPage from "./FilterPage";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


interface MenuItem {
    name: string,
    price: number,
    description: string,
    course: string,
}

const Tab = createBottomTabNavigator();

export default function App() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    const addMenuItem = (item: MenuItem) => {
        setMenuItems([...menuItems, item]);
    };

    const removeMenuItems = (index: number) => {
        const newMenu = [...menuItems];
        newMenu.splice(index, 1);
        setMenuItems(newMenu);
    };

    const [fontsLoaded] = Font.useFonts({
        'JuliusSansOne': require('.')
    });

    if (!fontsLoaded){
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home">
                    {() => <HomePage menuItems={menuItems}
        onRemoveMenuItem={removeMenuItems}/>}
                </Tab.Screen>

                <Tab.Screen name ="Filter">
                    {() => <FilterPage menuItems={menuItems} />}
                </Tab.Screen>

                <Tab.Screen name="Edit Menu">
                    {() => <AddMenuPage onAddMenuItem={addMenuItem}/>}
                </Tab.Screen>    
            </Tab.Navigator>
        </NavigationContainer>
    );
}

