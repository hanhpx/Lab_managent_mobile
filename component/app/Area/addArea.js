import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import axios from "axios";
import { useState } from "react";

const addArea = () => {
    const [areaName, setAreaName] = useState('');
    const [areaID, setAreaID] = useState(0);
    const [areaSize, setAreaISize] = useState(0);
    const [areaUnit, setAreaUnit] = useState('');
    const [areaType, setAreaType] = useState('');
    const [areaLocations, setAreaLocations] = useState('');

    const onChangeName = value =>
    {
        setAreaName(value);
    }
    const onChangeID = value =>
    {
        setAreaID(value);
    }
    const onChangeSize = value =>
    {
        setAreaISize(value);
    }
    const onChangeUnit = value =>
    {
        setAreaUnit(value);
    }
    const onChangeType = value =>
    {
        setAreaType(value);
    }
    const onChangeLocations = value =>
    {
        setAreaLocations(value);
    }
    //su dung post
    insertArea = () => {
        var url = 'http://192.168.10.33:3000/dataArea';
        axios.post(url, {
            Area_Name: areaName,
            Area_ID: areaID,
            Area_Size: areaSize,
            Area_Unit: areaUnit,
            Area_Type: areaType,
            Area_Locations: areaLocations
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.error(err)
            });
        //reset du lieu trong o nhap
        // this.state.name_input = '';
        // this.state.id_input = '';
        // this.state.size_input = '';
        // this.state.unit_input = '';
        // this.state.type_input = '';
        // this.state.locations_input = '';
    }
    return (
        <View>
            <View>
                <TextInput
                    placeholder="nhập tên: "
                    onChangeText={onChangeName}
                    value={areaName} />
                <TextInput
                    placeholder="nhập ID: "
                    onChangeText={onChangeID}
                    value={areaID} />
                <TextInput
                    placeholder="nhập size: "
                    onChangeText={onChangeSize}
                    value={areaSize} />
                <TextInput
                    placeholder="nhập unit: "
                    onChangeText={onChangeUnit}
                    value={areaUnit} />
                <TextInput
                    placeholder="nhập type: "
                    onChangeText={onChangeType}
                    value={areaType} />
                <TextInput
                    placeholder="nhập locations: "
                    onChangeText={onChangeLocations}
                    value={areaLocations} />
            </View>
            <View>
                <TouchableOpacity
                    onPress={this.insertArea.bind(this)}>insert</TouchableOpacity>
            </View>
        </View>
    );
}

export default addArea;