import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function TaskList({data}){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name='md-checkmark-circle' size={30} color="#064663"/>
            </TouchableOpacity>
            <View>
                <Text style={styles.taskTitle}>{data.task}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 5,
        padding: 10,
        elevation: 1.5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3
        }
    },
    taskTitle:{
        fontSize: 17,
        paddingLeft: 10
    }
});