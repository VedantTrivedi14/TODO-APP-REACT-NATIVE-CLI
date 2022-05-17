import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from './src/screens/UserScreen';
import TodoScreen from './src/screens/TOdoScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User">
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="TODO" component={TodoScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
