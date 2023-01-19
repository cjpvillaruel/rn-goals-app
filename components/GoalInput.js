import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [goal, setGoal] = useState("");
  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }
  const handleAddGoal = () => {
    addGoalHandler(goal);
    setGoal("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={goal}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 24,
    flex: 1,
    borderColor: "#cccccc",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
