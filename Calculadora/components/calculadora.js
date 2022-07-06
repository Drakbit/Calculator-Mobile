import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

class Calculadora extends React.Component {
    state = {
        numero1: null,
        numero2: null,
        resultado: 0
    }

    render() {
        return(
            
            <View style={styles.container}>
                <Text style={styles.texto} >{ this.state.resultado ? 'Resultado: '+ this.state.resultado : null}</Text>
                <Text>{'\n'}</Text>
                <TextInput style={styles.numeros} keyboardType='numeric' value={this.state.input}
                    onChangeText={(text)  => this.setState({numero1: parseInt(text)})}>
                </TextInput>
                <TextInput style={styles.numeros} keyboardType='numeric' value={this.state.numero2}
                    onChangeText={(text)  => this.setState({numero2: parseInt(text)})}>
                </TextInput>
                    <View style={styles.containerButtons}>
                            <TouchableOpacity style={styles.buttonOperation}>
                                <Button title="+" color="#d282cb" onPress={()=>{
                                    this.setState({resultado: this.state.numero1 && this.state.numero2 ? this.state.numero1 + this.state.numero2 : null})}}>
                                </Button>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonOperation}>
                            <Button title="-" color="#f8b057" onPress={()=>{
                                    this.setState({resultado: this.state.numero1 && this.state.numero2 ? this.state.numero1 - this.state.numero2 : null})}}>
                                </Button>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonOperation}> 
                                <Button title="*" color="#fd9ad0" onPress={()=>{
                                    this.setState({resultado: this.state.numero1 && this.state.numero2 ? this.state.numero1 * this.state.numero2 : null})}}>
                                </Button>
                            </TouchableOpacity>
                                
                            <TouchableOpacity style={styles.buttonOperation}>
                                <Button 
                                    title="/" color="#55ccf4" onPress={()=>{
                                    this.setState({resultado: this.state.numero1 && this.state.numero2 ? this.state.numero1 / this.state.numero2 : null})}}>
                                </Button>
                            </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

export default Calculadora;

const styles = StyleSheet.create({
    containerButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    texto: {
        fontSize: 34,
        textAlign: 'right'
    },
    numeros:{
        height: 50,
        fontSize: 30,
        borderWidth: 1,
        borderColor: '#000',
        textAlign: 'right',

    },
    buttonOperation:{
        width: '50%',
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 50
    },
    container:{
        flex: 1,
        justifyContent: 'center',
    }
});