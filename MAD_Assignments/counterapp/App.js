import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>

      <Text style={styles.count}>{count}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.decrease]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>Decrease</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.increase]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Increase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  count: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  decrease: {
    backgroundColor: "#e74c3c",
    marginRight: 10,
  },
  increase: {
    backgroundColor: "#2ecc71",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});