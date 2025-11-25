// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, World!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "blue",
//   },
// });



// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// export default function CounterApp() {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Counter App</Text>

//       <Text style={styles.count}>{count}</Text>

//       <View style={styles.buttonRow}>
//         <TouchableOpacity
//           style={[styles.button, styles.decrease]}
//           onPress={() => setCount(count - 1)}
//         >
//           <Text style={styles.buttonText}>Decrease</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, styles.increase]}
//           onPress={() => setCount(count + 1)}
//         >
//           <Text style={styles.buttonText}>Increase</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   count: {
//     fontSize: 50,
//     fontWeight: "bold",
//     marginBottom: 30,
//   },
//   buttonRow: {
//     flexDirection: "row",
//     gap: 15,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   decrease: {
//     backgroundColor: "#e74c3c",
//     marginRight: 10,
//   },
//   increase: {
//     backgroundColor: "#2ecc71",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      // Update existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setTasks([...tasks, task]);
    }
    setTask("");
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter task..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>
            {editIndex !== null ? "Update" : "Add"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskRow}>
            <Text style={styles.taskText}>{item}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEditTask(index)}
              >
                <Text style={styles.actionText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteTask(index)}
              >
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#2ecc71",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
  actions: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    backgroundColor: "#3498db",
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
