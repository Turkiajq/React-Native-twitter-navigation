import React, { Component } from 'react'

import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image } from "react-native";

export default class Login extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.img}>
                    <Image  source={require('../assets/twitter-logo.png')} style={styles.logo} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Log in to Twitter </Text>
                    <TextInput style={styles.input} placeholder="Username"/>
                    <TextInput style={styles.input} placeholder="Password"/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")} style={styles.button}>
                        <Text style={styles.text}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      color: "black",
      fontWeight: "bold",
    },
    main: {
      backgroundColor: "white",
      flexDirection: "column",
      flex: 2,
      padding: 30,
  
    },
    box: {
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      flex: 2
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 20,
      width: "100%",
      textAlign: "center"
    },
    button: {
      backgroundColor: "skyblue",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
      width: "100%",
      height: 100,
      margin: 10,
      height: 50
    },
    img: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      height: 90,
      width: 110,
    },
  });

