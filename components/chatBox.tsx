import { taskDate } from "@/utils/commonFunction";
import { heightPercentageToDP, widthPercentageToDP } from "@/utils/responsive";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export const ChatBox = ({
  item,
}: {
  item: { name: string; message: string };
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: widthPercentageToDP(85),
        marginLeft: widthPercentageToDP(5),
        alignItems: "center",
        height: heightPercentageToDP(5),
      }}
    >
      <View style={{ flexDirection: "row", gap: widthPercentageToDP(2) }}>
        <Ionicons name="person-circle" size={heightPercentageToDP(5)} />
        <View style={{ gap: heightPercentageToDP(0.3) }}>
          <Text style={{ fontWeight: "700" }}>{item.name}</Text>
          <Text>{item.message}</Text>
        </View>
      </View>
      <Text>{taskDate(Date.now())}</Text>
    </View>
  );
};
