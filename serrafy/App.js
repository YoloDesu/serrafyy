import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigate } from "./routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#010625" barStyle="light-content" />
      <StackNavigate></StackNavigate>
    </NavigationContainer>
  );
}
