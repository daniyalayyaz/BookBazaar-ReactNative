import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function Signup() {
    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
            />
            <TextInput
                style={styles.input}
            />
            <TextInput
                style={styles.input}
            />
            <TextInput
                style={styles.input}
            />
            <View>
                <Button title='Sign Up' />
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <Text>Or login with</Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <Text>Already have a account?</Text>
            <Button title='Sign in here' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stretch: {
        width: '100%',
        height: 150,
        resizeMode: 'stretch',
    },
    input: {
        width: '90%',
        borderRadius: 25,
        margin: 10,
        border: '#e8b404',
        backgroundColor: '#e8e4e4',
        height: 40,
    }
});
