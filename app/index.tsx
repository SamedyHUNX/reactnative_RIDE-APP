import { Redirect } from "expo-router";
import "./global.css";

export default function App() {
  return <Redirect href="/(auth)/welcome" />;
}
