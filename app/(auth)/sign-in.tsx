import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function SignIn() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};

  return (
    <ScrollView className={"flex-1 bg-white"}>
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-3xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome back! 👋
          </Text>
        </View>

        <View className="p-4">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-1"
          />

          {/* OAuth */}
          <OAuth />

          <Link
            href="/(auth)/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Don't have an account? </Text>
            <Text className="text-blue-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
