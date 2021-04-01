import React, { FC } from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ButtonProps {
    title: string,
    color?: string,
    backgroundColor?: string,
    onPress(action?: string): void
}

const CustomButton: FC<ButtonProps> = (props) => {

    return (
        <View style={styles.container}>
            <button style={{
                display: 'flex',
                color: props.color || 'tomato',
                backgroundColor: props.backgroundColor || "#171717",
                padding: "10px",
                borderRadius: "10px",
                fontSize: 17
            }}>{props.title}</button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default CustomButton;