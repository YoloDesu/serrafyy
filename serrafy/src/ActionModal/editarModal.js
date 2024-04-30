import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import api from "../service/api";

export default function EditarModal({}) {
  const EditMuicModel = {
    id: "",
    nome: "",
    autor: "",
    genero: "",
  };

  const route = useRoute();
  const { item } = route.params;

  const [editMusicModel, setEditMusicModel] = useState(EditMuicModel);

  function handleEditMusicModel(value, key) {
    setEditMusicModel({
      ...editMusicModel,
      [key]: value,
    });
  }

  const editarMusica = async (id) => {
    try {
      const response = await api.put(`/${id}`, editMusicModel);
      alert("Musica alterada com sucesso:", response.status);
      setExibirModal(false);
    } catch (error) {
      alert("Erro na requisição editar Musica:", error);
    }
  };

  useEffect(() => {
    setEditMusicModel(item);
  }, [item]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edite sua música</Text>

      <View style={styles.inputs}>
        <TextInput
          placeholder="Nome da Música"
          value={editMusicModel.nome}
          onChangeText={(value) => handleEditMusicModel(value, "nome")}
          style={styles.input}
        />
      </View>

      <View style={styles.inputs}>
        <TextInput
          placeholder="Autor da Música"
          value={editMusicModel.autor}
          onChangeText={(value) => handleEditMusicModel(value, "autor")}
          style={styles.input}
        />
      </View>

      <View style={styles.inputs}>
        <TextInput
          placeholder="Gênero Musical"
          value={editMusicModel.genero}
          onChangeText={(value) => handleEditMusicModel(value, "genero")}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={editarMusica}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#d9d9d9",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputs: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    fontSize: 20,
    marginLeft: 18,
    width: "100%",
    borderBottomWidth: 1,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
