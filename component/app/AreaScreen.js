import React, {useEffect, useState} from "react";
import { View, Text, FlatList , StyleSheet} from "react-native";
import axios from "axios";

const AreaScreen = () =>{
    //initial state
    const [areaList, setAreaList] = useState([]);

    //the first load app
    useEffect(() => {
        axios.get("http://192.168.10.33:3000/data")
        .then((res)=>setAreaList(res.data))
        .catch((err)=>console.log(err))
    }, []);

    const renderArea =({item})=>{
        return(
            <View style={styles.card}>
                <Text style={styles.Name}>{item.Area_Name}</Text>
                <Text style={styles.Area_ID}>ID: {item.Area_ID}</Text>
                <Text style={styles.Size}>Diện tích: {item.Area_Size}{item.Area_Unit}</Text>
                <Text style={styles.Type}>Loại: {item.Area_Type}</Text>
                <Text style={styles.Locations}>Vị trí: {item.Area_Locations}</Text>
            </View>
        )
    }
    return (
        <View>
            <FlatList 
            data={areaList}
            keyExtractor={(item)=> item.Area_ID.toString()}
            renderItem={renderArea}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding:15,
        marginBottom:10
    },
    Name:{
        fontSize:18,
        fontWeight:"bold",
        color: "black",

    },
    Area_ID: {
        
    }
})

export default AreaScreen;