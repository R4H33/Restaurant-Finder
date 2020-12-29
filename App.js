import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from "./View/screens/SearchScreen";
import ResultsShowScreen from "./View/screens/ResultsShowScreen";
import TestScreen from "./TestCode/TestScreen";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const FinderFlow = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
});

FinderFlow.navigationOptions = {
  title: "Finder",
  tabBarIcon: <AntDesign name="find" size={20} />,
};

const TestFlow = createStackNavigator({
  Test: TestScreen,
});

TestFlow.navigationOptions = {
  title: "Tests",
  tabBarIcon: <Octicons name="tools" size={24} color="black" />,
};

const Navigator = createBottomTabNavigator({
  Finder: FinderFlow,
  Test: TestFlow,
});

const App = createAppContainer(Navigator);

export default () => {
  return <App></App>;
};
