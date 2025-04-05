import { Button } from "@/components/Button";
import { InputBox } from "@/components/InputBox";
import { heightPercentageToDP, widthPercentageToDP } from "@/utils/responsive";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const onSubmit = () => {
    router.navigate("/welcome");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: heightPercentageToDP(3),
          }}
        >
          <View
            style={{
              borderWidth: 1,
              height: heightPercentageToDP(20),
              borderRadius: widthPercentageToDP(25),
              width: heightPercentageToDP(20),
            }}
          >
            <Image />
          </View>
          <Text style={{ fontSize: heightPercentageToDP(3) }}>Signup</Text>
        </View>

        <InputBox text={"Email/Mobile no"} onChange={setEmail} />
        <InputBox text={"password"} onChange={setPassword} security={true} />

        <View style={{ paddingTop: heightPercentageToDP(5) }}>
          <Button text={"Signup"} onClick={() => onSubmit()} />
        </View>

        <Text style={{ marginTop: heightPercentageToDP(5) }}>
          Already Have an account?{" "}
          <Text onPress={() => router.back()}>Login</Text>
        </Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
