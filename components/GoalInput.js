import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
         <Button
          title="CANCEL"
          color="red"
          onPress={props.onCancel}
        />
        </View>
        <View style={styles.button}>
        <Button
          title="Add"
          onPress={addGoalHandler}
        />
        </View>
        </View>
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
    width: '80%',
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%',

  }
});

export default GoalInput;  
