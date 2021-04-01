import React, { FC, useEffect, useState } from 'react';
import {View, Dimensions, Text, StyleSheet, ViewStyle, FlatList, TouchableOpacity, TextStyle} from 'react-native';
import axios from 'axios';
import InputComponent from '../reuseables/Input';

import confidential  from "../../key.ts";

const { height, width} = Dimensions.get("screen");

interface HomeScreenProps {

}



interface ApiData {
    id: number,
    title: string,
    author: string,
    language: string,
    country: string,
    url: string
}

const HomeScreen: FC<HomeScreenProps> = (props) => {
    const [newsData, setNewsData] = useState<ApiData[]>([]);

    const getData = async () => {
        const data: [] = await axios.get(`${confidential.NEWS_URI}`, {
            params: {
                    access_key: `${confidential.NEWS_API_KEY}`,
                    languages: 'en',
                    countries: 'us',
                    limit: 30,
                    offset: 30,
                }
        });
        const apiKeys = Object.keys(data);
        const apiValues = Object.values(data);
        for(let item of apiKeys){
            setNewsData([
                ...apiValues[0].data
            ])
        }
                
    };

    useEffect(() => {
        getData();

    }, []);

    const handleItems = (item: string) => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.search__field}>
                <InputComponent title="Search" placeholder='Search stories'/>
            </View>
            <FlatList style={styles.newsList}
                data={newsData}
                keyExtractor={(item) => item.url}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => handleItems(item.url)}>
                      <Text style={styles.newsItem}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

interface Style {
    container: object,
    search__field: object,
    newsList: object,
    newsItem: ViewStyle | TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f4f4f4",
    },
    search__field: {
        flex: 1,
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 50,
        margin: 12,
    },
    newsItem: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        fontSize: 17,
        fontWeight: "bold",
        backgroundColor: "#f4f4f4",
        borderWidth: 2,
        padding: 8,
        borderRadius: 4,
        borderColor: "#eee",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.37,
        shadowRadius: 1.41,
        elevation: 3,
    },
    newsList:{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    }
})


export default HomeScreen;