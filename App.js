import React, {Component} from "react";
import {View, Text, Image, Button} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    }
    this.click = this.click.bind(this);
  }

  click(){
    this.setState({
      nome: 'Bruno'
    })
  }

  render() {
    return(
      <View>
          <Button title='Entrar' onPress={() => this.click()}/>
            <Text style={{textAlign:"center", marginTop:30, fontSize:30, color:'purple'}}>{this.state.nome}</Text>
      </View>
    )
  }
  
}

export default App;