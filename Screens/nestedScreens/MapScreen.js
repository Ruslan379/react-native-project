import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";


const MapScreen = ({ route }) => {
  console.log("Home-->route.params.location:", route.params.location); //!
  const { latitude, longitude } = route.params.location;
  // console.log("MapScreen-->route.params:", route.params); //! Мой вариант
  // const { latitude, longitude } = route.params; //! Мой вариант
  // console.log("MapScreen-->latitude:", latitude); //! Мой вариант
  // console.log("MapScreen-->longitude:", longitude); //! Мой вариант
  return (
    <View style={styles.container}>
      {/* <Text>Map Screen</Text> */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          // latitude: 50.485723,
          // longitude: 30.521819,
          latitude, //! Мой вариант
          longitude, //! Мой вариант
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          // coordinate={{ latitude: 50.485723, longitude: 30.521819 }}
          coordinate={{ latitude, longitude }} //! Мой вариант
          title="travel photo"
        />
      </MapView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default MapScreen;