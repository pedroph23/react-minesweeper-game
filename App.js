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
  Text,
  View,
  StatusBar,
  Alert
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
import { createMinedBoard, invertFlag } from './src/controller.js';
import params from './src/params.js';
import { 
  reateMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines
} from './src/controller';

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
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {

    const board = cloneBoard(this.state.board)
    openField(board, row, column);

    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Voce perdeu...')
    }

    if (won) {
      Alert.alert('Voce ganhou !')
    }

    this.setState({ board, lost, won });
  }

  onSelectField = (row, column) => {

    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);

    const won = wonGame(board);

    if(won) {
      Alert.alert('Voce ganhou !');
    }

    this.setState({board, won})

  };


  render() {
    
      return (
        <View style={ styles.container }>
          <View style={ styles.board }>
            <MineField 
              board={ this.state.board } 
              onOpenField={ this.onOpenField }
              onSelectField = { this.onSelectField } />
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
