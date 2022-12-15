import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Map Screen</Text> */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.5262122,
          longitude: 30.5991799,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{ latitude: 50.5262122, longitude: 30.5991799 }}
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