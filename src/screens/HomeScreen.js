import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Pressable,
  ScrollView,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";
import { Feather, MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import houses from "../consts/houses";
import COLORS from "../consts/colors";
const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const ListCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const categoryList = ["Popular", "Recommended", "Nearest"];

    return (
      <View style={styles.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable onPress={() => setSelectedCategory(index)} key={index}>
            <Text
              style={[
                styles.categoryListText,
                index == selectedCategory && styles.selectedCategory,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    const options = [
      { title: "Buy a Home", img: require("../assets/house1.jpg") },
      { title: "Buy a Home", img: require("../assets/house2.jpg") },
    ];

    return (
      <View style={styles.optionListContainer}>
        {options.map((option, index) => (
          <View style={styles.optionCard} key={index}>
            <Image source={option.img} style={styles.optionCardImage} />
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
              {option.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ house }) => {
    return (
      <Pressable onPress={() => {navigation.navigate('DetailsScreen', house)}}>
        <View style={styles.card}>
          <Image source={house.image} style={styles.cardImage} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {house.title}
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: COLORS.blue }}
            >
              $1400
            </Text>
          </View>
          <Text style={{ fontSize: 14, marginTop: 5, color: COLORS.grey }}>
            {house.location}
          </Text>

          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View style={styles.facility}>    
              <Ionicons name="md-bed-outline" size={18} color="black" />
              <Text style={styles.facilityText}>5</Text>
            </View>

            <View style={styles.facility}>
           
            <FontAwesome5 name="bath" size={18} color="black" />
              <Text style={styles.facilityText}>2</Text>
            </View>

            <View style={styles.facility}>
            <Feather name="layout" size={18} color="black" />
              <Text style={styles.facilityText}>100m</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <View style={styles.header}>
        <View>
          <Text style={{ color: COLORS.grey }}>Location</Text>
          <Text
            style={{ color: COLORS.dark, fontSize: 20, fontWeight: "bold" }}
          >
            Canada
          </Text>
        </View>

        <Image
          source={require("../assets/person.jpg")}
          style={styles.profileImage}
        />
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.searchInputContainer}>
            <Feather name="search" size={25} color={COLORS.grey} />
            <TextInput placeholder="Search address, city, location" />
          </View>

          <View style={styles.sortBtn}>
            <MaterialIcons name="tune" size={25} color={COLORS.white} />
          </View>
        </View>

        <ListOptions />
        <ListCategories />
        <FlatList
          snapToInterval={width - 30}
          contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={houses}
          renderItem={({ item }) => <Card house={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  optionListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  optionCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionCardImage: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  categoryListContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
    color: COLORS.grey,
  },
  selectedCategory: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 50,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
  facility: {
    flexDirection: "row",
    marginRight: 15,
  },
  facilityText: {
    marginLeft: 5,
    color: COLORS.grey,
  },
});
