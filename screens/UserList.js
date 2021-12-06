import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const image = { uri: "https://picsum.photos/id/1/1000/1000" };

const UserList = (props) => {
  return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.containerButton}>
          <View style={styles.inputGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate("UserScreen")}
            >
              <Text style={styles.buttonText}>Create user</Text>
            </TouchableOpacity>
          </View>
          </View>
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButton: {
    justifyContent:'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  inputGroup: {
    width: "20%",
  },
  button: {
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#025893",
  },

  buttonText: {
    alignItems: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: 23,
    
  },
});

export default UserList;
