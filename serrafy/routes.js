import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
// import { Octicons } from "@expo/vector-icons";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Musicas from "./src/pages/Musicas";
import Sobre from "./src/pages/Sobre";
import Rock from "./src/pages/Generos/Rock/rock";
import Eletronica from "./src/pages/Generos/Eletronica/eletronica";
import Hiphop from "./src/pages/Generos/HipHop/hiphop";
import Pagode from "./src/pages/Generos/Pagode/pagode";
import Pop from "./src/pages/Generos/Pop/pop";
import Sertanejo from "./src/pages/Generos/Sertanejo/sertanejo";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EditarMusica from "./src/pages/EditarMusica";
import Welcome from "./src/pages/Welcome";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigate}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Rock"
        component={Rock}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Eletronica"
        component={Eletronica}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="HipHop"
        component={Hiphop}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Pagode"
        component={Pagode}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Pop"
        component={Pop}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Sertanejo"
        component={Sertanejo}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="EditarMusica"
        component={EditarMusica}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const TabNavigate = () => {
  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={{
        tabBarStyle: {
          borderTopColor: "transparent",
          paddingTop: 4,
          backgroundColor: "#c7c7c7",
          height: 75,
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="home-outline" size={28} color="#004AAD" />;
            }
            return <Ionicons name="home-outline" size={26} color="black" />;
          },
          // tabBarActiveTintColor: "tomato",
          // tabBarInactiveTintColor: "gray",
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Músicas"
        component={Musicas}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="musical-notes-outline"
                  size={28}
                  color="#004AAD"
                />
              );
            }
            return (
              <Ionicons name="musical-notes-outline" size={26} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Ionicons name="people-outline" size={28} color="#004AAD" />
              );
            }
            return <Ionicons name="people-outline" size={26} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
