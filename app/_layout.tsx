import React, {useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./index"
import AddMenuPage from "./AddMenuPage";
import FilterPage from "./FilterPage";

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

    return (
        
            <Tab.Navigator>
                <Tab.Screen name="index">
                    {() => <HomePage menuItems={menuItems}
        onRemoveMenuItem={removeMenuItems}/>}
                </Tab.Screen>

                <Tab.Screen name ="FilterPage">
                    {() => <FilterPage menuItems={menuItems} />}
                </Tab.Screen>

                <Tab.Screen name="AddMenuPage">
                    {() => <AddMenuPage onAddMenuItem={addMenuItem}/>}
                </Tab.Screen>    
            </Tab.Navigator>
        
    );
}
