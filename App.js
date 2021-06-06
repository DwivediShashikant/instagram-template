import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
import PhotoFeed from "./src/components/photo-feed";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from  "./src/reducers";
import ReduxThunk from "redux-thunk";

// Provider provides the store for the encapsulating component
// in out case encapsulating component is App
// reduce is the main reducer which will have details of all the reducer of difference components
export default function App() { 
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}> 
      <View>
        <Header title="Photos" />
        <PhotoFeed />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
