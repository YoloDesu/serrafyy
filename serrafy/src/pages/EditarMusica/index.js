import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import api from "../../service/api";

export default function EditarMusica({}) {
  const navigation = useNavigation();

  const EditMusicModel = {
    id: null,
    nome: "",
    autor: "",
    genero: "",
    imagem: "",
  };

  const route = useRoute();
  const { id } = route.params;

  const [editMusicModel, setEditMusicModel] = useState(EditMusicModel);

  function handleEditMusicModel(value, key) {
    setEditMusicModel({
      ...editMusicModel,
      [key]: value,
    });
  }

  const editarMusica = async () => {
    if (
      !editMusicModel.nome ||
      !editMusicModel.autor ||
      !editMusicModel.genero ||
      !editMusicModel.imagem
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    try {
      const response = await api.put(
        `https://6542c2e301b5e279de1f8bd8.mockapi.io/musicas/${id}`,
        editMusicModel
      );
      alert("Musica alterada com sucesso:", response.status);
      navigation.navigate("Músicas");
    } catch (error) {
      alert("Erro na requisição editar Musica:" + error + id);
    }
  };

  //  useEffect(() => {
  //    setEditMusicModel(state.item);
  //  }, [state]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Editando a música</Text>
          <Text style={styles.subtitle}>ID: {id}</Text>

          <View style={styles.inputs}>
            <TextInput
              placeholder="Nome da Música"
              value={editMusicModel.nome}
              onChangeText={(value) => handleEditMusicModel(value, "nome")}
              style={styles.input}
            />

            <TextInput
              placeholder="Autor da Música"
              value={editMusicModel.autor}
              onChangeText={(value) => handleEditMusicModel(value, "autor")}
              style={styles.input}
            />

            <TextInput
              placeholder="Gênero Musical"
              value={editMusicModel.genero}
              onChangeText={(value) => handleEditMusicModel(value, "genero")}
              style={styles.input}
            />
            <TextInput
              placeholder="URI da Imagem"
              value={editMusicModel.imagem}
              onChangeText={(value) => handleEditMusicModel(value, "imagem")}
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={editarMusica}>
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#151515",
    flex: 1,
  },
  container: {
    backgroundColor: "#EBEBEB",
    width: "85%",
    height: "60%",
    padding: 30,
    borderRadius: 30,
    borderColor: "#004AAD",
    borderWidth: 3,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    marginTop: 10,
    // marginBottom: 0,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold",
  },
  inputs: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
  },
  input: {
    height: 50,
    width: 250,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  button: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 20,
    backgroundColor: "#004AAD",
    width: 170,
    borderWidth: 3,
    borderColor: "#151515",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
