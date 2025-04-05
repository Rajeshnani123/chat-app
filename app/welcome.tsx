import { Button } from "@/components/Button";
import { InputBox } from "@/components/InputBox";
import { loginUser } from "@/utils/apiCalls";
import { heightPercentageToDP, widthPercentageToDP } from "@/utils/responsive";
import { Link, useRouter } from "expo-router";
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
import axios from "axios";

const WelcomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const onSubmit = async () => {
    let data = {
      email,
      password,
    };
    axios
      .post("http://localhost:3000/login", data)
      .then((response) => {
        const token = response.data.token;
        console.log("token", token);
      })
      .catch((err) => console.log(err.message));
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
          <Text style={{ fontSize: heightPercentageToDP(3) }}>Get Started</Text>
        </View>

        <InputBox text={"Email/Mobile no"} onChange={setEmail} />
        <InputBox text={"password"} onChange={setPassword} security={true} />
        <Text
          onPress={() => Alert.alert("Change password screen")}
          style={{ paddingLeft: widthPercentageToDP(40), color: "#8164F1" }}
        >
          Forgot password?
        </Text>
        <View style={{ paddingTop: heightPercentageToDP(5) }}>
          <Button text={"Login"} onClick={() => onSubmit()} />
        </View>

        <Text style={{ marginTop: heightPercentageToDP(5) }}>
          Don't have an Account? <Link href={"/signUp"}>SignUp</Link>
        </Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default WelcomePage;
