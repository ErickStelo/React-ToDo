import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TaskList from './src/components/TaskList';

export default function App() {
  const [task, setTask] = useState([
    {key: 1, task:'Comprar pão'},
    {key: 2, task:'Assistir filme'},
    {key: 3, task:'Ir para academia'},
    {key: 4, task:'Escutar musica'},
    {key: 5, task:'Programar'},
  ])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#064663' barStyle='light-content' />
      <View style={styles.content}>
        <Text style={styles.title}>ToDo</Text>
      </View>
      {/* LISTA */}
      <FlatList  showsHorizontalScrollIndicator={false} data={task} keyExtractor={(item)=>{String(item.key)}} style={{marginHorizontal: 10}} renderItem={({item})=>{return <TaskList data={item} />}} />

      <TouchableOpacity style={styles.fab}>
        <Ionicons name='ios-add' size={35} color="#ECB365"/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041C32',
  },
  content:{

  },
  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
  },
  fab:{
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#04293A",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 10, //Coloca uma sombra do botao
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      width: 1,
      height: 3
    }
  }
});
