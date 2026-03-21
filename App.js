import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native'

class App extends Component {
  render() {
    return(
      <View>
          <Text style={styles.margem}>Eu sou o texto 1</Text>
          <Text style={styles.cor}>Eu sou o texto 2</Text>
          <Text style={styles.alinhaTexto}>Eu sou o texto 3</Text>
          <Text>Eu sou o texto 4</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  margem: {
    marginTop: 40
  },
  cor: {
    color: 'red'
  },
  alinhaTexto: {
    textAlign: 'center'
  }
})

export default App;