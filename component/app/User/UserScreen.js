import React, { useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

const UserScreen = (props) => {
    const [UserList, setUserList] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    //delete
    const deleteUser = () =>
    {
        let url_delete = 'http://192.168.10.33:3000/dataArea/' + item.User_ID ;

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

    //load list User
    const getListUser = async () => {
        let url = 'http://192.168.10.33:3000/dataUser'

        try {
            const response = await fetch(url); //load dữ liệu

            const json = await response.json(); //convert dữ liệu sang json

            setUserList(json); //set dữ liệu vào state
        } catch (error) {
            console.error(error);
        } finally {
            //kết thúc quá trình load dữ liệu, có lỗi cũng vào
            setisLoading(false); //không load dữ liệu nữa
        }
    }

    const renderUser = ({ item }) => {
        return (
            <View>
                <Text>{item.User_ID}</Text>
                <Text>{item.User_Name}</Text>
                <Text>{item.User_Password}</Text>
                <Text>{item.Full_Name}</Text>
                <Text>{item.Phone_Number}</Text>
                <Text>{item.Is_Admin}</Text>
                <Text>{item.email}</Text>
                <Button title="Xóa" onPress={deleteUser} />
            </View>
        );
    }

    React.useEffect(() => {
        const unsubcribe = props.navigation.addListener('focus', () => {
            //cập nhật
            getListUser();
        });
        return unsubcribe;
    }, [props.navigation]);

    return (
        <View>
            <Button title="Thêm" onPress={() => { props.navigation.navigate('addUser') }} />
            <FlatList
                data={UserList}
                keyExtractor={(item) => item.User_ID.toString()}
                renderItem={renderUser} />
        </View>
    )

}
export default UserScreen;