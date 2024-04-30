import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  // ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../service/api";
import CreateMusic from "../../components/CreateMusic";
import Musica from "../../components/Musicas";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Musicas() {
  const [novaMusica, setNovaMusica] = useState("");
  const [musicas, setMusicas] = useState([]);
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");
  const [loading, setLoading] = useState(false);
  // const [refreshing, setRefreshing] = useState(true);

  const carregarMusicasPorGenero = async (genero) => {
    setLoading(true);
    try {
      const response = await api.get(`?genero=${genero}`);
      console.log("Resposta da requisição carregarMusicasPorGenero:", response);
      setMusicas(response.data);
    } catch (error) {
      console.error("Erro na requisição carregarMusicasPorGenero:", error);
    } finally {
      setLoading(false);
    }
  };

  const cadastrar = async () => {
    const novaMusicaData = {
      nome: novaMusica,
      autor: autor,
      genero: genero,
      imagem: imagem,
    };

    try {
      const response = await api.post("", novaMusicaData);
      console.log("Resposta da requisição cadastrar:", response);
      setMusicas([...musicas, response.data]);
      setNovaMusica("");
      setAutor("");
      setGenero("");
      setImagem("");
    } catch (error) {
      console.error("Erro na requisição cadastrar:", error);
    }
  };

  const editarMusica = async (id) => {
    try {
      const response = await api.put(`/${id}`);
      console.log("Musica alterada com sucesso:", response);
      setMusicas(musicas.filter((musica) => musica.id !== id));
    } catch (error) {
      console.error("Erro na requisição editar Musica:", error);
    }
  };

  const excluirMusica = async (id) => {
    try {
      const response = await api.delete(`/${id}`);
      console.log("Resposta da requisição excluirMusica:", response);
      setMusicas(musicas.filter((musica) => musica.id !== id));
    } catch (error) {
      console.error("Erro na requisição excluirMusica:", error);
    }
  };

  useEffect(() => {
    carregarMusicasPorGenero(genero);
  }, [genero]);
  console.log(genero);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        {/* {refreshing ? <ActivityIndicator /> : null} */}
        <View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <CreateMusic
              novaMusica={novaMusica}
              setNovaMusica={setNovaMusica}
              autor={autor}
              setAutor={setAutor}
              genero={genero}
              setGenero={setGenero}
              imagem={imagem}
              setImagem={setImagem}
              cadastrar={cadastrar}
              buscarPorGenero={carregarMusicasPorGenero}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.title}>Suas Músicas</Text>

            {musicas.map((musica) => (
              <Musica
                key={musica.id}
                item={musica}
                editarMusica={editarMusica}
                excluirMusica={excluirMusica}
              />
            ))}
          </View>
        </View>
        {/* refreshControl=
        {
          <RefreshControl
            refreshing={refreshing}
            onRefresh={carregarMusicasPorGenero}
          />
        } */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#151515",
  },
  title: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    marginBottom: 10,
  },
});
