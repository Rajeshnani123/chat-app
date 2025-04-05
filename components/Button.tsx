import { heightPercentageToDP, widthPercentageToDP } from "@/utils/responsive";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
interface buttonType {
  onClick: () => void;
  text: String;
}

export const Button = ({ onClick, text }: buttonType) => {
  return (
    <TouchableOpacity style={styles.buttonView} onPress={onClick}>
      <Text style={{ color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    height: heightPercentageToDP(6),
    justifyContent: "center",
    alignItems: "center",
    width: widthPercentageToDP(50),
    backgroundColor: "#2D0C57",
    borderRadius: heightPercentageToDP(2),
  },
});
