import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import AddToDo from './components/AddToDo';
import DateHead from './components/DateHead';

function App() {
  const today = new Date();

  return (
    <SafeAreaView>
      <DateHead date={today} />
      <AddToDo />
    </SafeAreaView>
  );
}

export default App;
