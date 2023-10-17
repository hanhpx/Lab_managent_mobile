import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import addMaterial from "./addMaterial";

const MaterialScreen = (props) => {
    const [MaterialList, setMaterialList] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    //delete
    const deleteMaterial = () =>
    {
        let url_delete = 'http://192.168.10.33:3000/dataMaterial/' + item.Material_ID ;

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

    //load list Material
    const getListMaterial = async () => {
        let url = 'http://192.168.10.33:3000/dataMaterial'

        try {
            const response = await fetch(url); //load dữ liệu

            const json = await response.json(); //convert dữ liệu sang json

            setMaterialList(json); //set dữ liệu vào state
        } catch (error) {
            console.error(error);
        } finally {
            //kết thúc quá trình load dữ liệu, có lỗi cũng vào
            setisLoading(false); //không load dữ liệu nữa
        }
    }

    const renderMaterial = ({ item }) => {
        return (
            <View>
                <Text>{item.Meterial_ID}</Text>
                <Text>{item.Category}</Text>
                <Text>{item.Name}</Text>
                <Text>{item.Price}</Text>
                <Text>{item.Proceduced_By}</Text>
                <Text>{item.Quantity}</Text>
                <Text>{item.Additional_Notes}</Text>
                <Text>{item.Unit}</Text>
                <Text>{item.Expiration_Date}</Text>
                <Button title="Xóa" onPress={deleteMaterial} />
            </View>
        );
    }

    React.useEffect(() => {
        const unsubcribe = props.navigation.addListener('focus', () => {
            //cập nhật
            getListMaterial();
        });
        return unsubcribe;
    }, [props.navigation]);

    return (
        <View>
            <Button title="Thêm" onPress={() => { props.navigation.navigate('addMaterial') }} />
            <FlatList
                data={MaterialList}
                keyExtractor={(item) => item.Material_ID.toString()}
                renderItem={renderMaterial} />
        </View>
    )

}
export default MaterialScreen;