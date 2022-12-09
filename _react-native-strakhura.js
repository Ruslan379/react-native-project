import React from "react";

import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    TextInput,
    Image,
    Dimensions
} from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={image} style={{ width: windowWidth, height: windowHeight, position: 'absolute', top: 0, left: 0 }} />
                <Text style={styles.text}>Inside</Text>
                <TextInput style={styles.textInput} placeholder='qwerty' />
            </View>
        </TouchableWithoutFeedback >
    </KeyboardAvoidingView>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    textInput: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#fff"
    }
});
export default App;

//! і по інпутах можна опрацьовувати подію сабміт
< TextInput
    style={[styles.textInput]}
    placeholder='搜索'
    placeholderTextColor='#bbb'
    onChange={(event) => {
        this.searchChange(event.nativeEvent.text)
    }}
    returnKeyType='search'
    autoFocus={true}
    value={this.props.searchName}
    selectionColor={colors.orangeColor}
    onSubmitEditing={this.searchSubmit}
    clearButtonMode="while-editing"
/>