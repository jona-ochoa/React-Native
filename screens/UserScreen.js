import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { db } from "../database/firebase";
import { doc, setDoc } from "firebase/firestore/lite";

const UserScreen = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const SaveNewUser = async () => {
    if (state.name === "") {
      alert("Please provide a name");
    } else {
      await setDoc(doc(db, "users", "Ramdom_Doc"), {
        name: state.name,
        email: state.email,
        phone: state.phone,
      });
      props.navigation.navigate("CreateGoal");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="NAME USER"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL USER"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="PHONE USER"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={SaveNewUser} style={styles.button}>
          <Text style={styles.buttonText}>SAVE USER</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputGroup: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    borderColor: "#025893",
  },
  button: {
    width: "100%",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "#025893",
    width: "50%",
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    alignItems: "center",
    color: "#fff",
    fontWeight: 700
  },
});

export default UserScreen;
