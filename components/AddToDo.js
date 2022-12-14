import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
  Keyboard,
  Image,
} from 'react-native';

function AddToDo({onInsert}) {
  const [text, setText] = useState('');
  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />

      <View style={styles.circleWrapper}>
        <TouchableNativeFeedback onPress={onPress}>
          <View style={styles.buttonStyle}>
            <Image
              source={require('./../assets/icons/add_white/add_white.png')}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdb',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddToDo;
