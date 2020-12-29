import React, { useState } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import useResults from "../Model/hooks/useResults";
import ResultsList from "../Controller/components/ResultsList";

const TestScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || price === '$$' || price === '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Search for burger"
        style={styles.button}
        onPress={() => searchApi("burger")}
      />
      {results ? (
        <Text style={{ paddingLeft: 20, fontWeight: "bold", marginTop: 25 }}>
          Returned Search Result: Test OK
        </Text>
      ) : null}
      <ScrollView style={{ marginVertical: 20 }}>
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Medium Priced Restaurant List"
        />
      </ScrollView>
      <Text style={{ paddingLeft: 20, fontWeight: "bold" }}>
        Click on any result to see if details are shown
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 80,
    marginTop: 70,
  },
  button: {
    margin: 15,
  },
});

export default withNavigation(TestScreen);
