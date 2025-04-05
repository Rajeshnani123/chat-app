import { widthPercentageToDP, heightPercentageToDP } from "@/utils/responsive";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export const ChatTop = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: widthPercentageToDP(4),
        }}
      >
        <Ionicons
          name="person-circle-outline"
          size={heightPercentageToDP(6)}
          color="black"
        />
        <Text
          style={{ fontSize: heightPercentageToDP(2.5), fontWeight: "bold" }}
        >
          Chats
        </Text>
      </View>
      <Ionicons
        name="search-outline"
        size={heightPercentageToDP(4)}
        color="black"
      />
    </View>
  );
};
