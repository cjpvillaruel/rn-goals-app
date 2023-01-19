import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goal, setGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  // const [add]
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setGoal(enteredText);
  }
  function addGoalHandler(goal) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: goal, key: Math.random().toString() },
    ]);
    setGoal("");
  }
  function handleDelete(id) {
    setCourseGoals((currentGoals) => currentGoals.filter((a) => a.key !== id));
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              itemData={itemData}
              handleDelete={() => handleDelete(itemData.item.key)}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 3,
  },
});
