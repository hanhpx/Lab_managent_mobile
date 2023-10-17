import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import addArea from "./addArea";

const AreaScreen = (props) => {
    const [areaList, setAreaList] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    //delete
    const deleteArea = () =>
    {
        let url_delete = 'http://192.168.10.33:3000/dataArea/' + item.Area_ID ;

        fetch(url_delete, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objArea)
        })
            .then((res) => {
                if (res.status == 200)
                    Alert("Đã xóa")
            })
            .catch((ex) => {
                console.log(ex);
            });
    }

    //load list area
    const getListArea = async () => {
        let url = 'http://192.168.10.33:3000/dataArea';

        try {
            const response = await fetch(url); //load dữ liệu

            const json = await response.json(); //convert dữ liệu sang json

            setAreaList(json); //set dữ liệu vào state
        } catch (error) {
            console.error(error);
        } finally {
            //kết thúc quá trình load dữ liệu, có lỗi cũng vào
            setisLoading(false); //không load dữ liệu nữa
        }
    }

    const renderArea = ({ item }) => {
        return (
            <View style={styles.card}>
                <Text style={styles.Name}>{item.Area_Name}</Text>
                <Text style={styles.Area_ID}>ID: {item.Area_ID}</Text>
                <Text style={styles.Size}>Diện tích: {item.Area_Size}{item.Area_Unit}</Text>
                <Text style={styles.Type}>Loại: {item.Area_Type}</Text>
                <Text style={styles.Locations}>Vị trí: {item.Area_Locations}</Text>
                <Button title="Xóa" onPress={deleteArea} />
            </View>
        );
    }

    React.useEffect(() => {
        const unsubcribe = props.navigation.addListener('focus', () => {
            //cập nhật
            getListArea();
        });
        return unsubcribe;
    }, [props.navigation]);

    return (
        <View>
            <Button title="Thêm" onPress={() => { props.navigation.navigate('addArea') }} />
            <FlatList
                data={areaList}
                keyExtractor={(item) => item.Area_ID.toString()}
                renderItem={renderArea} />
        </View>
    )

}
export default AreaScreen;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        marginBottom: 10
    },
    Name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",

    },
})
