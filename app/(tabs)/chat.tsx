import { ChatBox } from "@/components/chatBox";
import { ChatTop } from "@/components/chatTop";
import { Separator } from "@/components/Separator";
import { chatInfo } from "@/utils/constants";
import { heightPercentageToDP, widthPercentageToDP } from "@/utils/responsive";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
export default function Chat() {
  return (
    <SafeAreaView
      style={{
        marginLeft: widthPercentageToDP(5),
        marginRight: widthPercentageToDP(5),
        marginTop: heightPercentageToDP(8),
      }}
    >
      <ChatTop />
      <Separator />
      <FlatList
        data={chatInfo}
        renderItem={({ item }) => <ChatBox item={item} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
