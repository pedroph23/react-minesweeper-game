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
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Field from './src/components/field/Field';
import MineField from './src/components/mineField/MineField.js';
import { createMinedBoard, invertFlag, flagsUsed } from './src/controller.js';
import params from './src/params.js';
import { 
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines
} from './src/controller';

import Header from './src/components/header/Header.js';
import LevelSelection from './src/pages/LevelSelection';

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
      lost: false,
      showLevelSelection: false
    }
  }

  onOpenField = (row, column) => {

    const board = cloneBoard(this.state.board)
    openField(board, row, column);

    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('You lose...')
    }

    if (won) {
      Alert.alert('You win !')
    }

    this.setState({ board, lost, won });
  }

  onSelectField = (row, column) => {

    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);

    const won = wonGame(board);

    if (won) {
      Alert.alert('You win !');
    }

    this.setState({ board, won })
  };

  
  onLevelSelected = level => {
    params.difficultLevel = level;
    this.setState(this.createState());
  }

  render() {
      return (
        <View style={ styles.container }>
          <LevelSelection 
          isVisible={ this.state.showLevelSelection }
          onLevelSelected={ this.onLevelSelected }
          onClose={() => this.setState({showLevelSelection: false}) } 
          />
          <Header 
            flagsLeft={ this.minesAmount() - flagsUsed(this.state.board) } 
            onNewGame={() => this.setState(this.createState)}
            onFlagPress={() => this.setState({ showLevelSelection: true })} />
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
