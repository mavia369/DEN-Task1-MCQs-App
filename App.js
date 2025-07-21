import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home.js'
import Quiz from './src/screens/Quiz.js'
import Result from './src/screens/Result.js'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={Home}/>
        <Stack.Screen name='QuizScreen' component={Quiz}/>
        <Stack.Screen name='ResultScreen' component={Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;