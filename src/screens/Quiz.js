import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useEffect } from 'react';
import {MCQs} from '../data/dummyData.js'

const Quiz = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = MCQs[currentIndex];
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10); 

  useEffect(() => {

    if (timer === 0) {
      handleNext(true); 
      return;
    }

    const countdown = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearTimeout(countdown); 
  }, [timer]);

  useEffect(() => {
    setTimer(10); 
  }, [currentIndex]);

  const handleNext = (autoSkip = false) => {

    if (!autoSkip && selectedOption === currentQuestion.correctOption) {
      setScore(score + 1);
    }

    if (currentIndex < MCQs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      const finalScore = score + (!autoSkip && selectedOption === currentQuestion.correctOption ? 1 : 0);
      navigation.replace('ResultScreen', { finalScore });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionHeading}>Question {currentQuestion.id}</Text>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>
      <Text style={styles.timeText}>⏱ Time left: {timer}s</Text>

      <RadioButton.Group
        onValueChange={(newValue) => setSelectedOption(newValue)}
        value={selectedOption}
      >
        {currentQuestion.options.map((option, index) => (
          <View key={index} style={styles.optionsContainer}>
            <RadioButton value={option} />
            <Text>{option}</Text>
          </View>
        ))}
      </RadioButton.Group>

      <View style={styles.nextBtnContainer}>
        <Button title="Next" onPress={() => handleNext()} disabled={!selectedOption} />
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20 
    },
    questionHeading: { 
        fontSize: 24, 
        marginBottom: 10 
    },
    questionText: { 
        fontSize: 20,
        marginBottom: 10 
    },
    timeText: { 
        fontSize: 16, 
        marginBottom: 20 
    },
    optionsContainer:{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 10 
    },
    nextBtnContainer:{ 
        marginTop: 20 
    }
})