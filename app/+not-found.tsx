import { View, StyleSheet, Alert } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function NotFoundScreen() {
  const navigation = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("/welcome");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Link href="/welcome" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
