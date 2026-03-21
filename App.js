import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

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
      mensagem: "Veja a sua sorte",
      caminho: require('./src/biscoito.png'),
      aberto: false
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.quebrarBiscoitoNovamente = this.quebrarBiscoitoNovamente.bind(this);
  }

  quebrarBiscoito() {
    if (!this.state.aberto) {
      const numero = Math.floor(Math.random() * frases.length);
      this.setState({
        mensagem: frases[numero],
        caminho: require('./src/biscoitoAberto.png'),
        aberto: true
      });
    }
  }

  quebrarBiscoitoNovamente() {
    this.setState({
      mensagem: "Veja a sua sorte",
      caminho: require('./src/biscoito.png'),
      aberto: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>🥠 Biscoito da Sorte</Text>

        <Image
          source={this.state.caminho}
          style={styles.img}
        />

        <View style={styles.cardMensagem}>
          <Text style={styles.txt}>{this.state.mensagem}</Text>
        </View>

        <TouchableOpacity style={[styles.botao, styles.botaoAbrir]} onPress={this.quebrarBiscoito}>
          <Text style={styles.btnTextAbrir}>Abrir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoReset]} onPress={this.quebrarBiscoitoNovamente}>
          <Text style={styles.btnTextReset}>Resetar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f4c27a',
    marginBottom: 25
  },

  img: {
    width: 230,
    height: 230,
    marginBottom: 25
  },

  cardMensagem: {
    backgroundColor: '#1f1f1f',
    borderWidth: 1,
    borderColor: '#dd7222',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 18,
    marginBottom: 25,
    minHeight: 110,
    width: '100%',
    justifyContent: 'center'
  },

  txt: {
    fontSize: 21,
    color: '#f5d7b2',
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: '600'
  },

  botao: {
    width: '100%',
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },

  botaoAbrir: {
    backgroundColor: '#dd7222'
  },

  botaoReset: {
    borderWidth: 2,
    borderColor: '#dd7222'
  },

  btnTextAbrir: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  btnTextReset: {
    color: '#dd7222',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;