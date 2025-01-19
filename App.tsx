import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '—'],
    ['1', '2', '3', '+'],
    ['','0', '.', '='],
  ];


  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}></Text>
      </View> 
      <View style={styles.buttonContainer}> 
        {buttons.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={[
                  styles.button,
                  ['=', '+', '÷', '×', '—'].includes(button) && styles.orangeButton,
                  ['AC', '+/-', '%'].includes(button) && styles.lightButton,
                ]}
              >
                <Text style={styles.buttonText}>{button}</Text>                  
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  display: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#000',
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  displayText: {
    fontSize: 80,
    color: '#fff',
  },
  buttonContainer: {
    flex: 2,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2a2c',
    borderRadius: 50, 
  },
  orangeButton: {
    backgroundColor: '#ff9f0a',
  },
  lightButton: {
    backgroundColor: '#5c5c5e',
  },
  buttonText: {
    fontSize: 40,
    color: '#fff',
  },
});

