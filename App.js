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
  const [modalIsVisible, setModalVisible] = useState(false);
  function goalInputHandler(enteredText) {
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

  function startAddGoalHandler() {
    setModalVisible(true);
  }
  function closeModalHandler() {
    setModalVisible(false);
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        {modalIsVisible && (
          <GoalInput
            addGoalHandler={addGoalHandler}
            closeHandler={closeModalHandler}
          />
        )}
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
