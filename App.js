import React , {useState} from "react";
import {Text, SafeAreaView, View, TextInput,TouchableOpacity} from "react-native";
import {appStyles, appStyles as styles} from "./styles";

function App (){
  
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  const handleAddTaskPress = () => {
    setTask([...task, text]);
    setText("");
  };
  
  
  return (
    <SafeAreaView style ={{flex:1}}>
      <View style= {styles.container}>
        <Text style={styles.title}>My Tasks({text})</Text>
        <Text style={styles.subtitle}>
          Enter your tasks in the text box below and press the "Add" button to add
        </Text>

        <TextInput 
        style={styles.input} 
        placeholder="Enter your task here"
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
        />
        
        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={handleAddTaskPress}
        >
          <Text style={styles.buttonText}>Add Task </Text>
        </TouchableOpacity>
       
      </View>
    </SafeAreaView>
  )
}
export default App;