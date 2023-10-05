import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";

export default class test extends React.Component{
    constructor()
    {
        super();
        this.state={
            dataArea: [],
        }
    }

    //get
    defineGet()
    {
        var url='http://192.168.10.33:3000/data';
        axios.get(url).then((gData)=>{
            console.log(gData.data);
            this.setState({
                dataArea: gData.data,
            });
        });
    }

    render()
    {
        const dataMysql=this.state.dataArea.map((item,index)=>{
            var arrayArea=['ID: ',item.Area_ID, 'Name: ', item.Area_Name, 'Size:', item.Area_Size].join(' ');
            return <Text key={index}>{arrayArea}</Text>
        });
        return(
            <View>
                <View>
                    <TouchableOpacity onPress={this.defineGet.bind(this)}>
                        <Text>Select</Text>
                    </TouchableOpacity>
                </View>
                <View>{dataMysql}</View>
            </View>
        );
    }
}