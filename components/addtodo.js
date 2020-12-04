import React,{ useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Addtodo({ submitHandler }){
    const [text,setText]=useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const submit = () => {
        submitHandler(text);
        setText('');
    }
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='add todos...'
            value={text}
            onChangeText={changeHandler}
            />
            <Button onPress={() => submit()} title='add todo' color='coral'/>
        </View>
    );
}

const styles =StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})