import React, { FC, useEffect, useState } from 'react';
import {View, Dimensions, Text, StyleSheet, ViewStyle, FlatList, TouchableOpacity} from 'react-native';
import Button from "../reuseables/Button";


const { height, width} = Dimensions.get("screen");

interface HomeScreenProps {

}

interface ApiData {
    id: number,
    title: string
}

const HomeScreen: FC<HomeScreenProps> = (props) => {
   
    const data = ['Tech', "World", "Education"];
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>News Categories</Text>
                <FlatList 
                    data={data}
                    keyExtractor={(data, index) => data[index]}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.items}>
                            <Button color={'rebeccapurple'} onPress={() => ""} title={item} />
                        </TouchableOpacity>
                    )}
                />
        </View>
    )
}

interface Style {
    container: object,
    text: object,
    items: object
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato",
    },
    text: {
        flex: 1,
        fontSize: "20px",
        fontWeight: "600",
        marginTop: 17,
    },
    items: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        fontSize: "20px",
        fontWeight: "bold",
        color: "#171717",
        backgroundColor: "dosgerblue"
    }
})


export default HomeScreen;