import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    '"A vida trará coisas boas se tiver paciência."',
    '"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."',
    '"Não compense na ira o que lhe falta na razão."',
    '"Defeitos e virtudes são apenas dois lados da mesma moeda."',
    '"A maior de todas as torres começa no solo."',
    '"Não há que ser forte. Há que ser flexível."',
    '"Siga os bons e aprenda com eles."',
    '"Não importa o tamanho da montanha, ela não pode tapar o sol."',
    '"O bom-senso vale mais do que muito conhecimento."',
    '"Quem quer colher rosas tem de estar preparado para suportar os espinhos."',
    '"São os nossos amigos que nos ensinam as mais valiosas lições."',
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(frases[numeroAleatorio]);
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar(){
    setTextoFrase('');
    setImg(require('./src/biscoito.png'));
  }

  return(
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={ reiniciar }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;