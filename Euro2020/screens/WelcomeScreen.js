import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Happy Father's Day!</Text>
      <p />
      <div>
        <Image source={require("../assets/euro2020/AUT.webp")} />
        <Image source={require("../assets/euro2020/BEL.webp")} />
        <Image source={require("../assets/euro2020/CRO.webp")} />
        <Image source={require("../assets/euro2020/CZE.webp")} />
        <Image source={require("../assets/euro2020/DEN.webp")} />
        <Image source={require("../assets/euro2020/ENG.webp")} />
        <Image source={require("../assets/euro2020/ESP.webp")} />
        <Image source={require("../assets/euro2020/FIN.webp")} />
        <Image source={require("../assets/euro2020/FRA.webp")} />
        <Image source={require("../assets/euro2020/GER.webp")} />
        <Image source={require("../assets/euro2020/HUN.webp")} />
        <Image source={require("../assets/euro2020/ITA.webp")} />
        <Image source={require("../assets/euro2020/MKD.webp")} />
        <Image source={require("../assets/euro2020/NED.webp")} />
        <Image source={require("../assets/euro2020/POL.webp")} />
        <Image source={require("../assets/euro2020/POR.webp")} />
        <Image source={require("../assets/euro2020/RUS.webp")} />
        <Image source={require("../assets/euro2020/SCO.webp")} />
        <Image source={require("../assets/euro2020/SUI.webp")} />
        <Image source={require("../assets/euro2020/SVK.webp")} />
        <Image source={require("../assets/euro2020/SWE.webp")} />
        <Image source={require("../assets/euro2020/TUR.webp")} />
        <Image source={require("../assets/euro2020/UKR.webp")} />
        <Image source={require("../assets/euro2020/WAL.webp")} />
      </div>
      <StatusBar style="auto" />
    </View>
  );
}

export default WelcomeScreen;
