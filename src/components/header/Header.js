import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import Flag from '../flag/Flag.js';
export default class Header extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={ styles.container }>
                <View style={ styles.flagContainer }>
                    <TouchableOpacity style={ styles.flagButton } onPress={this.props.onFlagPress}>
                        <Flag bigger/>
                    </TouchableOpacity>
                    <Text style={ styles.flagsLeft }> = { this.props.flagsLeft } </Text>
                </View>

                    <TouchableOpacity style={ styles.button }
                        onPress={ this.props.onNewGame }>
                        <Text style={ styles.buttonLabel }>New Game</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#999',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold'
    }
})