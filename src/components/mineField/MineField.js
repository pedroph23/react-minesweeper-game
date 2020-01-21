import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Field from '../field/Field.js';

export default props => {

    const rows = props.board.map((row, r) => {
        const colums = row.map((field, c) => {
             return (
                <Field { ...field } 
                    key={ c } 
                    onOpen={() =>  props.onOpenField(r, c)} 
                    onSelect={e => props.onSelectField(r, c)} 
                />
            );
        });

        return <View style={{ flexDirection:'row'}}  key={ r }>{ colums }</View>;
    });
    
    return <View style={ styles.container }>{ rows }</View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
});