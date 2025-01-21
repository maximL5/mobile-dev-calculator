import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [equation, setEquation] = useState('');

  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '—'],
    ['1', '2', '3', '+'],
    ['','0', '.', '='],
  ];

  
  const decorativeSymbols: { [key: string]: string } = {
    '×': '*',
    '—': '-',
    '÷': '/'
  }
  
  // translates the decorative symbols to the actual operators
  function signTranslator(value: string) {
    if (value in decorativeSymbols) {
      return decorativeSymbols[value] 
    } else {
      return value
    }
  }

  function handleButtonPress(value: string) {
    if (value === 'AC') {
      setEquation('');
    } else if (value === '+/-') {
      if (equation.startsWith('-')) {
        setEquation(equation.substring(1));
      } else {
        setEquation('-' + equation);
      }
    } else if (value === '=') {
      try {
        let secretEquation = ''
        for (let char of equation) {
          secretEquation = secretEquation + signTranslator(char)
        }
        //console.log(secretEquation)
        setEquation(eval(secretEquation).toString());
      } catch {
        setEquation('Error'); 
      }
    } else {
      setEquation((prev: string) => prev + value);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{equation}</Text>
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
                onPress={() => handleButtonPress(button)}
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

