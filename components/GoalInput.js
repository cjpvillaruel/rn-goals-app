import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ addGoalHandler, closeHandler, visible }) => {
  const [goal, setGoal] = useState("");

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }

  const handleAddGoal = () => {
    addGoalHandler(goal);
    setGoal("");
    closeHandler();
  };

  return (
    <Modal visible={visible} animationType="slide" close>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.img}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddGoal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 24,
    flex: 1,
    borderColor: "#cccccc",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "90%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default GoalInput;
