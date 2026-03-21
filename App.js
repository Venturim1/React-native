import React, {Component} from "react";
import {View, TextInput, StyleSheet, Text, Button, Alert} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    }
    this.entrar = this.entrar.bind(this)
  }

  entrar() {
    if(this.state.input === ''){
      alert("Digiete o seu nome!")
      return;
    }
    this.setState({nome:`Bem vindo: ${this.state.input} !` })
  }  

  render() {
    return(
      <View style={{flex:1}}>
          <TextInput
          style={styles.input}
          placeholder="Digiete o seu nome"
          underlineColorAndroid='transparent'
          onChangeText={(texto => this.setState({input: texto}))}
          />

          <Button title="Entrar" onPress={() => this.entrar()}/>
          <Text style={styles.text}>{this.state.nome}</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  input: {
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 4,
    margin:10
  },
  text: {
    textAlign:'center',
    fontSize: 25
  }

})

export default App;