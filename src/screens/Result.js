import { View, Text, Button } from 'react-native';


const Result = ({ navigation, route  }) => {
  const { finalScore } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
      <Text style={{ fontSize: 30}}>Your Score</Text>
      <Text style={{ fontSize: 20, color:'green', marginVertical:20 }}>{finalScore}<Text style={{color:'black' }}> correct answers out of 5!</Text></Text>
      <Button title='Return to Home' onPress={() => navigation.replace('HomeScreen')} />
    </View>
  )
}

export default Result;