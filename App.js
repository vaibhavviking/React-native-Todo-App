import React,{ useState} from 'react';
import { FlatList, StyleSheet, Text, View,Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Addtodo from './components/addtodo';
import  Header  from './components/header';
import Todoitem from './components/todoitem';


export default function App() {
  const [todos,setTodos] = useState([
    {text:'buy coffee', key:'1'},
    {text:'create an App', key:'2'},
    {text:'play on the pc', key:'3'}
  ]);

  const pressHandler =(key) => {
    setTodos((prev) => {
      return prev.filter(todo => todo.key!=key);
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text:text, key:Math.random().toString()},
          ...prevTodos
        ];
      })
    }else{
      Alert.alert('OOPS!','Todos must be atleast 3 chars long',[
        {text:'Try Again',onPress:() => console.log('alert closed')}
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Addtodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={({ item }) => (
            <Todoitem item={item} pressHandler={pressHandler} />
          )} 
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content : {
    padding:40,
    flex: 1,
   
  },
  list : {
    flex: 1,
    marginTop: 20,
    
  },
});
