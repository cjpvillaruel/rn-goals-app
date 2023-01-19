import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ itemData, handleDelete }) => {
  return (
    <View style={styles.goalItem} key={itemData.item.key}>
      <Pressable
        onPress={handleDelete}
        android_ripple={{ color: "#ddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 7,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
