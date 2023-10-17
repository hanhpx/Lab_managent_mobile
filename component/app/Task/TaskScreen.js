import React, { useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

const TaskScreen = (props) => {
    const [TaskList, setTaskList] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    //delete
    const deleteTask = () =>
    {
        let url_delete = 'http://192.168.10.33:3000/dataArea/' + item.Task_ID ;

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

    //load list Task
    const getListTask = async () => {
        let url = 'http://192.168.10.33:3000/dataTask'

        try {
            const response = await fetch(url); //load dữ liệu

            const json = await response.json(); //convert dữ liệu sang json

            setTaskList(json); //set dữ liệu vào state
        } catch (error) {
            console.error(error);
        } finally {
            //kết thúc quá trình load dữ liệu, có lỗi cũng vào
            setisLoading(false); //không load dữ liệu nữa
        }
    }

    const renderTask = ({ item }) => {
        return (
            <View>
                <Text>{item.Task_ID}</Text>
                <Text>{item.Task_Category}</Text>
                <Text>{item.Title}</Text>
                <Text>{item.Description}</Text>
                <Text>{item.Priority}</Text>
                <Text>{item.Due_Date}</Text>
                <Text>{item.Status}</Text>
                <Text>{item.Assigned_To}</Text>
                <Text>{item.Culture_Plan_ID}</Text>
                <Button title="Xóa" onPress={deleteTask} />
            </View>
        );
    }

    React.useEffect(() => {
        const unsubcribe = props.navigation.addListener('focus', () => {
            //cập nhật
            getListTask();
        });
        return unsubcribe;
    }, [props.navigation]);

    return (
        <View>
            <Button title="Thêm" onPress={() => { props.navigation.navigate('addTask') }} />
            <FlatList
                data={TaskList}
                keyExtractor={(item) => item.Task_ID.toString()}
                renderItem={renderTask} />
        </View>
    )

}
export default TaskScreen;