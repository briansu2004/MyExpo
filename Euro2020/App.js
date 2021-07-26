import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
//import styled from "styled-components";
//import WelcomeScreen from "./screens/WelcomeScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
    width: 120,
    height: 120,
  },
  bg: {
    width: 300,
    height: 240,
  },
});

// View -> UIView
export default function App() {
  //console.log("App executed");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45, textAlign: "center" }}>
        Happy Father's Day!
        {"\n"}
      </Text>

      {/* <Image
        style={styles.logo}
        source={require("./assets/euro2020/Euro_2020_Logo.webp")}
      /> */}

      <Image style={styles.bg} source={require("./assets/euro2020/euro.jpg")} />

      {/* <Image source={require("./assets/euro2020/FRA.webp")} />
      <Image source={require("./assets/euro2020/ITA.webp")} />
      <Image source={require("./assets/euro2020/POR.webp")} />
      <Image source={require("./assets/euro2020/NED.webp")} />
      <Image source={require("./assets/euro2020/BEL.webp")} />
      <Image source={require("./assets/euro2020/GER.webp")} /> */}

      <Text style={{ fontSize: 15, textAlign: "center" }}>
        {"\n"}
        {"\n"}
        React Native + Expo + iPhone + Android
      </Text>

      {/* <Image source={require("./assets/euro2020/AUT.webp")} />
      <Image source={require("./assets/euro2020/BEL.webp")} />
      <Image source={require("./assets/euro2020/CRO.webp")} />
      <Image source={require("./assets/euro2020/CZE.webp")} />
      <Image source={require("./assets/euro2020/DEN.webp")} />
      <Image source={require("./assets/euro2020/ENG.webp")} />
      <Image source={require("./assets/euro2020/ESP.webp")} />
      <Image source={require("./assets/euro2020/FIN.webp")} />
      <Image source={require("./assets/euro2020/FRA.webp")} />
      <Image source={require("./assets/euro2020/GER.webp")} />
      <Image source={require("./assets/euro2020/HUN.webp")} />
      <Image source={require("./assets/euro2020/ITA.webp")} />
      <Image source={require("./assets/euro2020/MKD.webp")} />
      <Image source={require("./assets/euro2020/NED.webp")} />
      <Image source={require("./assets/euro2020/POL.webp")} />
      <Image source={require("./assets/euro2020/POR.webp")} />
      <Image source={require("./assets/euro2020/RUS.webp")} />
      <Image source={require("./assets/euro2020/SCO.webp")} />
      <Image source={require("./assets/euro2020/SUI.webp")} />
      <Image source={require("./assets/euro2020/SVK.webp")} />
      <Image source={require("./assets/euro2020/SWE.webp")} />
      <Image source={require("./assets/euro2020/TUR.webp")} />
      <Image source={require("./assets/euro2020/UKR.webp")} />
      <Image source={require("./assets/euro2020/WAL.webp")} /> */}

      {/* <Image
      style={styles.tinyLogo}
      source={require("@expo/snack-static/react-native-logo.png")}
    /> */}
      {/* <Image
      style={styles.tinyLogo}
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
    /> */}
      {/* <Image
      style={styles.logo}
      source={{
        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
      }}
    /> */}
    </View>
  );
}

//return <WelcomeScreen />;

// return (
//   <View style={styles.container}>
//     <Text>Happy Father's Day!</Text>

//     <Image source={require("./assets/euro2020/FRA.webp")} />
//     <Image source={require("./assets/euro2020/ITA.webp")} />
//     <Image source={require("./assets/euro2020/GER.webp")} />
//     <Image source={require("./assets/euro2020/POR.webp")} />
//     <Image source={require("./assets/euro2020/NED.webp")} />
//     <Image source={require("./assets/euro2020/BEL.webp")} />

//     {/* <Image
//       style={styles.tinyLogo}
//       source={require("@expo/snack-static/react-native-logo.png")}
//     /> */}
//     {/* <Image
//       style={styles.tinyLogo}
//       source={{
//         uri: "https://reactnative.dev/img/tiny_logo.png",
//       }}
//     /> */}
//     {/* <Image
//       style={styles.logo}
//       source={{
//         uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
//       }}
//     /> */}
//   </View>
// );

{
  /* <Grid>
    <Col style={{ width: 40 }}>
        <Text>Fixed width</Text>
    </Col>
    <Col>
        <Text>Fluid width</Text>
    </Col>
</Grid> */
}
