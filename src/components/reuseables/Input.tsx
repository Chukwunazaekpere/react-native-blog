import React, { FC, useState } from 'react';
import {View, Text, StyleSheet, TextInput, ViewStyle, Dimensions} from 'react-native';
import * as Icons from "@expo/vector-icons/";


interface InputProps {
    title: string,
    placeholder: string,
    backgroundColor?: string,
    color?: string
}

const { height, width} = Dimensions.get("screen");


const Input: FC<InputProps> = (props) => {
    const [formInput, setFormInput] = useState("");

    const inputHandler = (value: string) => {
        setFormInput(value);
    };
    return (
        <View>    
            <Text style={styles.text}>{props.title}</Text>
            <View style={styles.inputContainer}>
                <Icons.MaterialCommunityIcons style={styles.icon} size={20} name={"search-web"} />
                <TextInput value={formInput} onChangeText={event => inputHandler(event)}
                    style={styles.inputFields} placeholder={props.placeholder}
                />
            </View>
        </View>
    )
}


interface Style {
    inputContainer: object
    icon: object
    inputFields: object,
    text: object,
    
}

const styles = StyleSheet.create<Style>({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 7,
        shadowColor: "#171717",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.60,
        shadowRadius: 1.41,

        elevation: 3,
    },
    icon: {
        flex: 1,
        padding: 7,
        borderRightWidth: 1,
        backgroundColor: "#eee"
    },
    inputFields: {
        flex: 1,
        justifyContent: "center",
        fontSize: 17,
        borderRadius: 7,
        padding: 7,
        underlineColorAndroid: 'none'
    },
    text: {
        flex: 1,
        fontSize: "20px",
        fontWeight: "600"
    }
})



export default Input;