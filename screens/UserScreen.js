import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

const UserScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSingUp = () => {
    console.log(name);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="NAME USER"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL USER"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSingUp} style={styles.button}>
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
    borderColor: "#0782f9",
  },
  button: {
    width: "100%",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "#0782f9",
    width: "50%",
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    alignItems: "center",
    color: "#ffffff",
  },
});

export default UserScreen;
