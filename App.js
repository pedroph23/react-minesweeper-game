/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Field from './src/components/field/Field';
import MineField from './src/components/mineField/MineField.js';
import { createMinedBoard } from './src/controller.js';
import params from './src/params.js';
export default class APP extends Component {
  
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  //Create limit number mines in board game
  minesAmount = () => {
    const cols = params. getColumnsAmount();
    const rows = params.getRowAmount();

    return Math.ceil(cols * rows  * params.difficultLevel);
  }

  // Create state(React) to change states in blocks at board game
  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowAmount();

    return {
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }

  render() {
    
      return (
        <View style={ styles.container }>
          <View style={ styles.board }>
            <MineField board={ this.state.board } />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
 
});
