import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.headingTxt}>Home Screen</Text>
            <Button title='Start Quiz' onPress={() => navigation.replace('QuizScreen')} />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    headingTxt:{
        fontSize: 30,
        marginVertical:20 
    }
})