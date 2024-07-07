import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "../components/Button";
import { THEME } from "../theme";


export const Home = () => {
  const navigation = useNavigation();

  const startGameclick = () => navigation.navigate("Game");

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
    

      <View>
        
        <Text
          style={{
            fontSize: THEME.FONT_SIZES.S,
            textAlign: "center",
            fontFamily: THEME.FONT,
          }}
        >
         İyi oyunlar?
        </Text>
      </View>

      <Button text="Basla" onPress={startGameclick} />
    </View>
  );
};
