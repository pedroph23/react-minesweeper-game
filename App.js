/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import params from './src/params';
import Field from  './src/components/field/Field';

export default class App extends Component {
  
  render(){
    return (
      <View>
        <Text>
          Tamanho da grade:
          { params.getRowAmount() } x { params.getColumnsAmount() }
        </Text>
        <View>
            <Field />
            <Field opened/>
            <Field opened nearMines={1}/>
            <Field opened nearMines={2}/>
            <Field opened nearMines={3}/>
            <Field opened nearMines={8}/>
        </View>
      </View>
    )
  };
}
