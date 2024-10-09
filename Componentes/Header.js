import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
    const [hoveredText, setHoveredText] = useState(null); // State to manage hovered text

    const navItems = ['Phones', 'Earbuds', 'Offers', 'Support'];

    return (
        <View style={styles.headerContainer}>
            {/* Google Icon */}
            <FontAwesome name="google" size={24} color="#4285f4" style={styles.icon} />
            
            {/* Texto da nav */}
            <View style={styles.navContainer}>
                {navItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => { /* Ação da nav */ }}
                        onPressIn={() => setHoveredText(item)}
                        onPressOut={() => setHoveredText(null)}
                    >
                        <Text style={[styles.text, hoveredText === item && styles.hoveredText]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Search e Cart/User Icons */}
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.icon}>
                    <FontAwesome name="search" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <FontAwesome name="shopping-cart" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <FontAwesome name="user" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginHorizontal: 15,
        fontSize: 16,
        color: 'Black',
    },
    hoveredText: {
        color: '#4285f4',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10,
    },
});

export default Header;
