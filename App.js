import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native'

class App extends Component {
  render() {
    return(
      <View style={{flex:1, backgroundColor: '#b5b3b3'}}>
          <View style={{height:50, backgroundColor: '#696969'}} ></View>
          <View style={{flex:1, backgroundColor: '#ffffff'}} ></View>
          <View style={{height:50, backgroundColor: '#696969'}} ></View>
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