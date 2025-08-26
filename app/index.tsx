import { Redirect } from "expo-router";
import "react-native-get-random-values";
import "./global.css";

export default function App() {
  return <Redirect href="/(auth)/welcome" />;
}
