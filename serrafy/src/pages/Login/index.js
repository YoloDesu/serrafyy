import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Animatable from "react-native-animatable";
import useNetworkStatus from "../../components/conexão/conexão";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  const mockUsername = "admin";
  const mockSenha = "123";
  const isConnected = useNetworkStatus();

  const logar = () => {
    if (!isConnected) {
      alert("Você está offline, verifique sua conexão com a internet.");
      console.log("Você está offline, verifique sua conexão com a internet.");
    }
    // Verificar se os campos estão vazios - o trim serve para eliminar os espaços vazios antes de uma string
    else if (!username.trim() || !senha.trim()) {
      alert("Preencha todos os campos");
    } else if (username !== mockUsername || senha !== mockSenha) {
      // Verificar se o usuário e senha estão corretos - de acordo com os dados mockados
      setUsername("");
      setSenha("");
      alert("Usuário ou senha incorretos");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}>
        <Animatable.View
          delay={500}
          animation="fadeInDown"
          style={styles.viewImage}>
          <Image
            source={require("../../../assets/serrafylogo.png")}
            style={{
              width: 200,
              height: 200,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "orange",
              resizeMode: "cover",
            }}
          />
        </Animatable.View>
        <Animatable.Text
          delay={500}
          animation="fadeInLeft"
          style={styles.titulo}>
          Login
        </Animatable.Text>
        <Animatable.View delay={1500} animation="fadeInUp" style={styles.main}>
          <View style={styles.inputsMain}>
            <Text style={styles.textos}>Usuário:</Text>
            <TextInput
              placeholder="Insira o username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholderTextColor="#727171"
              style={{
                height: 50,
                width: 250,
                borderColor: "gray",
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 30,
                paddingHorizontal: 10,
                fontSize: 15,
              }}
            />
            <Text style={styles.textos}>Senha:</Text>
            <TextInput
              placeholder="Insira a senha"
              keyboardType="numeric"
              value={senha}
              onChangeText={(text) => setSenha(text)}
              placeholderTextColor="#727171"
              style={{
                height: 50,
                width: 250,
                borderColor: "gray",
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 10,
                paddingHorizontal: 10,
                fontSize: 15,
              }}
              //Vai sumir com a senha quando escrever, transformando a numeração em ** ou em bolinhas.
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity onPress={logar} style={styles.botao}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#151515",
    alignItems: "center",
    width: "100%",
  },
  viewImage: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    marginTop: -70,
    width: 200,
    height: 200,
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 100,
    backgroundColor: "#FFFDFD",
    overflow: "hidden",
  },

  titulo: {
    color: "#FFFDFD",
    fontSize: 28,
    marginTop: 10,
    marginBottom: 30,
    fontWeight: "bold",
  },

  main: {
    backgroundColor: "#EBEBEB",
    width: 300,
    padding: 30,
    borderRadius: 30,
    borderColor: "#004AAD",
    borderWidth: 3,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  inputsMain: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
  },

  textos: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  botao: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#004AAD",
    width: 170,
    borderWidth: 3,
    borderColor: "#151515",
    borderRadius: 20,
  },

  textoBotao: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
