import React , {useEffect} from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from './src/screens/UserScreen';
import TodoListScreen from './src/screens/TodoScreen';
import AddItemScreen from './src/screens/AddTask';
import * as SQLite from 'react-native-sqlite-storage';

global.db = SQLite.openDatabase('db.todoDatabase ');

const Stack = createNativeStackNavigator();
function TodoList() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Todo' component={TodoListScreen} />
      <Stack.Screen name = 'AddItem' component={AddItemScreen} />
    </Stack.Navigator>
  )
  
}
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="User" component={UserScreen}/>
        <Stack.Screen name = "TodoList" component={TodoList} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
