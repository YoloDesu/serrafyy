import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header}>Serrafy</Text>
      <Text style={styles.headerText}>
        Selecione o gênero musical desejado:
      </Text>
    </View>
  );
};

//Card das músicas
const MusicCard = ({ musicType, imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imageSource} style={styles.cardImage} />
      <Text style={styles.cardText}>{musicType}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const navigation = useNavigation();

  //Colocar a página que quer que seja redirecionado
  const navigateToMusicList = (musicType) => {
    let routeName = "";

    switch (musicType) {
      case "Rock":
        routeName = "Rock";
        break;
      case "Eletronica":
        routeName = "Eletronica";
        break;
      case "Pop":
        routeName = "Pop";
        break;
      case "HipHop":
        routeName = "HipHop";
        break;
      case "Pagode":
        routeName = "Pagode";
        break;
      case "Sertanejo":
        routeName = "Sertanejo";
        break;

      default:
        console.warn(`Rota não encontrada para o tipo de música: ${musicType}`);
    }
    if (routeName !== "") {
      navigation.navigate(routeName, { musicType });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Animatable.View animation="fadeInRight" style={styles.container}>
          <Header />
          <Animatable.View
            animation="fadeInUp"
            delay={1500}
            style={styles.content}
          >
            {/* Cards de música */}
            <MusicCard
              musicType="Rock"
              imageSource={require("../../../assets/music/rock.jpg")}
              onPress={() => navigateToMusicList("Rock")}
            />
            <MusicCard
              musicType="Eletrônica"
              imageSource={require("../../../assets/music/eletro.jpg")}
              onPress={() => navigateToMusicList("Eletronica")}
            />
            <MusicCard
              musicType="Pop"
              imageSource={require("../../../assets/music/pop.jpg")}
              onPress={() => navigateToMusicList("Pop")}
            />
            <MusicCard
              musicType="HipHop"
              imageSource={require("../../../assets/music/hiphop.jpg")}
              onPress={() => navigateToMusicList("HipHop")}
            />

            <MusicCard
              musicType="Pagode"
              imageSource={require("../../../assets/music/pagode.png")}
              onPress={() => navigateToMusicList("Pagode")}
            />
            <MusicCard
              musicType="Sertanejo"
              imageSource={require("../../../assets/music/sertanejo.png")}
              onPress={() => navigateToMusicList("Sertanejo")}
            />
          </Animatable.View>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#151515",
  },

  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#151515",
    color: "white",
  },
  header: {
    backgroundColor: "#151515",
    paddingVertical: 10,
    alignItems: "center",
    // marginHorizontal: -130,
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    justifyContent: "center",
    marginTop: 3,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: "orange",
    borderWidth: 1,
    width: "40%",
  },
  cardImage: {
    width: 130,
    height: 130,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#151515",
    resizeMode: "cover",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
