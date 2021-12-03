import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide" >
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Name User"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title="Save User"
          onPress={props.onAddGoal.bind(this, enteredGoal)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
