import { heightPercentageToDP, widthPercentageToDP } from "@/utils/responsive";
import { View } from "react-native";

export const Separator = () => {
  return (
    <View
      style={{
        height: heightPercentageToDP(0.1),
        width: "100%",
        marginTop: heightPercentageToDP(2),
        marginBottom: heightPercentageToDP(2),
        backgroundColor: "gray",
      }}
    />
  );
};
