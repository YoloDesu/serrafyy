import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

export default function CreateMusic({
  novaMusica,
  setNovaMusica,
  autor,
  setAutor,
  genero,
  setGenero,
  imagem,
  setImagem,
  cadastrar,
  buscarPorGenero,
}) {
  const [filtroGenero, setFiltroGenero] = useState("");

  const handleCadastrar = () => {
    if (!novaMusica || !autor || !genero || !imagem) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }

    cadastrar();
  };

  const handleBuscarPorGenero = () => {
    buscarPorGenero(filtroGenero);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicione uma Música</Text>
      <View style={styles.viewInput}>
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: "#151515",
            borderWidth: 2,
            borderRadius: 20,
            marginBottom: 10,
            paddingHorizontal: 10,
            fontSize: 15,
          }}
          value={novaMusica}
          onChangeText={(newMusic) => setNovaMusica(newMusic)}
          placeholder="Nome da música"
          placeholderTextColor="#727171"
        />
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: "#151515",
            borderWidth: 2,
            borderRadius: 20,
            marginBottom: 10,
            paddingHorizontal: 10,
            fontSize: 15,
          }}
          value={autor}
          onChangeText={(newAutor) => setAutor(newAutor)}
          placeholder="Autor"
          placeholderTextColor="#727171"
        />
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: "#151515",
            borderWidth: 2,
            borderRadius: 20,
            marginBottom: 10,
            paddingHorizontal: 10,
            fontSize: 15,
          }}
          value={genero}
          onChangeText={(newGenero) => setGenero(newGenero)}
          placeholder="Gênero"
          placeholderTextColor="#727171"
        />
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: "#151515",
            borderWidth: 2,
            borderRadius: 20,
            marginBottom: 10,
            paddingHorizontal: 10,
            fontSize: 15,
          }}
          value={imagem}
          onChangeText={(newImagem) => setImagem(newImagem)}
          placeholder="Uri da Imagem"
          placeholderTextColor="#727171"
        />
        <TouchableOpacity onPress={handleCadastrar} style={styles.botao}>
          <Text style={styles.textoBotao}>Adicionar Música</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewInput}>
        <Text style={styles.titleFiltro}>Filtrar as músicas por gênero</Text>
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: "#151515",
            borderWidth: 2,
            borderRadius: 20,
            marginBottom: 10,
            paddingHorizontal: 10,
            fontSize: 15,
          }}
          value={filtroGenero}
          onChangeText={(e) => setFiltroGenero(e)}
          placeholder="Digite o gênero da música"
          placeholderTextColor="#727171"
        />
        <TouchableOpacity onPress={handleBuscarPorGenero} style={styles.botao}>
          <Text style={styles.textoBotao}>Buscar por Gênero</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBuscarPorGenero} style={styles.botao}>
          <Text style={styles.textoBotao}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginBottom: 10,
    paddingBottom: 15,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#EBEBEB",
    width: "90%",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "orange",
  },
  title: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#151515",
    marginTop: 10,
    marginBottom: 10,
  },
  titleFiltro: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#151515",
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
  },
  viewInput: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  input: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  botao: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#151515",
    width: 200,
    borderWidth: 2,
    borderColor: "orange",
    borderRadius: 20,
  },

  textoBotao: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
