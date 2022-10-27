import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { faker } from "@faker-js/faker";

const ChatListItem = () => {
  return (
    <View style={style.container}>
      <Image source={{ uri: faker.image.avatar() }} style={style.image} />
      <View style={style.content}>
        <View style={style.row}>
          <Text numberOfLines={1} style={style.name}>
            {faker.name.firstName()}
          </Text>
          <Text style={style.subtitle}>8:30</Text>
        </View>
        <Text numberOfLines={2} style={style.subtitle}>
          Hello there
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
  },
  row: { flexDirection: "row", marginBottom: 5 },
  name: { flex: 1, fontWeight: "bold" },
  subtitle: { color: "gray" },
});

export default ChatListItem;
