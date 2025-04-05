import { heightPercentageToDP, widthPercentageToDP } from "@/utils/responsive";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface inputProps {
  text: string;
  onChange: Function;
  security?: boolean;
}

export const InputBox = ({ text, onChange, security }: inputProps) => {
  return (
    <View
      style={{
        height: heightPercentageToDP(15),
        justifyContent: "center",
        gap: heightPercentageToDP(1),
      }}
    >
      <Text style={{ paddingLeft: widthPercentageToDP(3) }}>{text}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ width: widthPercentageToDP(65) }}
          placeholder={`Enter ${text}}`}
          onChangeText={(value) => onChange(value)}
          secureTextEntry={security}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    height: heightPercentageToDP(7),
    width: widthPercentageToDP(80),
    borderRadius: heightPercentageToDP(1),
    justifyContent: "center",
    alignItems: "center",
  },
});
