import React, { useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

const PlantScreen = (props) => {
    const [PlantList, setPlantList] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    //delete
    const deletePlant = () =>
    {
        let url_delete = 'http://192.168.10.33:3000/dataArea/' + item.Plant_ID ;

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

    //load list Plant
    const getListPlant = async () => {
        let url = 'http://192.168.10.33:3000/dataPlant'

        try {
            const response = await fetch(url); //load dữ liệu

            const json = await response.json(); //convert dữ liệu sang json

            setPlantList(json); //set dữ liệu vào state
        } catch (error) {
            console.error(error);
        } finally {
            //kết thúc quá trình load dữ liệu, có lỗi cũng vào
            setisLoading(false); //không load dữ liệu nữa
        }
    }

    const renderPlant = ({ item }) => {
        return (
            <View>
                <Text>{item.Plant_Name}</Text>
                <Text>{item.Plant_ID}</Text>
                <Text>{item.Scientific_Name}</Text>
                <Text>{item.Plant_Desciption}</Text>
                <Text>{item.Image}</Text>
                <Button title="Xóa" onPress={deletePlant} />
            </View>
        );
    }

    React.useEffect(() => {
        const unsubcribe = props.navigation.addListener('focus', () => {
            //cập nhật
            getListPlant();
        });
        return unsubcribe;
    }, [props.navigation]);

    return (
        <View>
            <Button title="Thêm" onPress={() => { props.navigation.navigate('addPlant') }} />
            <FlatList
                data={PlantList}
                keyExtractor={(item) => item.Plant_ID.toString()}
                renderItem={renderPlant} />
        </View>
    )

}
export default PlantScreen;