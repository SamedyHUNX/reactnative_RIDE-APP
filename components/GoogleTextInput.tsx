import { icons } from "@/constants";
import { GoogleInputProps } from "@/types/type";
import React from "react";
import { Image, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const googlePlacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export default function GoogleTextInput({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
    >
      <GooglePlacesAutocomplete
        fetchDetails={true}
        predefinedPlaces={[]}
        placeholder="Where do you want to go?"
        debounce={200}
        minLengthAutocomplete={2}
        returnKeyType={"search"}
        listViewDisplayed="auto"
        enablePoweredByContainer={false}
        styles={{
          textInputContainer: {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            marginHorizontal: 20,
            position: "relative",
            shadowColor: "#d4d4d4",
            backgroundColor: "transparent",
            borderTopWidth: 0, 
            borderBottomWidth: 0, 
          },
          textInput: {
            backgroundColor: textInputBackgroundColor || "#ffffff",
            borderRadius: 200,
            fontSize: 16,
            height: 50,
            shadowColor: "#d4d4d4",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 5,
            paddingHorizontal: 50, 
            color: "#000",
          },
          listView: {
            position: "absolute",
            top: 55, 
            zIndex: 999, 
            backgroundColor: "#fff",
            borderRadius: 10,
            marginHorizontal: 20,
            shadowColor: "#d4d4d4",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 10,
            maxHeight: 300,
          },
          row: {
            padding: 20,
            height: 58,
            borderBottomWidth: 1,
            borderBottomColor: "#f0f0f0",
          },
          separator: {
            height: 1,
            backgroundColor: "#f0f0f0",
          },
          description: {
            color: "#000",
            fontSize: 14,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
        onPress={(data, details = null) => {
          console.log("Place selected:", data.description);
          console.log("Details:", details);

          if (details && details.geometry && details.geometry.location) {
            handlePress({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              address: data.description,
            });
          } else {
            console.error("No details or geometry found for selected place");
          }
        }}
        onFail={(error) => {
          console.error("GooglePlacesAutocomplete Error:", error);
        }}
        query={{
          key: googlePlacesApiKey,
          language: "en",
          components: "country:us", // Restrict to specific country if needed
          types: "establishment", // You can adjust this based on your needs
          radius: 30000, // Search radius in meters
        }}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        renderLeftButton={() => (
          <View className="absolute left-5 top-3 justify-center items-center w-6 h-6 z-10">
            <Image
              source={icon ? icon : icons.search}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </View>
        )}
        textInputProps={{
          placeholderTextColor: "gray",
          placeholder: initialLocation ?? "Where do you want to go?",
          autoCorrect: false,
          autoCapitalize: "none",
          returnKeyType: "search",
        }}
      />
    </View>
  );
}
