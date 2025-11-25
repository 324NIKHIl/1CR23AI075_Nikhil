import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString()); 
    } catch (e) {
      setResult("Error");
    }
  };

  const renderButton = (label, color, flex = 1, onPressHandler) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, flex }]}
      onPress={onPressHandler ? onPressHandler : () => handlePress(label)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.input}>{input || "0"}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      {/* Buttons Layout */}
      <View style={styles.row}>
        {renderButton("C", "#A5A5A5", 1, handleClear)}
        {renderButton("+/-", "#A5A5A5")}
        {renderButton("%", "#A5A5A5")}
        {renderButton("/", "#FF9500")}
      </View>
      <View style={styles.row}>
        {renderButton("7", "#333")}
        {renderButton("8", "#333")}
        {renderButton("9", "#333")}
        {renderButton("*", "#FF9500")}
      </View>
      <View style={styles.row}>
        {renderButton("4", "#333")}
        {renderButton("5", "#333")}
        {renderButton("6", "#333")}
        {renderButton("-", "#FF9500")}
      </View>
      <View style={styles.row}>
        {renderButton("1", "#333")}
        {renderButton("2", "#333")}
        {renderButton("3", "#333")}
        {renderButton("+", "#FF9500")}
      </View>
      <View style={styles.row}>
        {renderButton("0", "#333", 2)}
        {renderButton(".", "#333")}
        {renderButton("=", "#FF9500", 1, handleCalculate)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  display: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  input: {
    color: "#888",
    fontSize: 40,
  },
  result: {
    color: "white",
    fontSize: 70,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  button: {
    height: 80,
    margin: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "500",
  },
});
