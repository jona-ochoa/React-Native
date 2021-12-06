import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./screens/UserList";
import UserDetail from "./screens/UserDetail";
import CreateGoal from "./screens/CreateGoal";
import UserScreen from './screens/UserScreen';
import Header from "./components/Header";

const Stack = createNativeStackNavigator();

function MyStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen option={{ headerShown: false}} name="UserScreen" component={UserScreen} />
       <Stack.Screen name="CreateGoal" component={CreateGoal} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
     
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Header title="Emerald App"/>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
