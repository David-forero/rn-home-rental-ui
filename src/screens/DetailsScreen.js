import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  StatusBar,
  Pressable,
  ScrollView,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";
import {
  Feather,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import COLORS from "../consts/colors";
const { width } = Dimensions.get("screen");

const DetailsScreen = ({ navigation, route }) => {
  const house = route.params;

  const InteriorImage = ({image}) =>{
    return <Image source={image} style={styles.interiorImage} />
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={styles.backgroundImageContainer}>
          <ImageBackground style={styles.backgroundImage} source={house.image}>
            <View style={styles.header}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.headerBtn}
              >
                <Feather name="arrow-left" size={20} color="black" />
              </Pressable>

              <Pressable style={styles.headerBtn}>
                <Ionicons name="heart-sharp" size={20} color={COLORS.red} />
              </Pressable>
            </View>
          </ImageBackground>

          <View style={styles.virtualTag}>
            <Text style={{ color: COLORS.white }}>Virtual tour</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
            <Text style={{fontSize: 20, fontWeight: 'bold'}} >{house.title}</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.ratingTag} >
                <Text style={{color: COLORS.white}}>4.8</Text>
              </View>

              <Text style={{fontSize: 13, marginLeft: 5}} >155 ratings</Text>
            </View>
          </View>

          <Text color={{fontSize: 16, color: COLORS.grey}} >{house.location}</Text>

          <View style={{ marginTop: 20, flexDirection: "row" }}>
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
              <Text style={styles.facilityText}>100m area</Text>
            </View>
          </View>

          <Text style={{marginTop: 20, color: COLORS.grey}}>{house.details}</Text>

          <FlatList
            keyExtractor={(_, key) => key.toString()}
            contentContainerStyle={{marginTop: 20}}
            data={house.interiors}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <InteriorImage image={item} />}
          />

          <View style={styles.footer} >
            <View>
              <Text style={{color: COLORS.blue, fontWeight: 'bold', fontSize: 18}} >$1,500</Text>

              <Text style={{color: COLORS.dark, fontSize: 12}} >Total Price</Text>
            </View>

            <View style={styles.bookNowBtn} >
              <Text style={{color: COLORS.white}} >Book Now</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
    height: 350,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  virtualTag: {
    top: -20,
    width: 120,
    backgroundColor: COLORS.dark,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40
  },
  ratingTag:{
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent:  'center',
    alignItems: 'center'
  },
  facility: {
    flexDirection: "row",
    marginRight: 15,
  },
  facilityText: {
    marginLeft: 5,
    color: COLORS.grey,
  },
  interiorImage:{
    width: width / 3 -20,
    height: 80,
    marginRight: 10,
    borderRadius: 10
  },
  footer:{
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    paddingHorizontal: 20
  }
});
