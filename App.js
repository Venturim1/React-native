import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';

  const frases = [
      "A sorte favorece quem se prepara.",
      "Algo incrível está prestes a acontecer na sua vida.",
      "Você vai conquistar algo que nem imaginava.",
      "Um pequeno passo hoje trará grandes resultados amanhã.",
      "Confie no processo, você está no caminho certo.",
      "Sua persistência será recompensada.",
      "Boas notícias estão a caminho.",
      "Uma oportunidade inesperada surgirá em breve.",
      "A felicidade está nas pequenas coisas.",
      "Você vai surpreender alguém (inclusive você mesmo).",
      "Hoje é um ótimo dia para pedir pizza 🍕",
      "Você merece um lanche agora.",
      "A sorte sorri para quem abre a geladeira.",
      "Seu código vai rodar de primeira… ou não 😅",
      "Alguém está pensando em você (provavelmente o boleto).",
      "Não confie em biscoitos da sorte... mas esse você pode 😉",
      "Você vai ficar rico… em experiência.",
      "Evite bugs hoje (ou pelo menos tente).",
      "Café resolverá 90% dos seus problemas ☕",
      "Você vai dormir tarde hoje… de novo.",
      "Grandes sistemas começam com uma linha de código.",
      "Erros são apenas aprendizado disfarçado.",
      "Continue, você está evoluindo mais do que imagina.",
      "O sucesso é a soma de pequenos esforços diários.",
      "Não desista — todo dev já passou por isso.",
      "Seu futuro eu vai agradecer por você não desistir hoje.",
      "Cada bug resolvido te deixa mais forte.",
      "Persistência é mais importante que talento."
    ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensagem: '"Veja a sua sorte"',
      caminho: require('./src/biscoito.png'),
      aberto: false
    }
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.quebrarBiscoitoNovamente = this.quebrarBiscoitoNovamente.bind(this);
  }

  quebrarBiscoito() {

    if(this.state.aberto === false) {
      const numero = Math.floor(Math.random() * frases.length);
      this.setState({mensagem: frases[numero], caminho: require('./src/biscoitoAberto.png'), aberto: true })
    }
  }

  quebrarBiscoitoNovamente() {
    this.setState({mensagem: '"Veja a sua sorte"', caminho: require('./src/biscoito.png'), aberto: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={(this.state.caminho)}
          style={styles.img}
        />

       

        <Text style={styles.txt}>{this.state.mensagem}</Text>

        <TouchableOpacity style={styles.botao} onPress={() => this.quebrarBiscoito()}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Abrir</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => this.quebrarBiscoitoNovamente()}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Resetar</Text>
          </View>
        </TouchableOpacity>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    height: 250,
    width: 250
  },
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 30,
    color: '#dd7222'
  },

  botao: {
    width: 250,
    height: 50,
    margin: 20,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#dd7222',
  },

  btnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  btnText: {
    color: '#dd7222',
    fontSize: 25,
    fontWeight: 'bold'
  }
})

export default App;