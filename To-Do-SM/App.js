import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";

const App = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const handleAddTask = () => {
        if (task) {
            if (editIndex !== -1) {
                // Edit existing task
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = task;
                setTasks(updatedTasks);
                setEditIndex(-1);
            } else {
                // Add new task
                setTasks([...tasks, task]);
            }
            setTask("");
        }
    };

    const handleEditTask = (index) => {
        const taskToEdit = tasks[index];
        setTask(taskToEdit);
        setEditIndex(index);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.task}>
            <Text
                style={styles.itemList}>{item}</Text>
            <View
                style={styles.taskButtons}>
                <TouchableOpacity
                    onPress={() => handleEditTask(index)}>
                    <Text
                        style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleDeleteTask(index)}>
                    <Text
                        style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Shyhoon Moontaka</Text>
            <Text style={styles.title}>ToDo App</Text>
            <TextInput
                style={styles.input}
                placeholder="Give Your Task.Then Add It."
                value={task}
                onChangeText={(mytext) => setTask(mytext)}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddTask}>
                <Text style={styles.addButtonText}>
                    {editIndex !== -1 ? "Update Task" : "Add Task"}
                </Text>
            </TouchableOpacity>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        marginTop: 40,
        backgroundColor:"black"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        color:"yellow",
        textAlign:"center"
    },
    heading: {
        fontSize:32,
        fontWeight: "bold",
        marginBottom: 7,
        color:"white",
        textAlign:"center"
    },
    input: {
        borderWidth: 4,
        borderColor: "blue",
        padding:10,
        marginBottom: 30,
        borderRadius: 20,
        fontSize: 18,
        textAlign:"center",
        backgroundColor:"orange"
    },
    addButton: {
        backgroundColor: "green",
        padding: 10,
        width:200,
        alignSelf:"center",
        borderRadius: 30,
        marginBottom: 40,
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    task: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        borderRadius:20,
        marginBottom:20,
        backgroundColor:"yellow",
    },
    itemList: {
        fontSize:20,
        color:"gray",
        marginLeft:20,
    },
    taskButtons: {
        flexDirection: "row",
    },
    editButton: {
        marginRight: 10,
        color: "green",
        fontWeight: "bold",
        fontSize: 20,
        color:"blue"
    },
    deleteButton: {
        color: "red",
        fontWeight: "bold",
        fontSize:20,
        marginRight:20
    },
});

export default App;